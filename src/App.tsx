import React from 'react';

import './App.css';

import { ExchangePanel } from './components/ExchangePanel/ExchangePanel';
import { USERS_ACCOUNTS } from './accounts/accounts';

function App() {
	return (
		<div className='app'>
			<header className='app-header'>
				<ExchangePanel accounts={USERS_ACCOUNTS} />
			</header>
		</div>
	);
}

export default App;
