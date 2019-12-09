import React, { useState } from "react";
import { Input, Select, Button, AutoComplete } from "antd";
import { useDispatch } from "react-redux";
import { addBook, transferBook, deletBook } from "../../actions/books";
import { MainWrapper } from "./styles";
import TableBooks from "../../components/table/TableBooks";
import Header from "../../components/header/Header";

const Option = AutoComplete.Option;

const Main = () => {
  const dispatch = useDispatch();
  const addNewBook = (title, listType) =>
    dispatch(
      addBook({
        title,
        listType,
      }),
    );

  const changeListType = (title, listType) =>
    dispatch(transferBook({ title, listType }));

  const deleteBooks = (title) => dispatch(deletBook({ title }));
  const [newBook, setNewBook] = useState("");
  const [listType, setListType] = useState("read");
  const [selectedBook, setSelectedBook] = useState(null);
  const setBookFromInput = (e) => setNewBook(e.target.value);

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

  books.search(newBook, options, function(error, results, apiResponse) {
    if (!error) {
      results.map((item) => booksResult.push(item.title));
    } else {
      console.log(error);
    }
  });

  const booksResult = [];
  console.log("booksResult", booksResult);

  const onSearchBooks = (searchText) =>
    booksResult.includes(!searchText) ? [] : [searchText];

  const opsList = booksResult.map(function(e, i) {
    return (
      <Option value={e} key={i}>
        {" "}
        {i}{" "}
      </Option>
    );
  });

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <MainWrapper>
      <div style={{ position: "absolute", top: "10px" }}>
        <Header />
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div className="read">
          <TableBooks
            listType="read"
            title="Read"
            onBookSelect={setSelectedBook}
          />
          <Button
            type="primary"
            style={{ width: "100%" }}
            size="large"
            disabled={!selectedBook || selectedBook.listType === "complete"}
            onClick={() => {
              changeListType(selectedBook.title, "complete");
              setSelectedBook(null);
            }}
          >
            Complete
          </Button>
        </div>
        <div className="add">
          <Input
            placeholder="Basic usage"
            size="large"
            value={newBook}
            onChange={setBookFromInput}
          />
          <AutoComplete
            // dataSource={booksResult}
            onChange={handleChange}
            style={{ width: 200 }}
            // onSearch={onSearchBooks}
            placeholder="input here"
          >
            {opsList}
          </AutoComplete>
          {/* <Select
            defaultValue="read"
            style={{ width: "100%" }}
            size="large"
            onChange={setListType}
          >
            <Select.Option value="read">Read</Select.Option>
            <Select.Option value="complete">Complete</Select.Option>
          </Select>
          <Button
            type="primary"
            style={{ width: "100%" }}
            size="large"
            disabled={newBook === ""}
            onClick={() => {
              addNewBook(newBook, listType);
              setNewBook("");
            }}
          >
            Add
          </Button>
          <Button
            type="primary"
            style={{ width: "100%" }}
            size="large"
            disabled={!selectedBook}
            onClick={() => {
              deleteBooks(selectedBook.title);
              setSelectedBook(null);
            }}
          >
            Delete
          </Button> */}
        </div>
        <div className="complete">
          <TableBooks
            listType="complete"
            title="Complete"
            onBookSelect={setSelectedBook}
          />
        </div>
      </div>
    </MainWrapper>
  );
};

export default Main;
