import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Add/i);
  expect(linkElement).toBeInTheDocument();
  cleanup()
});
