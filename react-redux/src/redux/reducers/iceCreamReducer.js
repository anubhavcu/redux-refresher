export const IceCreamReducer = (state = 20, action) => {
  switch (action.type) {
    case 'BUY_ICECREAM':
      return state - 1;
    default:
      return state;
  }
};
