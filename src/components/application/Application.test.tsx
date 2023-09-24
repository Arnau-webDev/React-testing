import { describe, expect, test } from 'vitest';
import { Application } from './Application';
import { render, screen } from '@testing-library/react';

describe('Application', () => {
	test('renders correctly', () => {
		render(<Application />);

		// getByRole
		// getByRoleOptions: name, level, hidden, selected, checked, pressed

		const pageHeading = screen.getByRole('heading', { level: 1 });

		const pageSectionHeading = screen.getByRole('heading', { level: 2 });

		const nameEl = screen.getByRole('textbox', { name: 'Name' });

		const bioEl = screen.getByRole('textbox', { name: 'Bio' });

		const jobLocationEl = screen.getByRole('combobox');
		const termsEl = screen.getByRole('checkbox');
		const submitBtnEl = screen.getByRole('button');

		expect(pageHeading).toBeInTheDocument();
		expect(pageSectionHeading).toBeInTheDocument();

		expect(nameEl).toBeInTheDocument();
		expect(bioEl).toBeInTheDocument();
		expect(jobLocationEl).toBeInTheDocument();
		expect(termsEl).toBeInTheDocument();
		expect(submitBtnEl).toBeInTheDocument();

		// getByLabelText
		// getByLabelTextOptions: selector

		const nameEl2 = screen.getByLabelText('Name', { selector: 'input' });
		expect(nameEl2).toBeInTheDocument();

		// getByPlaceholderText

		const nameEl3 = screen.getByPlaceholderText('Fullname');
		expect(nameEl3).toBeInTheDocument();

		// getByText
		// getByTextOptions: selector

		const paragraphEl = screen.getByText('All fields are mandatory');
		expect(paragraphEl).toBeInTheDocument();

		// getByDisplayValue

		const nameEl4 = screen.getByDisplayValue('Vishwas');
		expect(nameEl4).toBeInTheDocument();

		// getByAltText

		const imageEl = screen.getByAltText('a person with a laptop');
		expect(imageEl).toBeInTheDocument();

		// getByTitle

		const closeEl = screen.getByTitle('close');
		expect(closeEl).toBeInTheDocument();

		// getByTestId

		const customEl = screen.getByTestId('custom-element');
		expect(customEl).toBeInTheDocument();

		/*
            List of priority RTL queries to select DOM nodes

            - getByRole
            - getByLabelText
            - getByPlaceholderText
            - getByText
            - getByDisplayValue
            - getByAltText
            - getByTitle
            - getByTestId (only if none of the above work. ex: the text of the element is dynamic)
        */
	});
});
