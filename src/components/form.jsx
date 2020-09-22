import * as firebase from "firebase/app";
import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import "animate.css";
import validationSchema from "../service/validationForm";

// validation login//

import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC2mTEiADWDdKUiy2O6vA4sSkwki7mIEFo",
    authDomain: "registration-form-69060.firebaseapp.com",
    databaseURL: "https://registration-form-69060.firebaseio.com",
    projectId: "registration-form-69060",
    storageBucket: "registration-form-69060.appspot.com",
    messagingSenderId: "893847486245",
    appId: "1:893847486245:web:69888b9c6f0d59659924cc",
    measurementId: "G-J2ESXM1NPQ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const isValidInput = (touched, errors) => {
    if (touched && errors) {
        return "is-invalid form-control animated headShake";
    }
    if (!touched) {
        return "form-control";
    }
    if (touched) {
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
                    console.log(JSON.stringify(values));
                    firebase
                        .auth()
                        .createUserWithEmailAndPassword("aragonlopezjuan87@gmail.com", "sdfasfsa");

                    resetForm();
                    setSubmitting(false);
                }}
            >
                {({ errors, handleSubmit, touched, isValid, dirty }) => (
                    <div className=" mt-4 d-flex align-items-center justify-content-center">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <Field
                                    autofocus="autofocus"
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder=" Your full name"
                                    className={isValidInput(touched.name, errors.name)}
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
                                    className={isValidInput(touched.Username, errors.Username)}
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
                                    className={isValidInput(touched.Email, errors.Email)}
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
                                    className={isValidInput(touched.Password, errors.Password)}
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
                                    className={isValidInput(
                                        touched.ConfirmPassword,
                                        errors.ConfirmPassword,
                                    )}
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
                                    className="form-check-input"
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
                                disabled={!(isValid && dirty)}
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
Form.whyDidYouRender = true;
export default Form;
