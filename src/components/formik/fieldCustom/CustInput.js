import React from 'react';
import { useField } from 'formik';

const CustInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field, meta);
  return (
    <div className='col'>
      <label htmlFor='firstName my-1' className='form-label'>
        First Name
      </label>
      <div className='input-group mb-3'>
        <input
          type='text'
          name='firstName'
          className={`form-control rounded ${
            formik.touched.firstName && formik.errors.firstName && 'is-invalid'
          }`}
        />
        <div className='invalid-feedback'>
          <ErrorMessage name='firstName' />
        </div>
      </div>
    </div>
  );
};

export default CustInput;
