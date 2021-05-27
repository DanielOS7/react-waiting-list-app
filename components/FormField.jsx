import React, { useContext } from 'react';

import WaitingListFormContext from '../context/waiting-list-form-context';

import Form from 'react-bootstrap/Form';

export default function FormField({ id, name, label, placeholder, maxLength }) {
    const {
        handleChange,
        errors,
        touched,
        values,
    } = useContext(WaitingListFormContext);

    return (
        <Form.Group controlId={id}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                value={values[id]}
                maxLength={maxLength}
                isInvalid={!!touched[id] && !!errors[id]}
            />
            <Form.Control.Feedback type="invalid">
                {touched[id] && errors[id]}
            </Form.Control.Feedback>
        </Form.Group>
    );
}