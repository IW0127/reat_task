import React, { useEffect, useState } from 'react';
import { useFormikContext, Formik, Form, Field } from 'formik';
const AutoSubmit = (props) => {
  const { isValid, values, touched, submitForm } = useFormikContext();

  const [useList, setUseList] = useState([]);

  useEffect(() => {
    isValid &&
      Object.keys(touched).length === 4 &&
      submitForm() &&
      setUseList([...useList, values]);
    console.log(touched);
  }, [isValid, values, touched, submitForm]);

  return useList.map(({ firstName, lastName, age, city }, id) => (
    <tr
      key={id}
      className={`${
        (age >= 10 && age <= 20 && 'table-success') ||
        (age <= 50 && age > 20 && 'table-warning') ||
        (age > 50 && 'table-danger')
      }`}
    >
      <th scope='row'>{id + 1}</th>
      <td>{firstName} </td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td>{city}</td>
    </tr>
  ));
};

export default AutoSubmit;
