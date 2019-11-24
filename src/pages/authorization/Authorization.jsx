import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Icon } from "antd";
import "../../App.css";
import { AuthorizationWrapper } from "./styles";

const Authorization = () => {
  return (
    <AuthorizationWrapper>
      <div className="App">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Email is invalid")
              .required("Email is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={(fields) => {
            alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
          }}
          render={({ errors, touched }) => (
            <Form>
              <div className="logo">
                <Icon type="book" style={{ fontSize: "36px" }} />
              </div>
              <div className="input_box">
                <div className="form-group">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={
                      "form-control" +
                      (errors.email && touched.email ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </div>
              <div className="button_box">
                <Button htmlType="submit" type="primary" size="large">
                  Sign in
                </Button>
                <Button type="primary" size="large">
                  Forgot password?
                </Button>
              </div>
            </Form>
          )}
        />
      </div>
    </AuthorizationWrapper>
  );
};

export default Authorization;
