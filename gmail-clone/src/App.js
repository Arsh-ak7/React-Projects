import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='app'>
				<Header />
				<div className='app-body'>
					<Sidebar />
					<Switch>
						<Route path='/mail'>
							<Mail />
						</Route>
						<Route path='/'>
							<EmailList />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;