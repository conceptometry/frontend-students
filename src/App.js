import { lazy, Suspense, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useStateValue } from './shared/context/StateProvider';
import { LoadingScreen } from './shared/Loading';
import Sidenav from './shared/Sidenav';
import {
	AppContainer,
	BiggerScreenPageContainer,
	GlobalStyles,
} from './styles/GlobalStyles';
import { PageWithNavbar } from './styles/Page';

const App = () => {
	const Dashboard = lazy(() => import('./Dashboard'));
	const Assignments = lazy(() => import('./Assignments'));
	const Lectures = lazy(() => import('./Lectures'));
	const Profile = lazy(() => import('./Profile'));
	const NotFound = lazy(() => import('./shared/404'));
	const BiggerScreenPage = lazy(() => import('./shared/BiggerScreenPage'));

	// Main Logic
	const [{ user, token, error }] = useStateValue();
	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user));
	}, [user]);
	useEffect(() => {
		localStorage.setItem('token', JSON.stringify(token));
	}, [token]);
	return (
		<>
			<Suspense fallback={<LoadingScreen />}>
				<BiggerScreenPageContainer>
					<BiggerScreenPage />
				</BiggerScreenPageContainer>
				<AppContainer>
					<>
						<p className='text-center'>{error && error}</p>
						<GlobalStyles />
						<Switch>
							{/* Assignments Page */}
							<Route
								exact
								path='/assignments/page/:page'
								render={({ match }) => (
									<>
										<Sidenav />
										<PageWithNavbar>
											<Assignments match={match} />
										</PageWithNavbar>
									</>
								)}
							/>

							{/* Lectures Page */}
							<Route
								exact
								path='/lectures/page/:page'
								render={({ match }) => (
									<>
										<Sidenav />
										<PageWithNavbar>
											<Lectures match={match} />
										</PageWithNavbar>
									</>
								)}
							/>

							{/* Home Page */}
							<Route exact path='/'>
								<Sidenav />
								<PageWithNavbar>
									<Dashboard />
								</PageWithNavbar>
							</Route>
							{/* Profile Page */}
							<Route exact path='/profile'>
								<Sidenav />
								<PageWithNavbar>
									<Profile />
								</PageWithNavbar>
							</Route>
							{/* 404 Page */}
							<Route exact path='/404'>
								<NotFound />
							</Route>

							{/* Redirect to 404 page if no resource is found */}
							<Route exact path='*'>
								<Redirect to='/404' />
							</Route>
						</Switch>
					</>
				</AppContainer>
			</Suspense>
		</>
	);
};

export default App;
