import React from "react";
import { ContentBoxWrapper } from "../../pages/main/styles";
import { Table } from "antd";
import { useSelector } from "react-redux";

const TableBooks = ({ listType, title, onBookSelect }) => {
  const books = useSelector((state) => state.books);
  const columnsTitle = [
    {
      title: `${title}`,
      dataIndex: "title",
      key: "title",
    },
  ];

  return (
    <ContentBoxWrapper>
      <Table
        style={{ width: 300 }}
        columns={columnsTitle}
        dataSource={books.filter((book) => book.listType === listType)}
        onRowClick={onBookSelect}
      />
    </ContentBoxWrapper>
  );
};

export default TableBooks;
