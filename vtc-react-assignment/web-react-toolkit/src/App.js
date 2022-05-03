import React from 'react';
import logo from './logo.svg';
import { HomePage } from './pages/Homepage';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
function Counter2() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<Counter />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<span>
					<span>Learn </span>
					<a
						className='App-link'
						href='https://reactjs.org/'
						target='_blank'
						rel='noopener noreferrer'>
						React
					</a>
					<span>, </span>
					<a
						className='App-link'
						href='https://redux.js.org/'
						target='_blank'
						rel='noopener noreferrer'>
						Redux
					</a>
					<span>, </span>
					<a
						className='App-link'
						href='https://redux-toolkit.js.org/'
						target='_blank'
						rel='noopener noreferrer'>
						Redux Toolkit
					</a>
					,<span> and </span>
					<a
						className='App-link'
						href='https://react-redux.js.org/'
						target='_blank'
						rel='noopener noreferrer'>
						React Redux
					</a>
				</span>
			</header>
		</div>
	);
}

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/counter' element={<Counter2 />} />
		</Routes>
	);
}

export default App;
