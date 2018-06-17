import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, TableBody, TableCell, TableRow, Paper, Button, Input } from '@material-ui/core/';
import { addToNutritionPage } from '../actions/nutritionDetailsActions';
import { popUpError } from '../actions/mainPageActions';

class NutritionDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 100 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const weight = event.target.value > 5000 ? 5000 : event.target.value;
    this.setState({ value: weight });
  }
  addToNutPage() {
    const { myNutritionList, singleItemNutrition } = this.props.searchData;
    if (myNutritionList) {
      myNutritionList.forEach((element) => {
        if (element.id === singleItemNutrition.id) {
          this.props.popUpError('Sorry but nutrition already exist in your list :)');
        }
      });
    }
    this.props.addToNutritionPage(this.state.value / 100);
    this.setState({ value: 100 });
  }

  render() {
    const { singleItemNutrition } = this.props.searchData;
    const { value } = this.state;
    return (
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
                    value={value}
                    onChange={this.handleChange}
                    type="number"
                    min="0"
                    max="999"
                  />
                </TableCell>
              </TableRow>
              {singleItemNutrition.nutrition.map(singleNutrition =>
                (
                  <TableRow className="table-row" key={singleNutrition.nutritionName}>
                    <TableCell>{singleNutrition.nutritionName}</TableCell>
                    <TableCell>{Math.round(singleNutrition.value * (value / 100))}</TableCell>
                  </TableRow>))}
            </TableBody>
          </Table>
          <Button className="details-button" onClick={() => this.addToNutPage()}>ADD</Button>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => state;

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    popUpError,
    addToNutritionPage,
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(NutritionDetails);
