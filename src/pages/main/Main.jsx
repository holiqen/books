import React, { useState } from "react";
import { Select, Button } from "antd";
import { useDispatch } from "react-redux";
import { addBook, transferBook, deletBook } from "../../actions/books";
import { MainWrapper } from "./styles";
import TableBooks from "../../components/table/TableBooks";
import Header from "../../components/header/Header";
import SearchBookInput from "../../components/search/SearchBookInput";

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
          <SearchBookInput onSelect={setNewBook} />
          <Select
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
          </Button>
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
