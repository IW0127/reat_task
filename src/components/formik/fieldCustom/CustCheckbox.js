import React from 'react';
import { useField } from 'formik';

const CustCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div className='col'>
      <div className='input-group form-check  mt-4'>
        <input
          type='checkbox'
          className={`form-check-input rounded ${
            meta.touched && meta.error && 'is-invalid'
          }`}
          {...field}
          {...props}
          id={props.name}
        />
        <label className='form-check-label ' htmlFor={props.name}>
          {children}
        </label>
        <div className='invalid-feedback mt-4'>
          {meta.touched && meta.error}
        </div>
      </div>
    </div>
  );
};

export default CustCheckbox;
