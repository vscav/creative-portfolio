const pageChangedReducer = (state = false, action) => {
  switch (action.type) {
    case "DEPARTURE":
      return true;
    case "ARRIVAL":
      return false;
    default:
      return state;
  }
};

export default pageChangedReducer;
