/**
 * Действие "Добавлеие книги"
 * @param {Object} bookData
 * @param {String} bookData.title Заголовок книги
 * @param {'read'|'complete'} bookData.listType Тип списка (read или complete) для хранения книги
 */
export const addBook = (bookData) => ({
    type: "ADD_BOOK",
    payload: bookData,
});

export const transferBook = (bookData) => ({
    type: "TRANSFER_BOOK",
    payload: bookData
});

export const deletBook = (bookData) => ({
    type: "DELETE_BOOK",
    payload: bookData
});