import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { Counter } from './Counter';


describe('Counter', () => {
	test('renders correctly', () => {
		render(<Counter />);

		const countEl = screen.getByRole('heading');
		const incrementBtn = screen.getByRole('button', { name: 'Increment'});

		expect(countEl).toBeInTheDocument();
		expect(incrementBtn).toBeInTheDocument();
	});

	test('renders a count of 0', () => { 
		render(<Counter />);

		const countEl = screen.getByRole('heading');
		expect(countEl).toHaveTextContent('0');
	});

	test('counter increases by 1 when user clicks', async () => { 
		user.setup();
		render(<Counter />);

		const incrementBtn = screen.getByRole('button', { name: 'Increment'});
		const countEl = screen.getByRole('heading');

		expect(countEl).toHaveTextContent('0');

		await user.click(incrementBtn);

		expect(countEl).toHaveTextContent('1');
	});

	test('renders a count of 10 after clicking the set button', async () => { 
		user.setup();
		render(<Counter />);

		const increaseAmount = '10';

		const inputEl = screen.getByRole('spinbutton');
		const setBtn = screen.getByRole('button', { name: 'Set' });
		const countEl = screen.getByRole('heading');

		await user.type(inputEl, increaseAmount);

		expect(inputEl).toHaveValue(parseInt(increaseAmount));

		await user.click(setBtn);

		expect(countEl).toHaveTextContent(increaseAmount);
	});

	test('elements are focused in the right order', async () => { 
		user.setup();
		render(<Counter />);

		const amountInput = screen.getByRole('spinbutton');
		const incrementBtn = screen.getByRole('button', { name: 'Increment' });
		const setBtn = screen.getByRole('button', { name: 'Set' });

		await user.tab();

		expect(incrementBtn).toHaveFocus();

		await user.tab();

		expect(amountInput).toHaveFocus();

		await user.tab();

		expect(setBtn).toHaveFocus();
	});
});