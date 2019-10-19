import React from "react";
import styled from "styled-components";
import { Card, Input, Select, Button } from "antd";

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;

const Main = () => {
  return (
    <MainWrapper>
      <div className="read">
        <Card title="Default size card" style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
      <div className="add">
        <Input placeholder="Basic usage" />
        <Select defaultValue="read" style={{ width: 120 }}>
          <Select.Option value="read">Read</Select.Option>
          <Select.Option value="end">End</Select.Option>
        </Select>
        <Button type="primary">Add</Button>
      </div>
      <div className="end">
        <Card title="Default size card" style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </MainWrapper>
  );
};

export default Main;
