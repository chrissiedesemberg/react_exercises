import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class UserForm extends Component {

    render(){
        return(
            <div>
                <h3>Heading for your App</h3>
                <Formik initialValues={{ nickname: '', email: '', password: '' }} 
                validate={values => {
                let errors = {};
                if (!values.nickname) {
                    errors.nickname = 'Required';
                }
                else if (values.nickname.length < 3) {
                    errors.nickname = 'Name too short';
                }
                if (!values.email) {
                errors.email = 'Required';
                } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[AZ]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                } else if (values.email.length < 10) {
                errors.email = 'Email address too short';
                }
                if (!values.password) {
                errors.password = 'Required';
                }
                else if (values.password.length < 8) {
                errors.password = 'Password too short';
                }
                return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="nickname" placeholder="Nickname"/>
                        <span style={{ color:"red", fontWeight: "bold" }}>
                            <ErrorMessage name="nickname" component="div" />
                        </span>
                        <Field type="email" name="email" placeholder="Email address"/>
                        <span style={{ color:"red", fontWeight: "bold" }}>
                        <ErrorMessage name="email" component="div" />
                        </span>
                        <Field type="password" name="password" placeholder="Password" />
                        <span style={{ color:"red", fontWeight: "bold" }}>
                            <ErrorMessage name="password" component="div" />
                        </span>
                        <button type="submit" disabled={isSubmitting}>
                        Submit
                        </button>
                    </Form>
                )}
                </Formik>
            </div>
        )
    }
}

export default UserForm;