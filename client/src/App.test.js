import React from 'react';
import { render } from '@testing-library/react'
import App from './App';


test('renders without crashing', () => {
  render(<App />);
});

test('title is found', () => {
  const { getByText } = render(<App />);

  getByText(/women's world cup/i)
}); 
