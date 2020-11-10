import React, { useEffect, useState } from 'react';

import { Account } from '../../types/account';
import { ConfirmExchangeButton } from '../ConfirmExchangeButton/ConfirmExchangeButton';
import { Field } from '../Field/Field';
import { addCurrency, convertFrom, formatToCurrency, convertTo, subtractCurrency } from '../../functions/currencies';
import { getCurrencySymbolByAccountIndex } from '../../functions/accounts';
import { useExchangeRate } from '../../hooks/useExchangeRate';

export interface ExchangePanelProps {
	accounts: Account;
}

export const ExchangePanel = (props: ExchangePanelProps) => {
	const { accounts } = props;

	const [fromIndex, setFromIndex] = useState(0);
	const [toIndex, setToIndex] = useState(1);

	const [fromValue, setFromValue] = useState('');
	const [toValue, setToValue] = useState('');

	const [accountFrom, setAccountFrom] = useState(accounts[fromIndex]);
	const [accountTo, setAccountTo] = useState(accounts[toIndex]);
	const [accountStore, setAccountStore] = useState(accounts);

	const exchangeRate = useExchangeRate({ fromIndex, toIndex, accountFrom, accountTo });

	useEffect(() => {
		setToValue(convertTo(fromValue, exchangeRate));
	}, [exchangeRate]);

	const cleanUp = (): void => {
		setFromValue('');
		setToValue('');
	};

	const changeAccount = (setIndex: Function, setAccount: Function) => (index: number): void => {
		setIndex(index);
		setAccount(accountStore[index]);
		cleanUp();
	};

	const changeFromExchangeValue = (value: string): void => {
		setFromValue(value);
		setToValue(convertTo(value, exchangeRate));
	};

	const changeToExchangeValue = (value: string): void => {
		setToValue(value);
		setFromValue(convertFrom(value, exchangeRate));
	};

	const exchange = (): void => {
		const store = [...accountStore];

		store[fromIndex].amount = subtractCurrency(store[fromIndex].amount, fromValue);
		store[toIndex].amount = addCurrency(store[toIndex].amount, toValue);

		setAccountStore(store);
		cleanUp();
	};

	const currentExchangeRateFrom = `${getCurrencySymbolByAccountIndex(fromIndex)}${formatToCurrency(1 / exchangeRate)}`;
	const currentExchangeRateTo = `${getCurrencySymbolByAccountIndex(toIndex)}${formatToCurrency(1)}`;
	const currentExchangeRateString = `(${currentExchangeRateTo} = ${currentExchangeRateFrom})`;

	const isEnoughTransferMoney = (value: number): boolean => {
		return parseFloat(subtractCurrency(accountFrom.amount, convertTo(value, 1 / exchangeRate))) >= 0;
	};

	return (
		<main>
			<Field
				currency={accountFrom.currency}
				amount={accountFrom.amount}
				currentAccountIndex={fromIndex}
				value={fromValue}
				onChangeValue={changeFromExchangeValue}
				onChangeAccount={changeAccount(setFromIndex, setAccountFrom)}
			/>
			<Field
				currency={accountTo.currency}
				amount={accountTo.amount}
				description={currentExchangeRateString}
				currentAccountIndex={toIndex}
				value={toValue}
				onChangeValue={changeToExchangeValue}
				onChangeAccount={changeAccount(setToIndex, setAccountTo)}
				isAllowed={isEnoughTransferMoney}
				isSecond
			/>
			<ConfirmExchangeButton onExchange={exchange} />
		</main>
	);
};
