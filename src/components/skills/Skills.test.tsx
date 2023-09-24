import { fireEvent, render, screen } from '@testing-library/react';
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

	test('renders Login button', () => {
		render(<Skills skills={skills} />);

		const loginBtn = screen.getByRole('button');
		expect(loginBtn).toBeInTheDocument();
	});

	test('renders Start learning button after click', () => {
		render(<Skills skills={skills} />);

		const loginBtn = screen.getByRole('button');
		expect(loginBtn.textContent).toBe('Login');

		fireEvent.click(loginBtn);

		expect(loginBtn.textContent).toBe('Start learning');
	});

	test('does not find Start Learning button in the DOM', () => {
		render(<Skills skills={skills} />);

		const startLearningBtn = screen.queryByRole('button', {
			name: 'Start learning',
		});
		expect(startLearningBtn).not.toBeInTheDocument();
	});

	test('Start learning button is eventually displayed', async () => {
		// const view = render(<Skills skills={skills} />); // Create container for logRoles
		// logRoles(view.container);
		// screen.debug();
		
		render(<Skills skills={skills} />);

		const startLearningBtn = await screen.findByRole(
			'button',
			{ name: 'Start learning' },
			{ timeout: 2000 },
		);
		// screen.debug();

		expect(startLearningBtn).toBeInTheDocument();
	});
});
