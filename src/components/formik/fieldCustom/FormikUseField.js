import React from 'react';
import { Form } from 'formik';
import CustInput from './CustInput';

const FormikUseField = () => {
  return (
    <div className='container d-flex justify-content-center'>
      <Form>
        <CustInput label='First Name' name='firstName' type='text' />
      </Form>
    </div>
  );
};

export default FormikUseField;
