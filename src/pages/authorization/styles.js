import styled from "styled-components";

export const AuthorizationWrapper = styled.div `
display: flex;
align-items: center;
justify-content: center;
border-radius: 4px;
border: 1px solid #d7ccc8;
background: white;
padding: 30px;
height: 350px;
&:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
}
.logo {
  margin-bottom: 20px;
}
.input_box {
  margin-bottom: 20px;
}
.ant-input {
  margin-bottom: 20px;
}
.button_box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ant-btn {
  width: 100%;
}
.ant-btn:first-child {
  margin-right: 20px;
}
`;