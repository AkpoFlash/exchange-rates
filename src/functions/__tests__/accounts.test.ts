import { getCurrencySymbolByAccountIndex } from '../accounts';
import { CurrencyToSign } from '../../enums/currency';

describe('getCurrencySymbolByAccountIndex', () => {
	it.each([
		['£', 0, CurrencyToSign.GBP],
		['$', 1, CurrencyToSign.USD],
		['€', 2, CurrencyToSign.EUR],
	])('Should return %p currency', (currency: string, accountIndex: number, expectCurrency: CurrencyToSign) => {
		// when
		const result = getCurrencySymbolByAccountIndex(accountIndex);
		// then
		expect(result).toBe(expectCurrency);
	});
});
