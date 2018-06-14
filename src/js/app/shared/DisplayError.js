import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

import { clearError } from '../actions/mainPageActions';

class DisplayError extends React.Component {
  render() {
    const { error } = this.props;
    return (
    <div className="display-error-component">
      <div className="display-error-background" onClick={() => this.props.clearError()} />
      <div className="display-error-message">
        <div className="error-content">
          <div className="message-header">
            <h1 className="header-text">Error <i className="icon-error material-icons">error_outline</i></h1>
          </div>
          <div className="message-body">
            <h3>Oops! Something went wrong...</h3>
            <h4>{typeof error === "string" ? error : 'Please try again'}</h4>
            <Button className="clear-error-button" onClick={() => this.props.clearError()}>OK</Button>
          </div>
        </div>
      </div>  
    </div>
    );
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    clearError: clearError,
  }, dispatch);
}

export default connect(null, matchDispatchToProps)(DisplayError);
