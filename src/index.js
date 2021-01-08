import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './shared/context/reducer';
import { StateProvider } from './shared/context/StateProvider';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StateProvider>
	</React.StrictMode>,
	document.getElementById('react-root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorker.register()
