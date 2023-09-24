import { describe, expect, test, vi } from 'vitest';
import { CounterTwo } from './CounterTwo';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

describe('CounterTwo', () => {
	test('renders correctly', () => { 
		render(<CounterTwo count={0} />);
		const textEl = screen.getByText('Counter Two');
		expect(textEl).toBeInTheDocument();
	});

	test('handlers are called', async () => { 
		user.setup();
		const incrementHandler = vi.fn();
		const decrementHandler = vi.fn();

		render(<CounterTwo count={0} handleDecrement={decrementHandler} handleIncrement={incrementHandler}/>);

		const incrementBtn = screen.getByRole('button', { name: 'Increment'});
		const decrementBtn = screen.getByRole('button', { name: 'Decrement'});

		await user.click(incrementBtn);
		await user.click(incrementBtn);
		await user.click(decrementBtn);

		expect(incrementHandler).toHaveBeenCalledTimes(2);
		expect(decrementHandler).toHaveBeenCalledTimes(1);
	});
});