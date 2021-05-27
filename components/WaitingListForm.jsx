import React, { useContext } from 'react';

import { Formik } from 'formik';
import WaitingListContext from '../context/waiting-list-context';
import { waitingListValidationSchema } from '../utils/validationSchemas';
import { postWaitingList } from '../services/waiting-list.service';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import Styles from '../styles/waiting-list.module.css';

export default function WaitingListForm() {
  const { setShowModal, setMessageData, setError } = useContext(WaitingListContext);

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const { emailAddress, mobileNumber } = values;

    postWaitingList({emailAddress, mobileNumber})
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") {
          setError(true);
        } else {
          setError(false);
        };
        setMessageData(data);
        setShowModal(true);
        resetForm();
        setSubmitting(false);
      })
      .catch((err) => {
        setMessageData({
          message: 'Something has gone wrong, please try again later',
        });
        setShowModal(true);
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{ emailAddress: '', mobileNumber: '' }}
      validationSchema={waitingListValidationSchema}
      onSubmit={onSubmit}
    >
      {({
        handleSubmit,
        handleChange,
        errors,
        touched,
        isSubmitting,
        isValid,
        values,
      }) => (
        <Form
          id="waiting-list-form"
          onSubmit={handleSubmit}
          className={Styles.waitingListForm}
        >
          <Form.Group controlId="emailAddress">
            <Form.Label> Email Address </Form.Label>
            <Form.Control
              name="emailAddress"
              placeholder="Enter email"
              onChange={handleChange}
              value={values.emailAddress}
              maxLength={50}
              isInvalid={!!touched.emailAddress && !!errors.emailAddress}
            />
            <Form.Control.Feedback type="invalid">
              {touched.emailAddress && errors.emailAddress}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="mobileNumber">
            <Form.Label> Mobile Number </Form.Label>
            <Form.Control
              name="mobileNumber"
              placeholder="Mobile Number"
              onChange={handleChange}
              value={values.mobileNumber}
              maxLength={11}
              isInvalid={!!touched.emailAddress && !!errors.mobileNumber}
            />
            <Form.Control.Feedback type="invalid">
              {touched.mobileNumber && errors.mobileNumber}
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={isSubmitting || !isValid}
          >
            Submit
            {isSubmitting && (
              <Spinner
                as="span"
                size="sm"
                role="status"
                animation="border"
                variant="light"
              />
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
