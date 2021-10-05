export const loginReducer = (state = false, { type }) => {
  switch (type) {
    case "LOGIN":
      return !state;
    default:
      return state;
  }
};
