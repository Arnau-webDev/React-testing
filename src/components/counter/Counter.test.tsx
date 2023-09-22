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
});