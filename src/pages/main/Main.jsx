import React, { useState } from "react";
import styled from "styled-components";
import { Card, Input, Select, Button, Typography } from "antd";
// import books from "../../reducers/books";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../actions/books";
// import { addBook } from "../../actions/books";

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  .add {
    margin: 0 30px;
    height: 200px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .ant-input {
    }
  }
`;

const ContentBoxWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  border: 1px solid #d7ccc8;
  background: white;
  padding: 30px;
  overflow: hidden;
  height: 350px;
  overflow: scroll;
  word-wrap: break-word;
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  }
`;

const Main = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);

  const toggleBook = (title, listType) =>
    dispatch(
      addBook({
        title,
        listType,
      }),
    );

  // const [read, setRead] = useState([]);
  // const [end, setEnd] = useState([]);
  const [book, setBook] = useState([]);
  const [listType, setListType] = useState();
  const onChange = (e) => setBook(e.target.value);
  const handleChange = (value) => {
    setListType(value);
  };

  console.log("kek", books);

  return (
    <MainWrapper>
      <div className="read">
        <ContentBoxWrapper>
          <Card title="Read" style={{ width: 300 }} bordered={false}>
            {books.map((e, key) => (
              <Typography.Paragraph key={key.title}>{e}</Typography.Paragraph>
            ))}
          </Card>
        </ContentBoxWrapper>
      </div>
      <div className="add">
        <Input
          placeholder="Basic usage"
          size="large"
          value={book}
          onChange={onChange}
        />
        <Select
          defaultValue="read"
          style={{ width: "100%" }}
          size="large"
          onChange={handleChange}
        >
          <Select.Option value="read">Read</Select.Option>
          <Select.Option value="end">End</Select.Option>
        </Select>
        <Button
          type="primary"
          style={{ width: "100%" }}
          size="large"
          onClick={
            listType === "end"
              ? () => {
                  toggleBook(books, listType);
                  setBook([]);
                }
              : () => {
                  toggleBook(books, listType);
                  setBook([]);
                }
          }
        >
          Add
        </Button>
      </div>
      <div className="end">
        <ContentBoxWrapper>
          <Card title="End" style={{ width: 300 }} bordered={false}>
            {books.map((e, key) => (
              <Typography.Paragraph key={key}>{e}</Typography.Paragraph>
            ))}
          </Card>
        </ContentBoxWrapper>
      </div>
    </MainWrapper>
  );
};

export default Main;
