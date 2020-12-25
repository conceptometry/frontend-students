import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidenav from './shared/Sidenav';
import { GlobalStyles } from './styles/GlobalStyles';
import { PageWithNavbar } from './styles/Page';

const App = () => {
	const Dashboard = lazy(() => import('./Dashboard'));
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<GlobalStyles />
				<Switch>
					<Route exact path='/'>
						<Sidenav />
						<PageWithNavbar>
							<Dashboard />
						</PageWithNavbar>
					</Route>
				</Switch>
			</Suspense>
		</>
	);
};

export default App;
