import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import "animate.css";
import validationSchema from "../service/validationForm";
import "bootstrap";

const isValid = (touched, errors) => {
    if (touched.name && errors.name) {
        return "is-invalid form-control animated headShake";
    }
    if (!touched.name) {
        return "form-control";
    }
    if (touched.name) {
        return "form-control is-valid shake";
    }
};

const Form = () => {
    return (
        <div className="card p-5  shadow-lg my-5">
            <p className="h3 text-info text-center "> REGISTER</p>
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
                                <label htmlFor="name">Name</label>
                                <Field
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder=" Your full name"
                                    className={isValid(touched, errors)}
                                />
                                <ErrorMessage name="name">
                                    {(msg) => <div className="invalid-feedback d-flex">{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Username">Username</label>
                                <Field
                                    id="Username"
                                    type="text"
                                    name="Username"
                                    placeholder="Username"
                                    className={isValid(touched, errors)}
                                />
                                <ErrorMessage name="Username">
                                    {(msg) => <div className="invalid-feedback d-flex">{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field
                                    id="email"
                                    type="email"
                                    name="Email"
                                    placeholder="Email adress"
                                    className={isValid(touched, errors)}
                                />
                                <ErrorMessage name="Email">
                                    {(msg) => <div className="invalid-feedback d-flex">{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field
                                    id="password"
                                    type="password"
                                    name="Password"
                                    placeholder="••••••••"
                                    className={isValid(touched, errors)}
                                />
                                <ErrorMessage name="Password">
                                    {(msg) => <div className="invalid-feedback d-flex">{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">ConfirmPassword</label>
                                <Field
                                    id="confirmPassword"
                                    type="password"
                                    name="ConfirmPassword"
                                    placeholder="••••••••"
                                    className={isValid(touched, errors)}
                                />
                                <ErrorMessage name="ConfirmPassword">
                                    {(msg) => <div className="invalid-feedback d-flex">{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div>
                                <Field
                                    id="termsOfService"
                                    type="checkbox"
                                    name="termsOfService"
                                    class="form-check-input"
                                />
                                <label htmlFor="termsOfService" className="form-check-label">
                                    I accept the Terms of use & Privacy Policy
                                </label>
                                <ErrorMessage name="termsOfService">
                                    {(msg) => <div className="invalid-feedback d-flex">{msg}</div>}
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
