import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { ConfirmExchangeButton } from '../ConfirmExchangeButton';

describe('ConfirmExchangeButton', () => {
	it('Should render', () => {
		// given
		const onExchange = jest.fn();
		// when
		render(<ConfirmExchangeButton onExchange={onExchange} />);
		// then
		expect(screen.getByDisplayValue('Exchange')).toBeInTheDocument();
	});

	it('Should invoke callback', () => {
		// given
		const onExchange = jest.fn();
		// when
		render(<ConfirmExchangeButton onExchange={onExchange} />);
		fireEvent.click(screen.getByDisplayValue('Exchange'));
		// then
		expect(onExchange).toBeCalledTimes(1);
	});
});
