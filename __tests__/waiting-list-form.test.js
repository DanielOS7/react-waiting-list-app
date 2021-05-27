import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import WaitingListForm from '../components/WaitingListForm';

describe('Waiting List Form', () => {
    it('should have values entered in Email Address and Mobile Number fields', async () => {
        render(<WaitingListForm />);
        await act(async () => {
            userEvent.type(await screen.findByRole('textbox', { name: 'Email Address' }), 'test@test.com');
            userEvent.type(await screen.findByRole('textbox', { name: 'Mobile Number' }), '07777777777');

        });
        expect(screen.getByRole('textbox', { name: 'Email Address' })).toHaveValue('test@test.com');
        expect(screen.getByRole('textbox', { name: 'Mobile Number' })).toHaveValue('07777777777');
    });

    it('should trigger validation when form fields are blank', async () => {
        render(<WaitingListForm />);
        await act(async () => {
            userEvent.click(await screen.getByRole('button'));
        });
        expect(screen.getByText('Email must be provided')).toBeTruthy();
        expect(screen.getByText('Mobile number must be provided')).toBeTruthy();
    });
});
