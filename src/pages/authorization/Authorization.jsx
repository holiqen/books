import React from "react";
import { Formik } from "formik";
import { Button, Input, Icon } from "antd";
import "../../App.css";
import { AuthorizationWrapper } from "./styles";

const Authorization = () => {
  return (
    <AuthorizationWrapper>
      <div className="App">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            return values;
          }}
          render={() => (
            <form onSubmit={null}>
              <div className="logo">
                <Icon type="book" style={{ fontSize: "36px" }} />
              </div>
              <div className="input_box">
                <Input
                  type="email"
                  name="email"
                  value={null}
                  onChange={null}
                  placeholder="Email"
                />
                <Input
                  type="password"
                  name="password"
                  value={null}
                  onChange={null}
                  placeholder="Password"
                />
              </div>
              <div className="button_box">
                <Button type="primary" size="large">
                  Sign in
                </Button>
                <Button type="primary" size="large">
                  Forgot password?
                </Button>
              </div>
            </form>
          )}
        />
      </div>
    </AuthorizationWrapper>
  );
};

export default Authorization;
