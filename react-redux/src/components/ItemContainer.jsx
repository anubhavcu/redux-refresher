import { connect } from 'react-redux';
import { buyCake } from '../redux/actions/cakeAction';
import { buyIceCream } from '../redux/actions/IceCreamAction';

const ItemContainer = ({ item, buyItem }) => {
  return (
    <div>
      <h2>Item : {item}</h2>
      <button onClick={buyItem}>Buy item - </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cakes : state.iceCreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

// * this eg is just to show if there is some additional props passed to the component, and based on the props we get the state and dispatch methods from the redux store

//* both mapStateToProps and mapDispatch to props takes in an additional argument - 'ownProps', which basically any other prop passed to the component from a relatively higher component

//* now for real-world applications, if we are not using hooks(useDispatch, useSelector), and lets say we have a bunch of items, and clicking on any item will display that item component, so in that case we pass down the "id" of the clicked item in ownProps and use that to fetch items details from the redux store using that id.

//* in case if we don't need to get state from the redux store or any actions , we can pass null to connect method :
// eg : connect(null, mapDispatchToProps)(COMPONENT_NAME) => // * here we are not using any state from the redux store.
