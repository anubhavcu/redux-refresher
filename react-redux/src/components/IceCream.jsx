import { connect } from 'react-redux';
import { buyIceCream } from '../redux/actions/IceCreamAction';
const IceCream = (props) => {
  return (
    <div>
      <h2>Number of IceCreams - {props.iceCreams} </h2>
      <button onClick={props.buyIcecream}>Buy IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    iceCreams: state.iceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIceCream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCream);
