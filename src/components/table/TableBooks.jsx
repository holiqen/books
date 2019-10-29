import React from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";
import PropTypes from "prop-types";
import { ContentBoxWrapper } from "../../pages/main/styles";

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
        onRow={() => {
          return {
            onClick: onBookSelect,
          };
        }}
      />
    </ContentBoxWrapper>
  );
};

TableBooks.propTypes = {
  listType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onBookSelect: PropTypes.func.isRequired,
};

export default TableBooks;
