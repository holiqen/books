import styled from "styled-components";

export const MainWrapper = styled.div `
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
&:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
}
`;