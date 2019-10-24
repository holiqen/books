const books = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return state.concat(action.paylod);
    default:
      return state;
  }
};

export default books;
