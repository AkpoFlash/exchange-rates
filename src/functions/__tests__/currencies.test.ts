import { addCurrency, convertFrom, formatToCurrency, getExchangeRate, convertTo, subtractCurrency } from '../currencies';
import {
	ADD_CURRENCY_MOCK,
	CONVERT_FROM_BY_MOCK,
	EXCHANGE_RATES_MOCK,
	CONVERT_TO_BY_MOCK,
	SUBTRACT_CURRENCY_MOCK,
	FORMAT_CURRENCY_MOCK,
} from './resources/currencies.resource';
import { Currency } from '../../enums/currency';
import { ExchangeRates } from '../../types/currency';

describe('Currencies operations', () => {
	it.each(CONVERT_TO_BY_MOCK)(
		'Should convert to by rate %p',
		(rate: string, firstNumber: number | string, secondNumber: number | string, expectedResult: string) => {
			// when
			const result = convertTo(firstNumber, secondNumber);
			// then
			expect(result).toBe(expectedResult);
		}
	);

	it.each(CONVERT_FROM_BY_MOCK)(
		'Should convert from by rate %p',
		(rate: string, firstNumber: number | string, secondNumber: number | string, expectedResult: string) => {
			// when
			const result = convertFrom(firstNumber, secondNumber);
			// then
			expect(result).toBe(expectedResult);
		}
	);

	it.each(ADD_CURRENCY_MOCK)(
		'Should add currency %p',
		(add: string, firstNumber: number | string, secondNumber: number | string, expectedResult: string) => {
			// when
			const result = addCurrency(firstNumber, secondNumber);
			// then
			expect(result).toBe(expectedResult);
		}
	);

	it.each(SUBTRACT_CURRENCY_MOCK)(
		'Should subtract currency %p',
		(subtract: string, firstNumber: number | string, secondNumber: number | string, expectedResult: string) => {
			// when
			const result = subtractCurrency(firstNumber, secondNumber);
			// then
			expect(result).toBe(expectedResult);
		}
	);

	it.each(FORMAT_CURRENCY_MOCK)(
		'Should formatted from %p to currency format',
		(format: string, value: number | string, expectedResult: string) => {
			// when
			const result = formatToCurrency(value);
			// then
			expect(result).toBe(expectedResult);
		}
	);

	it.each(EXCHANGE_RATES_MOCK)(
		'Should get correct exchange rate for %p',
		(add: string, from: Currency, to: Currency, exchangeRatesTable: ExchangeRates, expectedResult: number) => {
			// when
			const result = parseFloat(getExchangeRate(from, to, exchangeRatesTable).toFixed(2));
			// then
			expect(result).toBe(expectedResult);
		}
	);
});
