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
