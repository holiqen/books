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
  const dataRead = books.filter((book, key) => book.listType === "read");
  const dataComp = books.filter((book, key) => book.listType === "complete");

  console.log("kek", selectedRowKeys);
  return (
    <ContentBoxWrapper>
      <Table
        style={{ width: 300 }}
        columns={columnsTitle}
        dataSource={listType === "read" ? dataRead : dataComp}
        onRowClick={(books) => rowSelection(books)}
      />
      <Button
        type="primary"
        style={{ width: "100%" }}
        size="large"
        onClick={(selectedRowKeys) => selectedRowKeys}
      >
        Complete
      </Button>
    </ContentBoxWrapper>
  );
};

export default TableBooks;
