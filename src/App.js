import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Sidenav from './shared/Sidenav';
import { GlobalStyles } from './styles/GlobalStyles';
import { PageWithNavbar } from './styles/Page';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Switch>
				<Route exact path='/'>
					<Sidenav />
					<PageWithNavbar>
						<Dashboard />
					</PageWithNavbar>
				</Route>
			</Switch>
		</>
	);
};

export default App;
