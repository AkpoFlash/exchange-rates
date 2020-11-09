import { Currency } from '../enums/currency';

export type AccountEntity = {
	currency: Currency;
	amount: string;
};

export type Account = AccountEntity[];
