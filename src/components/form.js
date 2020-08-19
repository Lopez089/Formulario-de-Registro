import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import "animate.css";
import validationSchema from "../service/validationForm";
import "bootstrap";

const Form = () => {
  return (
    <div className="">
      <p className="h3 text-info text-center pt-5"> REGISTER</p>
      <p className="text-center">
        <small className="text-muted  pt-1">IT´S COMPLETELY FREE</small>
      </p>
      <Formik
        initialValues={{
          name: "",
          Username: "",
          Email: "",
          Password: "",
          ConfirmPassword: "",
          termsOfService: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          alert(JSON.stringify(values));
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ errors, handleSubmit, isSubmitting, touched }) => (
          <div className=" mt-4 d-flex align-items-center justify-content-center">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <Field
                  type="text"
                  name="name"
                  placeholder=" Your full name"
                  className={
                    touched.name && errors.name
                      ? "is-invalid form-control animated headShake"
                      : !touched.name
                      ? "form-control"
                      : touched.name
                      ? "form-control is-valid shake"
                      : null
                  }
                />
                <ErrorMessage name="name">
                  {(msg) => (
                    <div className="invalid-feedback d-flex">{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Username</label>
                <Field
                  type="text"
                  name="Username"
                  placeholder="Username"
                  className={
                    touched.Username && errors.Username
                      ? "is-invalid form-control animated headShake"
                      : !touched.Username
                      ? "form-control"
                      : touched.Username
                      ? "form-control is-valid"
                      : null
                  }
                />
                <ErrorMessage name="Username">
                  {(msg) => (
                    <div className="invalid-feedback d-flex">{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Email</label>
                <Field
                  type="email"
                  name="Email"
                  placeholder="Email adress"
                  className={
                    touched.Email && errors.Email
                      ? "is-invalid form-control animated headShake"
                      : !touched.Email
                      ? "form-control"
                      : touched.Email
                      ? "form-control is-valid"
                      : null
                  }
                />
                <ErrorMessage name="Email">
                  {(msg) => (
                    <div className="invalid-feedback d-flex">{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Password</label>
                <Field
                  type="password"
                  name="Password"
                  placeholder="••••••••"
                  className={
                    touched.Password && errors.Password
                      ? "is-invalid form-control animated headShake"
                      : !touched.Password
                      ? "form-control"
                      : touched.Password
                      ? "form-control is-valid"
                      : null
                  }
                />
                <ErrorMessage name="Password">
                  {(msg) => (
                    <div className="invalid-feedback d-flex">{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>ConfirmPassword</label>
                <Field
                  type="password"
                  name="ConfirmPassword"
                  placeholder="••••••••"
                  className={
                    touched.ConfirmPassword && errors.ConfirmPassword
                      ? "is-invalid form-control animated headShake"
                      : !touched.ConfirmPassword
                      ? "form-control"
                      : touched.ConfirmPassword
                      ? "form-control is-valid"
                      : null
                  }
                />
                <ErrorMessage name="ConfirmPassword">
                  {(msg) => (
                    <div className="invalid-feedback d-flex">{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <div>
                <Field
                  type="checkbox"
                  name="termsOfService"
                  class="form-check-input"
                />
                <label class="form-check-label">
                  I accept the Terms of use & Privacy Policy
                </label>
                <ErrorMessage name="termsOfService">
                  {(msg) => (
                    <div className="invalid-feedback d-flex">{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <button
                className="btn btn-info btn-block mt-3"
                type="submit"
                disabled={!isSubmitting ? null : "disabled"}
              >
                CREATE ACCOUNT
              </button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Form;
