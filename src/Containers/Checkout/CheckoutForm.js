import React from 'react';
import { Formik, Form } from 'formik';
import { Container, Heading, Buttons, Submit, GoBack } from './Checkout.styled.js';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import CustomInput from './CustomInput.js';

const initialValues = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  address: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Written name is too short')
    .max(15, 'Written name is too long')
    .matches('^[A-Z]+', 'Name should start with uppercase letter')
    .required('This field is required'),
  surname: Yup.string()
    .min(3, 'Written surname is too short')
    .max(15, 'Written surname is too long')
    .matches('^[A-Z]+', 'Surname should start with uppercase letter')
    .required('This field is required'),
  email: Yup.string().email('Invalid email').required('This field is required'),
  phone: Yup.string().matches('^[+\\d]\\d{8,11}', 'Invalid number').required('This field is required'),
  address: Yup.string().optional(),
});

const CheckoutForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={({ setSubmitting }) => {
        onSubmit();
        setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <Container>
            <Heading>Checkout</Heading>
            <CustomInput label="Name" name="name" type="text" placeholder="Enter name" />
            <CustomInput label="Surname" name="surname" type="text" placeholder="Enter surname" />
            <CustomInput label="Email" name="email" type="email" placeholder="Enter email" />
            <CustomInput label="Phone" name="phone" type="text" placeholder="Enter phone number" />
            <CustomInput label="Address" name="address" type="text" placeholder="Enter address" />
            <Buttons>
              <Link to="/cart">
                <GoBack>Go Back</GoBack>
              </Link>
              <Submit type="submit" disabled={props.isSubmitting}>
                Continue
              </Submit>
            </Buttons>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
