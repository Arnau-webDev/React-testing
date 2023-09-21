import { describe, expect, test } from 'vitest';
import { Application } from './Application';
import { render, screen } from '@testing-library/react';

describe('Application', () => {
	test('renders correctly', () => {
		render(<Application />);

		const jobLocationEl = screen.getByRole('combobox');
		const termsEl = screen.getByRole('checkbox');
		const submitBtnEl = screen.getByRole('button');
        
		expect(jobLocationEl).toBeInTheDocument();
		expect(termsEl).toBeInTheDocument();
		expect(submitBtnEl).toBeInTheDocument();
	});
});