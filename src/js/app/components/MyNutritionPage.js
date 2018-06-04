import React from 'react';
import { connect } from "react-redux";

class MyNutritionPage extends React.Component {

  render() {
    const { myNutritionPage } = this.props;
    console.log(this.props);
    return (
      <div className="nutrition-page-list-container">
          {/* {myNutritionPage ? myNutritionPage.map((single, index) =>
          <div key={index}>
            {single.slice(0, 4).map(valuesAndNutrName => 
              (<span key={valuesAndNutrName.nutritionName + index}>
                {valuesAndNutrName.nutritionName}: {Math.round(valuesAndNutrName.value)}
              </span>))}
          </div>
          ) : null} */}
      </div>

      
    );
  }
}

const mapStateToProps = state => {
  return {
    myNutritionPage: state.searchData.myNutritionPage,
  };
};

export default connect(mapStateToProps)(MyNutritionPage);
