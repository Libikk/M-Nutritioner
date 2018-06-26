import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { getNutritionData, popUpError } from '../actions/mainPageActions';
import appSettings from '../../../../appSettings';

class ResultList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 1 };
    this.handleChange = this.handleChange.bind(this);
  }

  getNutrition = (itemId) => {
    const url = `https://api.nal.usda.gov/ndb/reports/?ndbno=${itemId}&format=json&api_key=${appSettings.apiKey}`;
    axios.get(url)
      .then(res => this.props.getNutritionData(res))
      .catch((err) => {
        console.error(err);
        this.props.popUpError();
      });
  }

  handleChange(event) { this.setState({ currentPage: Number(event.target.id) }); }

  render() {
    const { searchResult } = this.props.searchData;
    const { currentPage } = this.state;

    const indexOfLastTodo = currentPage * appSettings.resultPerPage;
    const indexOfFirstTodo = indexOfLastTodo - appSettings.resultPerPage;
    const currentTodos = searchResult.slice(indexOfFirstTodo, indexOfLastTodo);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(searchResult.length / appSettings.resultPerPage); i++) { // eslint-disable-line
      pageNumbers.push(i);
    }
    return (
      <div className="resultlist-container">
        <ul className="result-list">
          {currentTodos.map(element => (
            <li onClick={() => this.getNutrition(element.ndbno)} className="each-result-container" key={element.ndbno}>
              <span className="header-result-container">{element.name}</span>
              <p className="product-category-container">Type: {element.group}</p>
              <i className="material-icons">arrow_forward_ios</i>
            </li>))}
        </ul>
        <ul className="page-list">
          {pageNumbers.map(number => <li id={number} onClick={this.handleChange} key={number}>[{number}]</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => state;

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    popUpError,
    getNutritionData,
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(ResultList);
