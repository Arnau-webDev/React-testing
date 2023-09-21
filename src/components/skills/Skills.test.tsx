import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Skills } from './Skills';


describe('Skills', () => {
	const skills = ['HTML', 'CSS', 'Javascript'];

	test('renders correctly', () => {
		render(<Skills skills={skills} />);

		const listEl = screen.getByRole('list');
		expect(listEl).toBeInTheDocument();
	});

	test('renders a list of skills', () => {
		render(<Skills skills={skills} />);

		const listItemElements = screen.getAllByRole('listitem');
		expect(listItemElements).toHaveLength(skills.length);
	});
});