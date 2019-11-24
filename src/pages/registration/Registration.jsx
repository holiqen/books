import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { Button, Icon, Avatar } from "antd";
import "../../App.css";
import { RegistrationWrapper } from "./styles";

const Registration = () => {
  return (
    <RegistrationWrapper>
      <div className="App">
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
              .email("Email is invalid")
              .required("Email is required"),
            password: Yup.string()
              .min(6, "Password must be at least 6 characters")
              .required("Password is required"),
          })}
          onSubmit={(fields) => {
            alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
          }}
          render={({ errors, touched }) => (
            <Form>
              <div className="logo">
                <Icon type="book" style={{ fontSize: "36px" }} />
              </div>
              <div className="input_avatar">
                <div className="input_box">
                  <div className="form-group">
                    <Field
                      type="name"
                      name="name"
                      placeholder="Name"
                      className={
                        "form-control" +
                        (errors.name && touched.name ? " is-invalid" : "")
                      }
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
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
                      className={
                        "form-control" +
                        (errors.password && touched.password
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                </div>
                <div className="avatar_box">
                  <Avatar size={128} icon="user" />
                </div>
              </div>
              <div>
                <Button htmlType="submit" type="primary" size="large">
                  Sign up
                </Button>
              </div>
            </Form>
          )}
        />
      </div>
    </RegistrationWrapper>
  );
};

export default Registration;
