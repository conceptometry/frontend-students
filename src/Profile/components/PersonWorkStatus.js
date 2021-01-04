import { useEffect, useState } from 'react';
import { useStateValue } from '../../shared/context/StateProvider';
import { LoadingCircular } from '../../shared/Loading';
import getResource from '../../shared/Requests/getResource';
import { PersonWorkStatusContainer } from '../styles/PersonWorkStatus';

const PersonWorkStatus = () => {
	const [{ token }] = useStateValue();
	const [lecture, setLecture] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const url = `${process.env.REACT_APP_API_URI}/lectures/next`;
		const headers = {
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`,
		};
		getResource(url, headers, setLecture, setLoading, setError);
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
		<PersonWorkStatusContainer>
			{error && <p>{error}</p>}
			{!error && (
				<>
					{loading === true ? (
						<LoadingCircular />
					) : (
						<>
							<p>
								You have <strong>5</strong> assignments pending
							</p>
							<p>You have your next lecture on {formattedDate}</p>
						</>
					)}
				</>
			)}
		</PersonWorkStatusContainer>
	);
};

export default PersonWorkStatus;
