import React, { Component } from "react";
import { Input, Select, Button } from "antd";
import { connect } from "react-redux";
import { addBook } from "../../actions/books";
import { MainWrapper } from "./styles";
import TableBooks from "../../components/table/TableBooks";

export class Main extends Component {
  state = {
    newBook: "",
    listType: "read",
    selectedBook: null,
  };

  /**
   * Обработчик добавления новой книги
   */
  onBookAdd = () => {
    const { newBook, listType } = this.state;
    const { addNewBook } = this.props;
    addNewBook(newBook, listType);
    this.setState({ newBook: "" });
  };

  /**
   * Обработка события изменения текста в поле названия книги
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  onBookNameInputChange = (e) => this.setState({ newBook: e.target.value });

  /**
   * Обработчик выбора книги
   * @param {Object} book
   */
  onBookSelected = (book) => this.setState({ selectedBook: book });

  /**
   * Обработка собтытия пометки книги как прочитанной
   */
  onCompleteBook = () => {
    const { selectedBook } = this.state;
    selectedBook.listType = "complete";
    // TODO: Здесь вызов экшена по переносу книги
    this.setState((state) => ({
      ...state,
      selectedBook: null,
    }));
  };

  /**
   * Обработчик смены типа списка
   * @param {String} listType
   */
  onListTypeChange = (listType) => this.setState({ listType });

  render() {
    const { newBook, selectedBook } = this.state;

    return (
      <MainWrapper>
        <div className="read">
          <TableBooks
            listType="read"
            title="Read"
            onBookSelect={this.onBookSelected}
          />
          <Button
            type="primary"
            style={{ width: "100%" }}
            size="large"
            disabled={!selectedBook}
            onClick={this.onCompleteBook}
          >
            Complete
          </Button>
        </div>
        <div className="add">
          <Input
            placeholder="Basic usage"
            size="large"
            value={newBook}
            onChange={this.onBookNameInputChange}
          />
          <Select
            defaultValue="read"
            style={{ width: "100%" }}
            size="large"
            onChange={this.onListTypeChange}
          >
            <Select.Option value="read">Read</Select.Option>
            <Select.Option value="complete">Complete</Select.Option>
          </Select>
          <Button
            type="primary"
            style={{ width: "100%" }}
            size="large"
            disabled={newBook === ""}
            onClick={this.onBookAdd}
          >
            Add
          </Button>
        </div>
        <div className="complete">
          <TableBooks listType="complete" title="Complete" />
        </div>
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addNewBook: (title, listType) =>
    dispatch(
      addBook({
        title,
        listType,
      }),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
