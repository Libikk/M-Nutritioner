import React from 'react';
import { connect } from "react-redux";

class MyNutritionPage extends React.Component {

  addAllItemsTogether(nutritionName) { 
    let valueNutrition = 0;
    this.props.searchData.myNutritionList.forEach(singleFood => {
      valueNutrition = valueNutrition + singleFood.nutrition[nutritionName].value;
    });
    return valueNutrition;
   }
  render() {
    const { myNutritionList } = this.props.searchData;
    return (
      <div className="nutrition-page-list-container">
        <ul className="nutrition-page-list">
          <li className="each-row-list">
              <div>Food</div>
              <div>Kcal</div>
              <div>Protein</div>
              <div>Carbohydrate</div>
              <div>Fat</div>
          </li>
          {myNutritionList.map(single => 
            <li className="each-row-list" key={single.id}>
              <div>{single.name}</div>
              <div>{single.nutrition[0].value}</div>
              <div>{single.nutrition[1].value}</div>
              <div>{single.nutrition[3].value}</div>
              <div>{single.nutrition[2].value}</div>
            </li>
          )}
          <li className="each-row-list">
              <div>Summary</div>
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

export default connect(mapStateToProps)(MyNutritionPage);
