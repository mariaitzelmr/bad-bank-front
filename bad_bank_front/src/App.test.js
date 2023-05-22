import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Nav element renders', () => {
  render(<App />);
  const badBankLi = screen.getByText('Bad Bank');
const createAccountLi = screen.getByText('Create Account');
const depositLi = screen.getByText('Deposit');
const withdrawLi = screen.getByText('Withdraw');
const allDataLi = screen.getByText('All Data');
  expect(badBankLi).toBeInTheDocument();
  expect(createAccountLi).toBeInTheDocument();
  expect(depositLi).toBeInTheDocument();
  expect(withdrawLi).toBeInTheDocument();
  expect(allDataLi).toBeInTheDocument();
});

test('Home page renders', async () => {
  render(<App />)
  const badBankElement = screen.getByText('Bad Bank');

  userEvent.click(badBankElement);

  expect(screen.getByText('Welcome to the Bad Bank')).toBeInTheDocument();
  expect(screen.getByText('For all your banking needs')).toBeInTheDocument();
})

/*
test('Create Account renders', () => {
  render(<App />)
  userEvent.click(screen.getByText('Create Account'));
  
  expect(badBankLi.classList.contains('active')).toBe(false);
  expect(createAccountLi.classList.contains('active')).toBe(true);
  expect(depositLi.classList.contains('active')).toBe(false);
  expect(withdrawLi.classList.contains('active')).toBe(false);
  expect(allDataLi.classList.contains('active')).toBe(false);

  expect(screen.getByText('Create New Account')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  expect(screen.getByRole('button')).toHaveTextContent('Create Account');
  expect(screen.getByRole('button')).toBeDisabled();
})*/

test('Create Account functionality', () => {
  render(<App />)
  userEvent.click(screen.getByText('Create Account'));
  // test for creating an account
})

test('Deposit renders', () => {
  render(<App />)
  userEvent.click(screen.getByText('Deposit'));
  // test for create account page render
})

test('Deposit functionality', () => {
  render(<App />)
  userEvent.click(screen.getByText('Create Account'));
  // test for creating an account
})

test('Withdraw renders', () => {
  render(<App />)
  userEvent.click(screen.getByText('Create Account'));
  // test for create account page render
})

test('Withdraw functionality', () => {
  render(<App />)
  userEvent.click(screen.getByText('Create Account'));
  // test for creating an account
})

test('All Data renders', () => {
  render(<App />)
  userEvent.click(screen.getByText('Create Account'));
  // test for create account page render
})
