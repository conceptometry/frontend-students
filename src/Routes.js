import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PageWithNavbar } from './styles/Page';
import Redirects from './Redirects';
import Sidenav from './shared/Sidenav';
import { LoadingScreen } from './shared/Loading';
import { useStateValue } from './shared/context/StateProvider';

const PrivateRoute = ({ children, ...rest }) => {
	const [{ token }] = useStateValue();

	return (
		<Route
			{...rest}
			render={({ location }) => {
				return token !== null ? (
					children
				) : (
					<Redirect to={`/login?to=${location.pathname}`} />
				);
			}}
		/>
	);
};

const NotPrivateRoute = ({ children, ...rest }) => {
	const [{ token }] = useStateValue();

	return (
		<Route
			{...rest}
			render={({ location }) => {
				return token !== null ? <Redirect to={`/`} /> : children;
			}}
		/>
	);
};

const Routes = () => {
	const Dashboard = lazy(() => import('./Dashboard'));
	const Assignments = lazy(() => import('./Assignments'));
	const Lectures = lazy(() => import('./Lectures'));
	const Profile = lazy(() => import('./Profile'));
	const NotFound = lazy(() => import('./shared/404'));
	const Login = lazy(() => import('./Authentication/pages/Login'));
	const SingleAssignment = lazy(() => import('./SingleAssignment'));
	const SingleLecture = lazy(() => import('./SingleLecture'));

	const [{ token }] = useStateValue();
	return (
		<Suspense fallback={<LoadingScreen />}>
			<Switch>
				{/* 404 Page */}
				<Route exact path='/404'>
					<NotFound />
				</Route>

				{/* Login Page */}
				<NotPrivateRoute exact path='/login'>
					<Login />
				</NotPrivateRoute>

				{/* Assignments Page */}
				<Route
					exact
					path='/assignments/:id'
					render={({ match, location }) => {
						return token !== null ? (
							<>
								<Sidenav />
								<PageWithNavbar>
									<SingleAssignment match={match} />
								</PageWithNavbar>
							</>
						) : (
							<Redirect to={`/login?to=${location.pathname}`} />
						);
					}}
				/>

				<Route
					exact
					path='/lectures/:id'
					render={({ match, location }) => {
						return token !== null ? (
							<>
								<Sidenav />
								<PageWithNavbar>
									<SingleLecture match={match} />
								</PageWithNavbar>
							</>
						) : (
							<Redirect to={`/login?to=${location.pathname}`} />
						);
					}}
				/>

				{/* Lectures Page */}
				<Route
					exact
					path='/lectures/page/:page'
					render={({ match, location }) => {
						return token !== null ? (
							<>
								<Sidenav />
								<PageWithNavbar>
									<Lectures match={match} />
								</PageWithNavbar>
							</>
						) : (
							<Redirect to={`/login?to=${location.pathname}`} />
						);
					}}
				/>

				{/* Assignments Page */}
				<Route
					exact
					path='/assignments/page/:page'
					render={({ match, location }) => {
						return token !== null ? (
							<>
								<Sidenav />
								<PageWithNavbar>
									<Assignments match={match} />
								</PageWithNavbar>
							</>
						) : (
							<Redirect to={`/login?to=${location.pathname}`} />
						);
					}}
				/>

				{/* Home Page */}
				<PrivateRoute exact path='/'>
					<Sidenav />
					<PageWithNavbar>
						<Dashboard />
					</PageWithNavbar>
				</PrivateRoute>

				{/* Profile Page */}
				<PrivateRoute exact path='/profile'>
					<Sidenav />
					<PageWithNavbar>
						<Profile />
					</PageWithNavbar>
				</PrivateRoute>

				<Redirects />
			</Switch>
		</Suspense>
	);
};

export default Routes;
