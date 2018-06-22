import React from 'react';
import { connect } from 'react-redux';
import Search from './components/Search';
import ResultList from './components/ResultList';
import NutritionDetails from './components/NutritionDetails';
import HowItWork from './components/HowItWork';
import MyNutritionPage from './components/MyNutritionPage';
import DisplayError from './shared/DisplayError';

class MainPage extends React.Component {
  render() {
    const { singleItemNutrition, searchResult, myNutritionList, error } = this.props.searchData;
    return (
      <div className="container">
        <div className="main-container">
          <Search />
          <div className="content-container">
            {searchResult ? <ResultList /> : <HowItWork />}
            {singleItemNutrition ? <NutritionDetails /> : null}
            {myNutritionList ? <MyNutritionPage /> : <img className="veggie-man-image" src="/src/js/images/veggie_man.png" alt="veggie-man" />}
          </div>
        </div>
        {error ? <DisplayError error={error} /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(MainPage);
