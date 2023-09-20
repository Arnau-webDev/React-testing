import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
	test('renders correctly', () => {
		render(<App />);
		const headingElement = screen.getByText('Vite + React');
		expect(headingElement).toBeInTheDocument();
	});

	test('counter increases correctly', () => {
		render(<App />);
		const button = screen.getByRole('button');

		fireEvent.click(button);
	});
});


