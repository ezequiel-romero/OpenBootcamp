import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
    const initialCredentials = {
        email: "",
        password: "",
    };

    return (
        <div>
            <h4>Login Form</h4>
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem("credentials", values);
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
                            <label
                                htmlFor="email"
                                className="d-block text-start"
                            >
                                Email
                            </label>
                            <Field
                                className="d-block"
                                id="email"
                                name="email"
                                placeholder="example@email.com"
                                type="email"
                            />
                            {errors.email && touched.email && (
                                <ErrorMessage name="email"></ErrorMessage>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="d-block text-start"
                            >
                                Password
                            </label>
                            <Field
                                className="d-block"
                                id="password"
                                name="password"
                                placeholder="Password"
                                type="password"
                            />
                            {errors.password && touched.password && (
                                <ErrorMessage name="password"></ErrorMessage>
                            )}
                        </div>

                        <button type="submit">Submit</button>
                        {isSubmitting ? <p>Login your credentials...</p> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;
