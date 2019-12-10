import React, { useState } from "react";
import { AutoComplete } from "antd";

// ---- Это лучше выделить в сервис
import books from "google-books-search";

const options = {
  key: "AIzaSyCKczu1YY3wt7QOG6toy4fWCZxwHr7tUT0",
  field: "title",
  offset: 0,
  limit: 20,
  type: "books",
  order: "relevance",
  lang: "en",
};

/**
 * Поиск книг по заголовку
 * @param {String} title
 * @returns {Promise<Array<String>>}
 */
const searchBook = (title) =>
  new Promise((resolve, reject) => {
    books.search(title, options, (error, results, apiResponse) => {
      if (!error) {
        resolve(results.map((item) => item.title));
      } else {
        reject(error);
      }
    });
  });
// -----------------------------------------

// Папка компонента у тебя main, хотя должна нести название самого компонента
// Название компонента слишком абстрактное, нужно что-то типа SearchBookInput
// В идеале после выноса сервиса прописать его как пропс и передавать, хотя можно пока и без этого
const SearchBookInput = ({ onSelect }) => {
  const minChars = 3;
  const [dataSource, setDataSource] = useState([]);
  const onSearch = (searchText) => {
    if (searchText && searchText.length > minChars) {
      searchBook(searchText).then(setDataSource);
    }
  };

  return (
    <div>
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
      />
    </div>
  );
};

export default SearchBookInput;
