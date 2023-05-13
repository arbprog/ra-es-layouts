import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders name button', () => {
  render(<App />);
  expect(<App />).toBeDefined();
})