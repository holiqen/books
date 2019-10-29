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
        default:
            return state;
    }
};

export default books;