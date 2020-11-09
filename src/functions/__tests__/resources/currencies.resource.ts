import { Currency } from '../../../enums/currency';
import { ExchangeRates } from '../../../types/currency';

type EACH_ARGUMENT = [string, string | number, string | number, string];

export const CONVERT_TO_BY_MOCK: EACH_ARGUMENT[] = [
	['six', 12, 6, '72.00'],
	['twenty', 0, 20, ''],
	['five', -10, 5, '-50.00'],
	['minus one', -10, -1, '10.00'],
	['one and 1/9', 5, 1.111111, '5.56'],
	['six', '12', '6', '72.00'],
	['twenty', '0', '20', ''],
	['five', '-10', '5', '-50.00'],
	['minus one', '-10', '-1', '10.00'],
	['one and 1/9', '5', '1.111111', '5.56'],
];

export const CONVERT_FROM_BY_MOCK: EACH_ARGUMENT[] = [
	['six', 12, 6, '2.00'],
	['twenty', 0, 20, ''],
	['five', -10, 5, '-2.00'],
	['minus one', -10, -1, '10.00'],
	['two and 1/4', 7, 2.25, '3.11'],
	['six', '12', '6', '2.00'],
	['twenty', '0', '20', ''],
	['five', '-10', '5', '-2.00'],
	['minus one', '-10', '-1', '10.00'],
	['two and 1/4', '7', '2.25', '3.11'],
];

export const ADD_CURRENCY_MOCK: EACH_ARGUMENT[] = [
	['six', 12, 6, '18.00'],
	['six', 0, 6, '6.00'],
	['twenty', -20, 20, ''],
	['five', -10, 5, '-5.00'],
	['minus one', -10, -1, '-11.00'],
	['two and 1/9', 7, 2.11111, '9.11'],
	['six', '12', '6', '18.00'],
	['six', '0', '6', '6.00'],
	['twenty', '-20', '20', ''],
	['five', '-10', '-5', '-15.00'],
	['minus one', '-10', '-1', '-11.00'],
	['two and 1/9', '7', '2.11', '9.11'],
];

export const SUBTRACT_CURRENCY_MOCK: EACH_ARGUMENT[] = [
	['six', 12, 6, '6.00'],
	['six', 0, 6, '-6.00'],
	['twenty', 20, 20, ''],
	['five', -10, 5, '-15.00'],
	['minus one', -10, -1, '-9.00'],
	['two and 1/9', 7, 2.11111, '4.89'],
	['six', '12', '6', '6.00'],
	['six', '0', '6', '-6.00'],
	['twenty', '20', '20', ''],
	['five', '-10', '5', '-15.00'],
	['minus one', '-10', '-1', '-9.00'],
	['two and 1/9', '7', '2.11', '4.89'],
];

type FORMAT_CURRENCY_ARGUMENTS = [string, number | string, string];

export const FORMAT_CURRENCY_MOCK: FORMAT_CURRENCY_ARGUMENTS[] = [
	['202.5431', 202.5431, '202.54'],
	['100', 100, '100.00'],
	['-100', -100, '-100.00'],
	['0', 0, '0.00'],
	['202.5431', '202.5431', '202.54'],
	['100', '100', '100.00'],
	['-100', '-100', '-100.00'],
	['0', '0', '0.00'],
];

type EXCHANGE_RATES_ARGUMENTS = [string, Currency, Currency, ExchangeRates, number];
const EXCHANGE_RATES_TABLE_MOCK: ExchangeRates = { USD: 1, GBP: 0.76, EUR: 0.84 };

export const EXCHANGE_RATES_MOCK: EXCHANGE_RATES_ARGUMENTS[] = [
	['USD -> GBP', Currency.USD, Currency.GBP, EXCHANGE_RATES_TABLE_MOCK, 0.76],
	['USD -> EUR', Currency.USD, Currency.EUR, EXCHANGE_RATES_TABLE_MOCK, 0.84],
	['USD -> USD', Currency.USD, Currency.USD, EXCHANGE_RATES_TABLE_MOCK, 1],
	['EUR -> GBP', Currency.EUR, Currency.GBP, EXCHANGE_RATES_TABLE_MOCK, 0.9],
	['EUR -> EUR', Currency.EUR, Currency.EUR, EXCHANGE_RATES_TABLE_MOCK, 1],
	['EUR -> USD', Currency.EUR, Currency.USD, EXCHANGE_RATES_TABLE_MOCK, 1.19],
	['GBP -> GBP', Currency.GBP, Currency.GBP, EXCHANGE_RATES_TABLE_MOCK, 1],
	['GBP -> EUR', Currency.GBP, Currency.EUR, EXCHANGE_RATES_TABLE_MOCK, 1.11],
	['GBP -> USD', Currency.GBP, Currency.USD, EXCHANGE_RATES_TABLE_MOCK, 1.32],
];
