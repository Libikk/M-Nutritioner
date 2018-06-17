import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { getSearchData, getNutritionData, popUpError } from '../actions/mainPageActions';
import appSettings from '../../../../appSettings';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  searchValue(searchValue) {
    const url = `https://api.nal.usda.gov/ndb/search/?format=json&q=${searchValue}&ds=Standard%20Reference&sort=r&max=50&offset=0&api_key=${appSettings.apiKey}`;
    axios.get(url)
      .then((res) => {
        this.props.getSearchData(res.data.list.item);
      })
      .catch((err) => {
        console.error(err);
        this.props.popUpError();
      });
  }
  handleChange(event) { this.setState({ value: event.target.value }); }
  handleKeyPress(event) { return event.key === 'Enter' ? this.searchValue(this.state.value) : null; }

  render() {
    return (
      <div className="search-container">
        <img className="fixed-veggies" src="./src/js/images/veggiemix.png" alt="nutritioner, veggies" />
        <h1>M-Nutritioner</h1>
        <Input type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress} placeholder="Type product" />
        <Button onClick={() => this.searchValue(this.state.value)}>Search</Button>
      </div>
    );
  }
}

const mapStateToProps = state => state;

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    popUpError,
    getSearchData,
    getNutritionData,
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Search);
