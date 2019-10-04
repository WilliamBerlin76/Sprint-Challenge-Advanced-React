import React from 'react';
import { render } from '@testing-library/react'
import App from './App';
import Players from './components/GetPlayers'

test('renders without crashing', () => {
  render(<App />);
});

test('title is found', () => {
  const { getByText } = render(<App />);

  getByText(/women's world cup/i)
}); 

test('cards container is found', () => {
  const { getByTestId } = render(<Players />);

  getByTestId(/cards/i)
})
