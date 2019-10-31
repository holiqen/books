import styled from "styled-components";

export const RegistrationWrapper = styled.div `
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
.input_avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 20px;
}
.input_box {
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.avatar_box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ant-input {
  margin-bottom: 20px;
}
.ant-input:last-child {
  margin-bottom: 0;
}
`;