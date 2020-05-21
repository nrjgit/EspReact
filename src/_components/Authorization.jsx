import React, { Component } from "react";
import { connect } from "react-redux";

const Authorization = (WrappedComponent, allowedRoles) => {
  class WithAuthorization extends Component {
    render() {
      const userType  = this.props.userType;
      if (allowedRoles.includes(userType)) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <h1>You are not allowed to view this page!</h1>;
      }
    }
  }
  const mapStateToProps = state => ({ user: state.login.userName, userType: state.login.userType })
  return connect(mapStateToProps)(WithAuthorization);
};
export default Authorization;