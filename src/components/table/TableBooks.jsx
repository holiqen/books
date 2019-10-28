import React, { useState } from "react";
import { ContentBoxWrapper } from "../../pages/main/styles";
import { Table, Button } from "antd";
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

  const [selectedRowKeys, setSelectedRowKeys] = useState();
  const rowSelection = (value) => setSelectedRowKeys(value);

  return (
    <ContentBoxWrapper>
      <Table
        style={{ width: 300 }}
        columns={columnsTitle}
        dataSource={books.filter((book) => book.listType === listType)}
        onRowClick={(books) => rowSelection(books)}
      />
    </ContentBoxWrapper>
  );
};

export default TableBooks;
