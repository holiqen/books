import React, { useState } from "react";
import styled from "styled-components";
import { Card, Input, Select, Button, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../actions/books";

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
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const addNewBook = (title, listType) =>
    dispatch(
      addBook({
        title,
        listType,
      }),
    );
  const [book, setBook] = useState([]);
  const [listType, setListType] = useState("read");
  const getInputValue = (e) => setBook(e.target.value);
  const selectType = (value) => {
    setListType(value);
  };

  return (
    <MainWrapper>
      <div className="read">
        <ContentBoxWrapper>
          <Card title="Read" style={{ width: 300 }} bordered={false}>
            {books.map((e, key) =>
              e.listType === "read" ? (
                <Typography.Paragraph key={key}>{e.title}</Typography.Paragraph>
              ) : null,
            )}
          </Card>
        </ContentBoxWrapper>
      </div>
      <div className="add">
        <Input
          placeholder="Basic usage"
          size="large"
          value={book}
          onChange={getInputValue}
        />
        <Select
          defaultValue="read"
          style={{ width: "100%" }}
          size="large"
          onChange={selectType}
        >
          <Select.Option value="read">Read</Select.Option>
          <Select.Option value="complete">Complete</Select.Option>
        </Select>
        <Button
          type="primary"
          style={{ width: "100%" }}
          size="large"
          onClick={
            listType === "complete"
              ? () => {
                  addNewBook(book, listType);
                  setBook([]);
                }
              : () => {
                  addNewBook(book, listType);
                  setBook([]);
                }
          }
        >
          Add
        </Button>
      </div>
      <div className="complete">
        <ContentBoxWrapper>
          <Card title="Complete" style={{ width: 300 }} bordered={false}>
            {books.map((e, key) =>
              e.listType === "complete" ? (
                <Typography.Paragraph key={key}>{e.title}</Typography.Paragraph>
              ) : null,
            )}
          </Card>
        </ContentBoxWrapper>
      </div>
    </MainWrapper>
  );
};

export default Main;
