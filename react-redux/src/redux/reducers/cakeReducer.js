export const cakeReducer = (state = 10, action) => {
  switch (action.type) {
    case 'BUY_CAKE':
      return state - action.payload;
    default:
      return state;
  }
};
