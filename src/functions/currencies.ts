import currency from 'currency.js';

import { Currency } from '../enums/currency';
import { ExchangeRates } from '../types/currency';

export const ZERO_RESULT = '';

export const isZero = (value: string | number): boolean => !value || value === '0' || value === '0.00';

export const convertTo = (value: string | number, rate: string | number): string =>
	value && !isZero(value) ? currency(value).multiply(rate).toString() : ZERO_RESULT;

export const convertFrom = (value: string | number, rate: string | number): string =>
	value && !isZero(value) ? currency(value).divide(rate).toString() : ZERO_RESULT;

export const addCurrency = (value: string | number, addAmount: string | number): string => {
	const result = currency(value).add(addAmount).toString();
	return isZero(result) ? ZERO_RESULT : result;
};

export const subtractCurrency = (value: string | number, subtractAmount: string | number): string => {
	const result = currency(value).subtract(subtractAmount).toString();
	return isZero(result) ? ZERO_RESULT : result;
};

export const formatToCurrency = (value: string | number): string => currency(value).toString();

export const getExchangeRate = (
	fromCurrency: Currency,
	toCurrency: Currency,
	exchangeRatesBasedUSD: ExchangeRates
): number => {
	const rateFrom = exchangeRatesBasedUSD[fromCurrency];
	const rateTo = exchangeRatesBasedUSD[toCurrency];

	return rateTo / rateFrom;
};
