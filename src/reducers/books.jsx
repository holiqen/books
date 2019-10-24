const books = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default books;
