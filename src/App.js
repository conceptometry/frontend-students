import { lazy, Suspense, useEffect, useState } from 'react';
import Routes from './Routes';
import { useStateValue } from './shared/context/StateProvider';
import { LoadingScreen } from './shared/Loading';
import {
	AppContainer,
	BiggerScreenPageContainer,
	GlobalStyles,
} from './styles/GlobalStyles';

const App = () => {
	const BiggerScreenPage = lazy(() => import('./shared/BiggerScreenPage'));

	const [error, setError] = useState('');

	// Main Logic
	const [{ user, token }, dispatch] = useStateValue();
	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user));
	}, [user]);
	useEffect(() => {
		localStorage.setItem('token', JSON.stringify(token));
	}, [token]);
	useEffect(() => {
		const getUser = async () => {
			if (token !== null) {
				const url = `${process.env.REACT_APP_API_URI}/users/me`;
				const headers = {
					'Content-Type': 'application/json',
					authorization: `Bearer ${token}`,
				};
				const options = {
					method: 'GET',
					headers,
				};
				await fetch(url, options)
					.then((response) => response.json())
					.then((data) => {
						if (data.success === false) {
							setError(data.message);
						} else {
							setError('');
							dispatch({
								type: 'SET_USER',
								user: data.message,
								token,
							});
						}
					})
					.catch((err) => {
						console.log(err);
						setError('Something went wrong, 500');
					});
			}
		};

		getUser();
	}, [token, dispatch]);
	return (
		<>
			<Suspense fallback={<LoadingScreen />}>
				<GlobalStyles />
				{error && <p>{error}</p>}
				{!error && (
					<>
						<BiggerScreenPageContainer>
							<BiggerScreenPage />
						</BiggerScreenPageContainer>
						<AppContainer>
							<>
								<Routes />
							</>
						</AppContainer>
					</>
				)}
			</Suspense>
		</>
	);
};

export default App;
