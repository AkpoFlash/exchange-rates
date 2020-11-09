import React from 'react';

import './ConfirmExchangeButton.css';

export interface ConfirmExchangeButtonProps {
	onExchange: () => void;
}

export const ConfirmExchangeButton = (props: ConfirmExchangeButtonProps) => {
	const { onExchange } = props;
	return <input className='exchange-button' type='button' value='Exchange' onClick={onExchange} />;
};
