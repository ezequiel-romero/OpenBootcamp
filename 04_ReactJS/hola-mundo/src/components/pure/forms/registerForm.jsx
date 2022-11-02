import React from "react";
import { User } from "../../../models/user.class";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ROLES } from "../../../models/roles.enum";

const RegisterForm = () => {
    let user = new User();

    const initialValues = {
        userName: "",
        email: "",
        password: "",
        confirm: "",
        role: ROLES.USER,
    };

    const registerSchema = Yup.object().shape({
        userName: Yup.string()
            .min(6, "Username too short.")
            .max(12, "Username too long.")
            .required("Username is required."),
        email: Yup.string()
            .email("Invalid email format.")
            .required("Email is required."),
        role: Yup.string()
            .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a role.")
            .required("Role is required."),
        password: Yup.string()
            .min(8, "Password too short.")
            .required("Password is required."),
        confirm: Yup.string()
            .when("password", {
                is: (value) => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Passwords must match."
                ),
            })
            .required("You must enter the password again."),
    });

    const submit = (values) => {
        alert("Register user");
    };

    return (
        <div>
            <h4>Register Form</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({
                    errors,
                    touched,
                    values,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                }) => (
                    <Form className="mt-4">
                        <div className="mb-2">
                            <label htmlFor="userName" className="d-block text-start">
                                Username
                            </label>
                            <Field className="d-block" id="userName" name="userName" placeholder="Username" type="text"/>
                            {errors.userName && touched.userName && (
                                <ErrorMessage name="userName" component="div"></ErrorMessage>
                            )}
                        </div>

                        <div className="mb-2">
                            <label htmlFor="email" className="d-block text-start">
                                Email
                            </label>
                            <Field className="d-block" id="email" name="email" placeholder="example@email.com" type="email" />
                            {errors.email && touched.email && (
                                <ErrorMessage name="email" component="div"></ErrorMessage>
                            )}
                        </div>

                        <div className="mb-2">
                            <label htmlFor="password" className="d-block text-start">
                                Password
                            </label>
                            <Field className="d-block" id="password" name="password" placeholder="Password" type="password"/>
                            {errors.password && touched.password && (
                                <ErrorMessage name="password" component="div"></ErrorMessage>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="confirm" className="d-block text-start">
                                Confirm password
                            </label>
                            <Field className="d-block" id="confirm" name="confirm" placeholder="Confirm password" type="password"/>
                            {errors.confirm && touched.confirm && (
                                <ErrorMessage name="confirm" component="div"></ErrorMessage>
                            )}
                        </div>

                        <button type="submit">Register</button>
                        {isSubmitting ? <p>Creating your credentials...</p> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;
