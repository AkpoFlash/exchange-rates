import { Currency } from './currency';

export type AccountEntity = {
	currency: Currency;
	amount: string;
};

export type Account = AccountEntity[];
