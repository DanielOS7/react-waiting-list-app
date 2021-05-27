import React, { useContext } from 'react';

import { Formik } from 'formik';

import FormField from './FormField';
import { postWaitingList } from '../services/waiting-list.service';
import { waitingListValidationSchema } from '../utils/validationSchemas';

import WaitingListContext from '../context/waiting-list-context';
import WaitingListFormContext from '../context/waiting-list-form-context';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import Styles from '../styles/waiting-list.module.css';

export default function WaitingListForm() {
  const { setShowModal, setMessageData, setError } = useContext(WaitingListContext);

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const { emailAddress, mobileNumber } = values;

    postWaitingList({ emailAddress, mobileNumber })
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
      { formik => (
        <Form
          id="waiting-list-form"
          onSubmit={formik.handleSubmit}
          className={Styles.waitingListForm}
        >
          <WaitingListFormContext.Provider value={formik}>
            <FormField
              id="emailAddress"
              name="emailAddress"
              label="Email Address"
              placeholder="Enter email"
              maxLength={50}
            />
            <FormField
              id="mobileNumber"
              name="mobileNumber"
              label="Mobile Number"
              placeholder="Mobile Number"
              maxLength={11}
            />
          </WaitingListFormContext.Provider>
          <Button
            variant="primary"
            type="submit"
            disabled={formik.isSubmitting || !formik.isValid}
          >
            Submit
            {formik.isSubmitting && (
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
