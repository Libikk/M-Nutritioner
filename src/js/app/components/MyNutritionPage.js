import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { changeWeight } from '../actions/mainPageActions';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';


class MyNutritionPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      idToEdit: 0,
      weight: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) { 
    const weight = event.target.value > 5000 ? 5000 : event.target.value;
    this.setState({weight: weight});
  }
  editMode(id, weight) {
    this.setState({ 
      idToEdit: id,
      weight: weight
    });
  }
  confirmChanges(idAndWeight) {
    this.setState({ idToEdit: 0 });
    this.props.changeWeight(idAndWeight);
  }

  addAllItemsTogether(nutritionName) {
    let valueNutrition = 0;
    this.props.searchData.myNutritionList.forEach(singleFood => {
      if(nutritionName === 'weight') {
        valueNutrition = valueNutrition + singleFood.weight;
      } else {
        valueNutrition = valueNutrition + singleFood.nutrition[nutritionName].value;
      }
    });
    return valueNutrition;
   }
  render() {  
    const { myNutritionList } = this.props.searchData;
    console.log(this.props.searchData);
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
            <li className="each-row-list middle-rows" key={single.id}>
              <div>{single.name}</div>
              {
                this.state.idToEdit === single.id ? 
                <div className="edit-mode-input-container">
                  <Input className="edit-mode-input" value={this.state.weight} onChange={this.handleChange} type="number "min="0" max="999"/>
                  <i onClick={() => this.confirmChanges([single.id, this.state.weight])} className="material-icons">done</i>
                </div> : 
                <div className="not-edit-mode-input-container">
                  {single.weight}
                  <i className="material-icons" onClick={() => this.editMode(single.id, single.weight)}>edit</i>
                </div>
              }
              <div>{single.nutrition[0].value}</div>
              <div>{single.nutrition[1].value}</div>
              <div>{single.nutrition[3].value}</div>
              <div>{single.nutrition[2].value}</div>
              <i className="material-icons" onClick={() => console.log(this.state)}>remove_circle_outline</i>
            </li>
          )}
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

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    changeWeight: changeWeight,
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(MyNutritionPage);

