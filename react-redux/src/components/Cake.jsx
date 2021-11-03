import { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/actions/cakeAction';
// const Cake = (props) => {
//   const [number, setNumber] = useState(1);
//   return (
//     <div>
//       <h2>Number of Cakes - {props.cakes} </h2>
//       <input
//         type='number'
//         name=''
//         id=''
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//       />
//       <button onClick={() => props.buyCake(number)}>
//         Buy {number} of Cake
//       </button>
//     </div>
//   );
// };

import React, { Component } from 'react';

export class Cake extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 1,
    };
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <h2>Number of cakes {this.props.cakes}</h2>
        <input
          type='number'
          name=''
          id=''
          value={number}
          onChange={(e) => this.setState({ number: e.target.value })}
        />
        <button onClick={() => this.props.buyCake(number)}>
          Buy {number} of Cake
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cakes: state.cakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cake);
