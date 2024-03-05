import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator Component', () => {
  it('should render the calculator', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    expect(getByDisplayValue('')).toBeInTheDocument();
  });

  it('should update input value when buttons are clicked', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    
    fireEvent.click(getByText('7'));
    expect(getByDisplayValue('7')).toBeInTheDocument();

    fireEvent.click(getByText('+'));
    expect(getByDisplayValue('7+')).toBeInTheDocument();

    fireEvent.click(getByText('3'));
    expect(getByDisplayValue('7+3')).toBeInTheDocument();
  });

  it('should calculate the result when "=" button is clicked', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));

    expect(getByDisplayValue('10')).toBeInTheDocument();
  });

  it('should clear the input when "C" button is clicked', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('C'));

    expect(getByDisplayValue('')).toBeInTheDocument();
  });

  it('should handle division by zero', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('0'));
    fireEvent.click(getByText('='));
  
    expect(getByDisplayValue('Infinity')).toBeInTheDocument();
  });
  
});
