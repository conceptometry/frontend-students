import {
	DashboardIntroduction,
	DashboardIntroductionHeading,
	DashboardIntroductionParagraph,
} from '../styles/Dashboard';
import { useStateValue } from '../../shared/context/StateProvider';
import { useEffect, useState } from 'react';
import { LoadingCircular } from '../../shared/Loading';

const Introduction = () => {
	const [{ user, token }] = useStateValue();
	const [lecture, setLecture] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const url = `${process.env.REACT_APP_API_URI}/lectures/next`;
		const headers = {
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`,
		};
		const options = {
			method: 'GET',
			headers,
		};
		fetch(url, options)
			.then((promise) => promise.json())
			.then((data) => {
				if (data.success === true) {
					setLecture(data.message);
					setError('');
				} else {
					setLecture([]);
					setError('Something went wrong, 400');
				}

				setLoading(false);
			})
			.catch((err) => {
				console.log('Error: ', err);
				setError('Failed to get data, 500');
			});
	}, [token]);

	const lecturetime = new Date(lecture?.eventTime);
	let weekday = [];
	weekday[0] = 'Sunday';
	weekday[1] = 'Monday';
	weekday[2] = 'Tuesday';
	weekday[3] = 'Wednesday';
	weekday[4] = 'Thursday';
	weekday[5] = 'Friday';
	weekday[6] = 'Saturday';

	const d = weekday[lecturetime.getDay()];

	let month = [];
	month[0] = 'January';
	month[1] = 'February';
	month[2] = 'March';
	month[3] = 'April';
	month[4] = 'May';
	month[5] = 'June';
	month[6] = 'July';
	month[7] = 'August';
	month[8] = 'September';
	month[9] = 'October';
	month[10] = 'November';
	month[11] = 'December';

	const m = month[lecturetime.getMonth()];

	const formattedDate =
		lecturetime.getDate() +
		' ' +
		m +
		' ' +
		lecturetime.getFullYear() +
		', ' +
		d;
	return (
		<DashboardIntroduction>
			{error && <p>{error}</p>}
			{!error && (
				<>
					{loading === true ? (
						<LoadingCircular />
					) : (
						<>
							<DashboardIntroductionHeading>
								Hello{' '}
								<span style={{ textTransform: 'capitalize' }}>
									{user?.name}
								</span>
							</DashboardIntroductionHeading>
							<DashboardIntroductionParagraph>
								You have your next lecture on <br /> {formattedDate}
							</DashboardIntroductionParagraph>
						</>
					)}
				</>
			)}
		</DashboardIntroduction>
	);
};

export default Introduction;
