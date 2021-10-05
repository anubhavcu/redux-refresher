import { decrement, increment } from "../redux/actions/counterActions";
import { connect } from "react-redux";

const Counter = (props) => {
  return (
    <div>
      <button onClick={props.decrement}>-</button>
      <span>{props.counter}</span>
      <button onClick={props.increment}>+</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
