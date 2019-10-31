import styled from "styled-components";

export const MainWrapper = styled.div `
/* display: flex;
align-items: center;
justify-content: center;
flex-direction: column; */
/* margin-top: 200px; */
.ant-table-placeholder {
  display: none;
}
.ant-table-tbody {
  text-align: center;
}
.ant-pagination {
  display: none;
}
.add {
  margin: 0 30px;
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
`;

export const ContentBoxWrapper = styled.div `
position: relative;
border-radius: 4px;
border: 1px solid #d7ccc8;
background: white;
padding: 30px;
overflow: hidden;
height: 350px;
overflow: scroll;
word-wrap: break-word;
margin-bottom: 20px;
&:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
}
.ant-table-thead > tr > th {
  background-color: white;
  font-size: 18px;
}
.ant-table-tbody > tr > td {
  border: none;
}
.ant-table-tbody > tr > td:hover {
  background-color: #000;
}
`;

export const AppWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  background-color: #efebe9;
  height: 100vh;
  padding-top: 10px;
`;