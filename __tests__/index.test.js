import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from '../pages/index';

describe('WaitingList', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('has Ticketmaster header on the page', () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: 'Ticketmaster' })).toBeInTheDocument();
  });

  // An attempt I didn't get working in time
  // it('should post successfully when valid details are provided', async () => {
  //   render(<App />);
  //   await act(async () => {
  //     userEvent.type(await screen.findByRole('textbox', { name: 'Email Address' }), 'test@test.com');
  //     userEvent.type(await screen.findByRole('textbox', { name: 'Mobile Number' }), '07777777777');
  //     userEvent.click(await screen.findByRole('button'));
  //     await screen.findByText('You have been added to the waiting list!');
  //   });
  //   expect(screen.getByText('You have been added to the waiting list!')).toBeTruthy();
  // });
});
