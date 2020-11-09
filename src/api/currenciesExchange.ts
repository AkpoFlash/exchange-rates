import { ExchangeRates } from '../types/currency';

export const OPEN_EXCHANGE_API = `https://openexchangerates.org/api/latest.json?app_id=${process.env.REACT_APP_OPEN_EXCHANGE_API_KEY}`;

export const getCurrenciesExchange = (): Promise<ExchangeRates> => {
	return fetch(OPEN_EXCHANGE_API)
		.then(res => res.json())
		.then(res => res.rates);
};
