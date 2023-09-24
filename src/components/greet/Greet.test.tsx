import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Greet from './Greet';

describe('Greet component', () => {
	test('renders correctly', () => {
		render(<Greet />);
		const greetText = screen.getByText('Hello');

		expect(greetText).toBeInTheDocument();
	});

	test('renders with the provided name', () => {
		const name = 'ArnauMQ';
		render(<Greet name={name} />);
		const greetText = screen.getByText(`Hello ${name}`);

		expect(greetText).toBeInTheDocument;
	});
});
