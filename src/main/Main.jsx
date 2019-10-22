import React, { useState } from "react";
import styled from "styled-components";
import { Card, Input, Select, Button, Typography } from "antd";

const MainWrapper = styled.div`
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

const ContentBoxWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  border: 1px solid #d7ccc8;
  background: white;
  padding: 30px;
  overflow: hidden;
  height: 100%;
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  }
`;

const Main = () => {
  const [state, setState] = useState([]);

  console.log(state);

  const onChange = value => setState(value);

  return (
    <MainWrapper>
      <div className="read">
        <ContentBoxWrapper>
          <Card title="Read" style={{ width: 300 }} bordered={false}>
            {state.map((e, key) => (
              <Typography.Paragraph key={key}>{e}</Typography.Paragraph>
            ))}
          </Card>
        </ContentBoxWrapper>
      </div>
      <div className="add">
        <Input
          placeholder="Basic usage"
          size="large"
          value={state}
          onChange={onChange}
        />
        <Select defaultValue="read" style={{ width: "100%" }} size="large">
          <Select.Option value="read">Read</Select.Option>
          <Select.Option value="end">End</Select.Option>
        </Select>
        <Button
          type="primary"
          style={{ width: "100%" }}
          size="large"
          onClick={() => {
            state.push("1");
            setState(state);
          }}
        >
          Add
        </Button>
      </div>
      <div className="end">
        <ContentBoxWrapper>
          <Card title="End" style={{ width: 300 }} bordered={false}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </ContentBoxWrapper>
      </div>
    </MainWrapper>
  );
};

export default Main;
