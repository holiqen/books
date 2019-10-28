import React from "react";
import { ContentBoxWrapper } from "../../pages/main/styles";
import { Table } from "antd";
import { useSelector } from "react-redux";

const TableBooks = ({ listType, title }) => {
  const books = useSelector((state) => state.books);
  const columnsTitle = [
    {
      title: `${title}`,
      dataIndex: "title",
      key: "title",
    },
  ];
  const dataRead = books.filter((book, key) => book.listType === "read");
  const dataComp = books.filter((book, key) => book.listType === "complete");
  return (
    <ContentBoxWrapper>
      <Table
        style={{ width: 300 }}
        columns={columnsTitle}
        dataSource={listType === "read" ? dataRead : dataComp}
      />
    </ContentBoxWrapper>
  );
};

export default TableBooks;
