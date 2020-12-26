import { Link } from 'react-router-dom';
import './css/404.css';

const NotFound = () => {
	return (
		<div id='404'>
			<div className='fof'>
				<h1>Error 404</h1>
				<p style={{ paddingBottom: 10, maxWidth: 450 }}>
					We think you have lost your way, click on the button below to go back
					to home
				</p>
				<Link to='/' className='homeLink'>
					Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
