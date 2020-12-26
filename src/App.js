import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
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
	const NotFound = lazy(() => import('./shared/404'));
	const BiggerScreenPage = lazy(() => import('./shared/BiggerScreenPage'));
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<BiggerScreenPageContainer>
					<BiggerScreenPage />
				</BiggerScreenPageContainer>
				<AppContainer>
					<>
						<GlobalStyles />
						<Switch>
							{/* Home Page */}
							<Route exact path='/'>
								<Sidenav />
								<PageWithNavbar>
									<Dashboard />
								</PageWithNavbar>
							</Route>
							{/* Assignments Page */}
							<Route exact path='/assignments'>
								<Sidenav />
								<PageWithNavbar>
									<Assignments />
								</PageWithNavbar>
							</Route>
							{/* Lectures Page */}
							<Route exact path='/lectures'>
								<Sidenav />
								<PageWithNavbar>
									<Lectures />
								</PageWithNavbar>
							</Route>
							{/* Profile Page */}
							<Route exact path='/profile'>
								<Sidenav />
								<PageWithNavbar>
									<Dashboard />
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
