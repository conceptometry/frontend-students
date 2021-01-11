import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../shared/context/StateProvider';
import { LoadingCircular } from '../shared/Loading';
import getResource from '../shared/Requests/getResource';
import LectureIntro from './components/Intro';
import { SingleLectureContainer } from './styles';

const SingleLecture = ({ match }) => {
	const [{ token }] = useStateValue();
	const [loading, setLoading] = useState(true);
	const [lecture, setLecture] = useState([]);
	const [error, setError] = useState('');
	const [data, setData] = useState([]);

	useEffect(() => {
		setLoading(true);
		const url = `${process.env.REACT_APP_API_URI}/lectures/${match.params.id}`;
		const headers = {
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`,
		};
		getResource(url, headers, setLecture, setLoading, setError, setData);
	}, [match.params.id, token]);

	const history = useHistory();
	if (data.message === 'Resource not found') {
		history.push('/404');
	}
	return (
		<SingleLectureContainer>
			{error && <p style={{ display: 'flex', margin: 'auto' }}>{error}</p>}
			{!error && (
				<>
					{loading === true ? (
						<div
							style={{
								display: 'flex',
								marginLeft: 'auto',
								marginRight: 'auto',
								marginTop: 20,
							}}
						>
							<LoadingCircular />
						</div>
					) : (
						<>
							<LectureIntro
								title={lecture[0]?.name}
								byUser={lecture[0]?.byUser?.name}
							/>
						</>
					)}
				</>
			)}
		</SingleLectureContainer>
	);
};

export default SingleLecture;
