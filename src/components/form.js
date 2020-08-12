import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import "animate.css";
import validationSchema from "../service/validationForm";
import "bootstrap";

const Form = () => {
  return (
    <div className="h-75">
      <p className="h3 text-info text-center pt-5"> REGISTER</p>
      <p className="text-center">
        <small className="text-muted  pt-1">IT´S COMPLETELY FREE</small>
      </p>
      <Formik
        initialValues={{ name: "", apellidos: "" }}
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
                <label>Apellidos</label>
                <Field
                  type="text"
                  name="apellidos"
                  placeholder="your Apellidos"
                  className={
                    touched.apellidos && errors.apellidos
                      ? "is-invalid form-control animated headShake"
                      : !touched.apellidos
                      ? "form-control"
                      : touched.apellidos
                      ? "form-control is-valid"
                      : null
                  }
                />
                <ErrorMessage name="apellidos">
                  {(msg) => (
                    <div className="invalid-feedback d-flex">{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <button
                className="btn btn-info"
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
