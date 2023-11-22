import React from 'react';
import { useField, ErrorMessage } from 'formik';
import { Field, Label, Input, Error } from './Checkout.styled.js';

const CustomInput = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <Field>
      <Label htmlFor={props.name}>{label}</Label>
      <Input {...field} {...props} />
      <ErrorMessage name={field.name}>{(error) => <Error>{error}</Error>}</ErrorMessage>
    </Field>
  );
};

export default CustomInput;
