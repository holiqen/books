import React from "react";
import { Avatar, Typography, Icon } from "antd";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    .anticon-book {
      margin-right: 15px;
    }
  }
  .profile {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .ant-typography {
      margin-left: 15px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logo">
        <Icon type="book" style={{ fontSize: "36px" }} />
      </div>
      <div className="profile">
        <Avatar shape="square" size={64} icon="user" />
        <Typography.Text>Nick</Typography.Text>
        <Typography.Text>Log Out</Typography.Text>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
