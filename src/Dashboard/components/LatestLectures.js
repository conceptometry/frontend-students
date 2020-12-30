import { useEffect, useState } from 'react';
import { useStateValue } from '../../shared/context/StateProvider';
import LectureList from '../../shared/Lists/Lecture';
import { LoadingCircular } from '../../shared/Loading';
import getResource from '../../shared/Requests/getResource';
import { LatestLecturesContainer, ViewAllBtn } from '../styles/LatestLectures';

const LatestLectures = () => {
	const [{ token }] = useStateValue();
	const [lectures, setLectures] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	useEffect(() => {
		setLoading(true);
		const url = `${process.env.REACT_APP_API_URI}/lectures?limit=5&page=1`;
		const headers = {
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`,
		};

		getResource(url, headers, setLectures, setLoading, setError);
	}, [token]);
	return (
		<LatestLecturesContainer>
			{error && <p>{error}</p>}
			{!error && (
				<>
					<h3 style={{ textAlign: 'center' }}>Lectures</h3>
					{loading === true ? (
						<>
							<LoadingCircular />
						</>
					) : (
						<>
							{lectures.map((l) => (
								<>
									<LectureList
										key={l._id.toString()}
										title={l.name}
										eventTime={l.eventTime}
										duration={l.duration}
										id={l._id}
									/>
								</>
							))}
							<ViewAllBtn to='/lectures'>View all</ViewAllBtn>
						</>
					)}
				</>
			)}
		</LatestLecturesContainer>
	);
};

export default LatestLectures;
