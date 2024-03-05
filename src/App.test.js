import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should render the app with the calculator', () => {
    const { getByText } = render(<App />);
    expect(getByText('Simple Calculator')).toBeInTheDocument();
  });
});
