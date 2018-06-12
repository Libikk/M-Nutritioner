import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { addToNutritionPage } from '../actions/nutritionDetailsActions';
import appSettings from '../../../../appSettings';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class NutritionDetails extends React.Component {
  constructor(props) {
    super(props);
      this.state = { value: 100 };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) { 
      const weight = event.target.value > 5000 ? 5000 : event.target.value;
      this.setState({value: weight});
    }
    addToNutPage() {
      this.props.addToNutritionPage(this.state.value / 100);
      this.setState({ value: 100 });
    }

  render() {
    const { singleItemNutrition } = this.props.searchData;
    const { value } = this.state;
    return(
      <div className="nutrition-container">
      <span className="nuttrition-name-header">{singleItemNutrition.name}</span>
        <Paper>
        <Table>
          <TableBody>
            <TableRow className="table-row">
              <TableCell>Nutritient</TableCell>
              <TableCell>Value per: 
                <Input 
                  className="details-input" 
                  type="text" 
                  value={value} 
                  onChange={this.handleChange} 
                  type="number"
                  min="0"
                  max="999"/>
              </TableCell>
            </TableRow>
            {singleItemNutrition.nutrition.slice(0, 5).map((singleNutrition, index) => 
              (<TableRow className="table-row" key={singleNutrition + index}>
                <TableCell>{singleNutrition.nutritionName}</TableCell>
                <TableCell>{Math.round(singleNutrition.value * (value / 100))}</TableCell>
              </TableRow>)
            )}
            {singleItemNutrition.nutrition.slice(5).map((singleNutrition, index) => 
              (<TableRow className="table-row" key={singleNutrition + index}>
                <TableCell>{singleNutrition.nutritionName}</TableCell>
                <TableCell>{Math.round(singleNutrition.value * (value / 100))}</TableCell>
              </TableRow>)
            )}
          </TableBody>
        </Table>
        <Button className="details-button" onClick={() => this.addToNutPage()}>ADD</Button>
        </Paper>
      </div>
    );
  };
}

const mapStateToProps = state => state;

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    addToNutritionPage: addToNutritionPage
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(NutritionDetails);
