import React from "react";
import { Formik } from "formik";
import { Button, Input, Icon, Avatar } from "antd";
import "../../App.css";
import { RegistrationWrapper } from "./styles";

const Registration = () => {
  return (
    <RegistrationWrapper>
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
              <div className="input_avatar">
                <div className="input_box">
                  <Input
                    type="name"
                    name="name"
                    value={null}
                    onChange={null}
                    placeholder="Name"
                  />
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
                <div className="avatar_box">
                  <Avatar size={128} icon="user" />
                </div>
              </div>
              <div>
                <Button type="primary" size="large">
                  Sign up
                </Button>
              </div>
            </form>
          )}
        />
      </div>
    </RegistrationWrapper>
  );
};

export default Registration;
