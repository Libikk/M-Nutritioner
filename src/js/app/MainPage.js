import React from 'react';
import { connect } from "react-redux";
import Search from './components/Search';
import ResultList from './components/ResultList';
import NutritionDetails from './components/NutritionDetails';
import HowItWork from './components/HowItWork';
import MyNutritionPage from './components/MyNutritionPage';

class MainPage extends React.Component {

  render() {
    const { singleItemNutrition, searchResult } = this.props.searchData;
    return (
      <div className="container">
        <div className="main-container">
          <Search />
          <div className="content-container">
            {searchResult ? <ResultList /> : null}
            {singleItemNutrition ? <NutritionDetails /> : <HowItWork />}
            <MyNutritionPage />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps)(MainPage);