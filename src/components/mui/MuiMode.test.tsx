import {render, screen } from '../../test-utils';
import { describe, expect, test } from 'vitest';
import { MuiMode } from './MuiMode';


describe('MuiMode', () => {
	test('renders text correctly', () => { 
		render(<MuiMode />);
		const headingEl = screen.getByRole('heading');
        
		expect(headingEl).toHaveTextContent('dark mode');
	});
});