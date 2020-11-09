import { CurrencyToSign } from '../enums/currency';
import { USERS_ACCOUNTS } from '../accounts/accounts';

export const getCurrencySymbolByAccountIndex = (index: number): CurrencyToSign =>
	CurrencyToSign[USERS_ACCOUNTS[index].currency];
