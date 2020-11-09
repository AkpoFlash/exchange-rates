export enum Currency {
	GBP = 'GBP',
	USD = 'USD',
	EUR = 'EUR',
}

export enum CurrencyToSign {
	GBP = '£',
	USD = '$',
	EUR = '€',
}

export type ExchangeRates = {
	GBP: number;
	USD: number;
	EUR: number;
};
