import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const YupFormik = () => {
  // const [values, setValues] = useState({});

  /*   const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };
 */
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('please fill First Name.'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('please fill Last Name.'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Please fill Email.'),
    }),
    onSubmit: (values) => {
      console.log('---------------');
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form className='row g-4' onSubmit={formik.handleSubmit}>
        <div className='col-md-4'>
          <label htmlFor='validationServer01' className='form-label'>
            First name
          </label>
          <div className='input-group'>
            <input
              type='text'
              className={`form-control rounded ${
                formik.touched.firstName &&
                formik.errors.firstName &&
                'is-invalid'
              }`}
              id='firstName'
              {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className='invalid-feedback'>{formik.errors.firstName}</div>
            ) : null}
          </div>
        </div>
        <div className='col-md-4'>
          <label htmlFor='validationServer02' className='form-label'>
            Last name
          </label>
          <div className='input-group'>
            <input
              type='text'
              className={`form-control rounded ${
                formik.touched.lastName &&
                formik.errors.lastName &&
                'is-invalid'
              }`}
              id='lastName'
              name='lastName'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            <div className='invalid-feedback'>
              {formik.touched.lastName && formik.errors.lastName}
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <label htmlFor='validationServer03' className='form-label'>
            email
          </label>
          <div className='input-group'>
            <input
              type='text'
              className={`form-control rounded ${
                formik.touched.email && formik.errors.email && 'is-invalid'
              }`}
              id='email'
              name='email'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='invalid-feedback'>{formik.errors.email}</div>
            ) : null}
          </div>
        </div>

        <div className='col-12'>
          <button className='btn btn-primary' type='submit'>
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default YupFormik;
