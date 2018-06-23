import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from '@material-ui/core/Input';
import { changeWeight, removeItem, changeWeightMyItem } from '../actions/mainPageActions';

class MyNutritionPage extends React.Component {
  constructor() {
    super();
    this.state = {
      idToEdit: 0,
      weight: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const weight = event.target.value > 5000 ? 5000 : event.target.value;
    this.props.changeWeightMyItem({ weight, id: event.target.id });
    this.setState({ weight });
  }
  editMode(id, weight) {
    this.setState({
      idToEdit: id,
      weight,
    });
  }

  addAllItemsTogether(nutritionName) {
    let valueNutrition = 0;
    this.props.searchData.myNutritionList.forEach((singleFood) => {
      if (nutritionName === 'weight') {
        valueNutrition += Number(singleFood.weight);
      } else {
        valueNutrition += singleFood.nutrition[nutritionName].value;
      }
    });
    return valueNutrition;
  }
  removeItem(id) {
    this.props.removeItem(id);
    this.setState({ idToEdit: 0 });
  }
  render() {
    const { myNutritionList } = this.props.searchData;
    return (
      <div className="nutrition-page-list-container">
        <ul className="nutrition-page-list">
          <li className="each-row-list top-row">
            <div>Food</div>
            <div>Weight</div>
            <div>Kcal</div>
            <div>Protein</div>
            <div>Carbs</div>
            <div>Fat</div>
          </li>
          {myNutritionList.map(single =>
            (
              <li className="each-row-list middle-rows" key={single.id}>
                <div>{single.name}</div>
                {
                  this.state.idToEdit === single.id ?
                    <div className="edit-mode-input-container">
                      <Input className="edit-mode-input" id={single.id} value={this.state.weight} onChange={this.handleChange} type="number "min="0" max="999" />
                      <i onClick={() => this.setState({ idToEdit: 0 })} className="material-icons done-icon">done</i>
                      <i className="material-icons remove-icon" onClick={() => this.removeItem(single.id)}>remove_circle_outline</i>
                    </div> :
                    <div className="not-edit-mode-input-container">
                      {single.weight}
                      <i className="material-icons" onClick={() => this.editMode(single.id, single.weight)}>edit</i>
                      <i className="material-icons remove-icon" onClick={() => this.removeItem(single.id)}>remove_circle_outline</i>
                    </div>
                  }
                <div>{single.nutrition[0].value}</div>
                <div>{single.nutrition[1].value}</div>
                <div>{single.nutrition[3].value}</div>
                <div>{single.nutrition[2].value}</div>
              </li>
            ))}
          <li className="each-row-list bottom-row">
            <div>Summary</div>
            <div>{this.addAllItemsTogether('weight')}</div>
            <div>{this.addAllItemsTogether(0)}</div>
            <div>{this.addAllItemsTogether(2)}</div>
            <div>{this.addAllItemsTogether(3)}</div>
            <div>{this.addAllItemsTogether(1)}</div>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => state;

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    removeItem,
    changeWeight,
    changeWeightMyItem,
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(MyNutritionPage);

