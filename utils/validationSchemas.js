import * as yup from 'yup';

export const waitingListValidationSchema= yup.object().shape({
    emailAddress: yup
      .string()
      .email('Please enter a valid email')
      .required('Email must be provided'),
    mobileNumber: yup
      .string()
      .matches(
        /^(07\d{9,12}|447\d{7,11})$/,
        'Please enter a valid mobile number'
      )
      .required('Mobile number must be provided'),
  });