import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Users } from './Users';

import { server } from '../../mocks/server';
import { users } from '../../mocks/data';
import { errorHandler } from '../../mocks/handlers';

describe('Users', () => {
	test('renders correctly', () => {
		render(<Users />);
		const textEl = screen.getByText('Users');
		expect(textEl).toBeInTheDocument();
	});

	test('renders a list of users', async () => {
		render(<Users />);
		const usersList = await screen.findAllByRole('listitem');
		expect(usersList).toHaveLength(users.length);
	});

	test('renders error', async () => {
		server.use(errorHandler);
		render(<Users />);

		const errorText = await screen.findByText('Error fetching users');
		expect(errorText).toBeInTheDocument();
	});
});
