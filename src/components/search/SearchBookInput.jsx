import React, { useState } from "react";
import { AutoComplete } from "antd";
import PropTypes from "prop-types";
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
    books.search(title, options, (error, results) => {
      if (!error) {
        resolve(results.map((item) => item.title));
      } else {
        reject(error);
      }
    });
  });

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

SearchBookInput.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default SearchBookInput;
