import React, { useState } from "react";
import { AutoComplete } from "antd";
import { useDispatch } from "react-redux";

const AutoCompleteInput = ({ value, onChange }: any) => {
  const dispatch = useDispatch();
  const [dataSource, setdataSource] = useState([]);
  const onSearch = (searchText) => {
    setdataSource(
      !searchText
        ? []
        : [searchText, searchText.repeat(2), searchText.repeat(3)],
    );
  };

  var books = require("google-books-search");

  var options = {
    key: "AIzaSyCKczu1YY3wt7QOG6toy4fWCZxwHr7tUT0",
    field: "title",
    offset: 0,
    limit: 20,
    type: "books",
    order: "relevance",
    lang: "en",
  };

  books.search(value, options, function(error, results, apiResponse) {
    if (!error) {
      results.map((item) => booksResult.push(item.title));
    } else {
      console.log(error);
    }
  });

  const booksResult = [];

  // const opsList = booksResult.map(function(e, i) {
  //   return (
  //     <Option value={e} key={i}>
  //       {" "}
  //       {i}{" "}
  //     </Option>
  //   );
  // });
  return (
    <div>
      <AutoComplete
        // dataSource={dataSource}
        style={{ width: 200 }}
        // onSelect={onSelect}
        // onSearch={onSearch}
        placeholder="input here"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default AutoCompleteInput;
