import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../redux/actions/counterActions';
import { loginToggle } from '../redux/actions/loginAction';

const Login = (props) => {
  return (
    <div>
      <button onClick={props.loginToggle}>Toggle Login</button>
      {props.login && <h1>Some sensitive info here ... !</h1>}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    loginToggle: () => dispatch(loginToggle()),
  };
};

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login);
