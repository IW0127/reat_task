import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustInput from './CustInput';
import CustSelect from './CustSelect';
import CustCheckbox from './CustCheckbox';

const FormikUseField = () => {
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  return (
    <div
      className='container d-flex justify-content-center'
      style={{ width: '30%' }}
    >
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          jobType: '',
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be character or less')
            .required('Required'),
          lastName: Yup.string()
            .max(15, 'Must be character or less')
            .required('Required'),
          email: Yup.string().email('Invalid email').required('Required'),
          jobType: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          await sleep(10000);
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm(values);
        }}
      >
        {({ isValid, dirty, isSubmitting }) => (
          <Form className='col g-4'>
            <CustInput label='First Name' name='firstName' type='text' />
            <CustInput label='Last Name' name='lastName' type='text' />
            <CustInput label='email' name='email' type='email' />
            <CustSelect label='Job type' name='jobType'>
              <option value=''>Select a job type</option>
              <option value='designer'>Designer</option>
              <option value='development'>Developer</option>
              <option value='product'>Product Manager</option>
              <option value='other'>Other</option>
            </CustSelect>
            <CustCheckbox name='acceptedTerms'>
              I accept the terms and conditions
            </CustCheckbox>
            <button
              type='submit'
              className='btn btn-primary mt-4'
              disabled={!isValid || !dirty || isSubmitting}
            >
              {!isSubmitting ? 'submit' : 'Loading...'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikUseField;
