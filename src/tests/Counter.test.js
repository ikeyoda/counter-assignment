// import necessary react testing library helpers here
// import the Counter component here
import {render, screen, fireEvent, getByText} from '@testing-library/react';
import Counter from "../components/Counter";
import userEvent from '@testing-library/user-event'
beforeEach(() => {
    render(< Counter/>);
})

test('renders counter message', () => {
    const counterText = screen.getByText('Counter');
    expect(counterText).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    const zeroText = screen.getByText('0');
    expect(zeroText).toBeInTheDocument();
});

test('clicking + increments the count', () => {
    // Complete the unit test below based on the objective in the line above
    userEvent.click(screen.getByText('+'));
    const plusText = screen.getByText('1');
    expect(plusText).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
    // Complete the unit test below based on the objective in the line above
    userEvent.click(screen.getByText('-'));
    const minusText = screen.getByText('-1');
    expect(minusText).toBeInTheDocument();
});

