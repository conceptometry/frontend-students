import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageWithNavbar } from './styles/Page';
import Redirects from './Redirects';
import Sidenav from './shared/Sidenav';
import { LoadingScreen } from './shared/Loading';

const Routes = () => {
	const Dashboard = lazy(() => import('./Dashboard'));
	const Assignments = lazy(() => import('./Assignments'));
	const Lectures = lazy(() => import('./Lectures'));
	const Profile = lazy(() => import('./Profile'));
	const NotFound = lazy(() => import('./shared/404'));

	return (
		<Suspense fallback={<LoadingScreen />}>
			<Switch>
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

				<Redirects />
			</Switch>
		</Suspense>
	);
};

export default Routes;
