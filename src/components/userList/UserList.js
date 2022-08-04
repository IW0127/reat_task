import React, { useState } from 'react';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import AutoSubmit from './AutoSubmit';
const UserList = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          age: '',
          city: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required(),
          lastName: Yup.string().required(),
          age: Yup.number().min(1).max(100).required(),
          city: Yup.string().required(),
        })}
        setTouched={false}
        validateOnBlur={false}
        onSubmit={(values, { resetForm }) => {
          resetForm();
        }}
      >
        {(formik) => (
          <Form>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>First Name</th>
                  <th scope='col'>Last Name</th>
                  <th scope='col'>Age</th>
                  <th scope='col'>city</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'></th>
                  <td>
                    <Field
                      className={`form-control rounded px-2 my-2 ${
                        formik.touched.firstName &&
                        formik.errors.firstName &&
                        'is-invalid'
                      }`}
                      type='text'
                      name='firstName'
                    />
                  </td>
                  <td>
                    <div className='input-group'>
                      <Field
                        className={`form-control rounded px-2 my-2 ${
                          formik.touched.lastName &&
                          formik.errors.lastName &&
                          'is-invalid'
                        }`}
                        type='text'
                        name='lastName'
                      />
                    </div>
                  </td>
                  <td>
                    <Field
                      className={`form-control rounded px-2 my-2 ${
                        formik.touched.age && formik.errors.age && 'is-invalid'
                      }`}
                      type='text'
                      name='age'
                    />
                  </td>
                  <td>
                    <Field
                      className={`form-control rounded px-2 my-2 ${
                        formik.touched.city &&
                        formik.errors.city &&
                        'is-invalid'
                      }`}
                      type='text'
                      name='city'
                    />
                  </td>
                </tr>
                <AutoSubmit formik={formik} />
              </tbody>
            </table>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserList;
