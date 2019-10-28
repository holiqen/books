import React, { useState } from "react";
import { Input, Select, Button } from "antd";
import { useDispatch } from "react-redux";
import { addBook } from "../../actions/books";
import { MainWrapper } from "./styles";
import TableBooks from "../../components/table/TableBooks";

const Main = () => {
  const dispatch = useDispatch();
  const addNewBook = (title, listType) =>
    dispatch(
      addBook({
        title,
        listType,
      }),
    );
  const [newBook, setNewBook] = useState("");
  const [listType, setListType] = useState("read");
  const [selectedBook, setSelectedBook] = useState(null);

  const setBookFromInput = (e) => setNewBook(e.target.value);
  const onBookComplete = () => {
    const destTypeList = "complete";

    if (selectedBook) {
      console.log(
        "Selected book with type",
        selectedBook.listType,
        "must move to",
        destTypeList,
      );
    }
  };

  return (
    <MainWrapper>
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
          onClick={onBookComplete}
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
          onClick={() => {
            addNewBook(newBook, listType);
            setNewBook("");
          }}
        >
          Add
        </Button>
      </div>
      <div className="complete">
        <TableBooks listType="complete" title="Complete" />
      </div>
    </MainWrapper>
  );
};

export default Main;
