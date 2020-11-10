import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ExchangePanel } from '../ExchangePanel';
import { USERS_ACCOUNTS_MOCK } from './resources/ExchangePanel.resource';

const renderExchangePanel = (accounts = USERS_ACCOUNTS_MOCK) => {
	render(<ExchangePanel accounts={accounts} />);
};

describe('ExchangePanel', () => {
	it('Should render', () => {
		// given
		const countOfField = 2;
		const countOfButton = 1;
		// when
		renderExchangePanel();
		// then
		expect(screen.getAllByRole('textbox').length).toBe(countOfField);
		expect(screen.getAllByRole('button').length).toBe(countOfButton);
	});

	it('Should exchange from £ to $', () => {
		// given
		const transferAmount = '200';
		const availableAmountAfterTransaction = '840.50';
		// when
		renderExchangePanel();
		userEvent.type(screen.getAllByRole('textbox')[0], transferAmount);
		userEvent.click(screen.getByRole('button'));
		// then
		expect(screen.getByText(`You have: £${availableAmountAfterTransaction}`)).toBeInTheDocument();
	});

	it('Should switch account and exchange from € to $', () => {
		// given
		const transferAmount = '100';
		const availableAmountAfterTransaction = '130.12';
		// when
		renderExchangePanel();
		userEvent.click(screen.getAllByRole('listitem')[2]);
		userEvent.type(screen.getAllByRole('textbox')[0], transferAmount);
		userEvent.click(screen.getByRole('button'));
		// then
		expect(screen.getAllByText(`You have: €${availableAmountAfterTransaction}`)[0]).toBeInTheDocument();
	});
});
