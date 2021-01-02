import { Redirect, Route, Switch } from 'react-router-dom';

const Redirects = () => {
	return (
		<>
			<Switch>
				{/* Redirect to assignments page */}
				<Route exact path='/assignments'>
					<Redirect to='/assignments/page/1' />
				</Route>

				{/* Redirect to lectures page */}
				<Route exact path='/lectures'>
					<Redirect to='/lectures/page/1' />
				</Route>

				{/* Redirect to 404 page if no resource is found */}
				<Route exact path='*'>
					<Redirect to='/404' />
				</Route>
			</Switch>
		</>
	);
};

export default Redirects;
