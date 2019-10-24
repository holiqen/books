const books = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.title,
          listType: action.listType
        }
      ];
    default:
      return state;
  }
};

export default books;
