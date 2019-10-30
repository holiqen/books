const books = (state = [], action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return state.concat(action.payload);
        case "TRANSFER_BOOK":
            return state.map((item) => {
                if (item.title === action.payload.title) {
                    return {...item, listType: action.payload.listType };
                }
                return item;
            });
        case "DELET_BOOK":
            return state.filter((item) => (item.title !== action.payload.title));
        default:
            return state;
    }
};

export default books;