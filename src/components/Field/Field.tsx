import React, { FormEvent } from 'react';
import cn from 'classnames';
import NumberFormat, { NumberFormatValues } from 'react-number-format';

import './Field.css';

import { USERS_ACCOUNTS } from '../../accounts/accounts';
import { AccountEntity } from '../../types/account';
import { CurrencyToSign } from '../../enums/currency';
import { formatToCurrency } from '../../functions/currencies';

export interface FieldProps extends AccountEntity {
	onChangeAccount: (index: number) => void;
	currentAccountIndex: number;
	onChangeValue: (value: string) => void;
	value: string;

	isAllowed?: (value: number) => boolean;
	description?: string;
	isSecond?: boolean;
}

export const Field = (props: FieldProps) => {
	const {
		currency,
		amount,
		onChangeAccount,
		onChangeValue,
		currentAccountIndex,
		isSecond,
		description,
		isAllowed = () => true,
		value = '',
	} = props;

	const changeHandler = (e: FormEvent<HTMLInputElement>) => {
		const value = parseFloat(e.currentTarget.value);
		const result = isNaN(value) ? '' : Math.abs(value).toString();
		onChangeValue(result);
	};

	return (
		<div className={cn('exchange-field', { 'exchange-field--second': isSecond })}>
			<div className='exchange-field__description'>
				<label className='exchange-field__label' htmlFor={currency}>
					{currency}
				</label>
				<span className='exchange-field__current_balance'>
					You have: {CurrencyToSign[currency]}
					{formatToCurrency(amount)}
					<span>{description}</span>
				</span>
			</div>
			<ul className='exchange-field__list'>
				{USERS_ACCOUNTS.map((item, index) => (
					<li
						key={item.currency}
						className={cn('list__item', { 'list__item--selected': currentAccountIndex === index })}
						onClick={() => onChangeAccount(index)}
					/>
				))}
			</ul>
			<NumberFormat
				className='exchange-field__input'
				decimalSeparator={'.'}
				prefix={isSecond ? '+' : '-'}
				decimalScale={2}
				value={value}
				allowNegative={false}
				onChange={changeHandler}
				isAllowed={(values: NumberFormatValues) =>
					isAllowed(values.floatValue as number) && (!values.floatValue || Math.abs(values.floatValue) <= +amount)
				}
			/>
		</div>
	);
};
