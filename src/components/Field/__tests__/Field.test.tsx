import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Field } from '../Field';
import { Currency, CurrencyToSign } from '../../../enums/currency';

const renderField = ({
	currency = Currency.USD,
	amount = '1050.25',
	value = '123.20',
	currentAccountIndex = 1,
	onChangeValue = jest.fn(),
	onChangeAccount = jest.fn(),
	isAllowed = jest.fn(),
	description = '',
	isSecond = false,
}) => {
	render(
		<Field
			currency={currency}
			amount={amount}
			value={value}
			currentAccountIndex={currentAccountIndex}
			onChangeValue={onChangeValue}
			onChangeAccount={onChangeAccount}
			isAllowed={isAllowed}
			description={description}
			isSecond={isSecond}
		/>
	);
	return { onChangeValue, onChangeAccount, isAllowed };
};

describe('Field', () => {
	it('Should render', () => {
		// given
		const currency = Currency.EUR;
		const amount = '999.99';
		// when
		renderField({ amount, currency });
		// then
		expect(screen.getByText(`You have: ${CurrencyToSign[currency]}${amount}`)).toBeInTheDocument();
	});

	it('Should invoke callback for change current account', () => {
		// given
		const currentAccountIndex = 1;
		const newAccountIndex = 2;
		// when
		const { onChangeAccount } = renderField({ currentAccountIndex });
		fireEvent.click(screen.getAllByRole('listitem')[newAccountIndex], newAccountIndex);
		// then
		expect(onChangeAccount).toBeCalledTimes(1);
		expect(onChangeAccount).toBeCalledWith(newAccountIndex);
	});

	it('Should invoke callback after change input value', () => {
		// given
		const value = '122.2';
		const newValue = '122.22';
		// when
		const { onChangeValue } = renderField({ value });
		fireEvent.change(screen.getByRole('textbox'), { target: { value: newValue } });
		// then
		expect(onChangeValue).toBeCalledTimes(1);
	});

	it('Should invoke callback for check input field', () => {
		// given
		const value = '77.8';
		const newValue = '77.88';
		// when
		const { isAllowed } = renderField({ value });
		fireEvent.change(screen.getByRole('textbox'), { target: { value: newValue } });
		// then
		expect(isAllowed).toBeCalledTimes(1);
	});
});
