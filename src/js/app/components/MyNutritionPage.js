import React from 'react';
import { connect } from "react-redux";

class MyNutritionPage extends React.Component {

  render() {
    const { myNutritionPage } = this.props;
    console.log(this.props);
    return (
      <div className="nutrition-page-list-container">
          {}
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
