import { useEffect, useState } from 'react';

import { getCurrenciesExchange } from '../api/currenciesExchange';
import { POLLING_INTERVAL_IN_MS } from '../utils/constants';
import { getExchangeRate } from '../functions/currencies';
import { ExchangeRates } from '../types/currency';
import { AccountEntity } from '../types/account';

export interface UseExchangeRateProps {
	fromIndex: number;
	toIndex: number;
	accountFrom: AccountEntity;
	accountTo: AccountEntity;
}

export const useExchangeRate = (props: UseExchangeRateProps) => {
	const { fromIndex, toIndex, accountFrom, accountTo } = props;
	const [exchangeRate, setExchangeRate] = useState(1);
	const [exchangeRatesTable, setExchangeRatesTable] = useState({} as ExchangeRates);

	useEffect(() => {
		getCurrenciesExchange().then(res => setExchangeRatesTable(res));

		const refreshCurrenciesExchangeInterval = setInterval(
			() => getCurrenciesExchange().then(res => setExchangeRatesTable(res)),
			POLLING_INTERVAL_IN_MS
		);

		return () => clearInterval(refreshCurrenciesExchangeInterval);
	}, [fromIndex, toIndex]);

	useEffect(() => {
		setExchangeRate(getExchangeRate(accountFrom.currency, accountTo.currency, exchangeRatesTable));
	}, [accountFrom, accountTo, exchangeRatesTable]);

	return exchangeRate;
};
