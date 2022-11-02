import React from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const TaskForm = ({add}) => {

    const initialValues = {
        name: "",
        description: "",
        level: LEVELS.NORMAL
    };

    const taskSchema = Yup.object().shape({
        name: Yup.string()
            .required("A task name is required"),
        description: Yup.string()
            .required("A task description is required"),
        level: Yup.string()
            .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], "You must select a level.")
            .required("Level is required."),
    });

    function addTask(values) {
        const newTask = new Task(
            values.name,
            values.description,
            false,
            values.level,
        )
        add(newTask)
    };

    return (
        <div>
            <Formik
                initialValues={ initialValues }
                validationSchema={ taskSchema }
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        addTask(values);
                        actions.resetForm({});
                        actions.setSubmitting(false);
                    }, 500);
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
                            <label htmlFor="name" className="d-block text-start">
                                Task name:
                            </label>
                            <Field className="form-control mb-2" id="name" name="name" placeholder="Task name" type="text"/>
                            {errors.name && touched.name && (
                                <small className="text-start text-danger">
                                    <ErrorMessage name="name" component="div"></ErrorMessage>
                                </small>
                            )}
                        </div>

                        <div className="mb-2">
                            <label htmlFor="description" className="d-block text-start">
                                Task description:
                            </label>
                            <Field className="form-control mb-2" id="description" name="description" placeholder="Task description" type="text"/>
                            {errors.description && touched.description && (
                                <small className="text-start text-danger">
                                    <ErrorMessage name="description" component="div"></ErrorMessage>
                                </small>
                            )}
                        </div>

                        <div className="mb-2">
                            <label htmlFor="level" className="d-block text-start">
                                Task level:
                            </label>
                            <Field className="form-control mb-2" id="level" name="level" placeholder="Task level" as="select">
                                <option value={LEVELS.NORMAL}>
                                    Normal
                                </option>
                                <option value={LEVELS.URGENT}>
                                    Urgent
                                </option>
                                <option value={LEVELS.BLOCKING}>
                                    Blocking
                                </option>
                            </Field>
                            {errors.level && touched.level && (
                                <small className="text-start text-danger">
                                    <ErrorMessage name="level" component="div"></ErrorMessage>
                                </small>
                            )}
                        </div>

                        <button type="submit" className="btn btn-success btn-sm d-block">Add Task</button>
                        {isSubmitting ? <p>Adding your task...</p> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

TaskForm.propTypes ={
    add: PropTypes.func.isRequired
}

export default TaskForm;
