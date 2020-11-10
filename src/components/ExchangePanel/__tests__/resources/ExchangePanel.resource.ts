import { Account } from '../../../../types/account';
import { Currency } from '../../../../enums/currency';

export const USERS_ACCOUNTS_MOCK: Account = [
	{
		currency: Currency.GBP,
		amount: '1040.5',
	},
	{
		currency: Currency.USD,
		amount: '550.24',
	},
	{
		currency: Currency.EUR,
		amount: '230.12',
	},
];
