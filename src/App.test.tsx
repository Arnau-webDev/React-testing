import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders whatever', () => {
	render(<App />);
	const headingElement = screen.getByText('Vite + React');
	expect(headingElement).toBeInTheDocument();
});


