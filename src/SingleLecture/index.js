import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../shared/context/StateProvider';
import { LoadingCircular } from '../shared/Loading';
import InfoBlock from './components/InfoBlock';
import LectureIntro from './components/Intro';
import { LectureInfoContainer, PB, SingleLectureContainer } from './styles';

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
					console.log(data);
				} else {
					setLecture([]);
					setError('Something went wrong, 400');
				}
				setData(data);
				setLoading(false);
			})
			.catch((err) => {
				console.log('Error: ', err);
				setError('Failed to get data, 500');
			});
	}, [match.params.id, token]);

	const history = useHistory();
	if (data.message === 'Resource not found') {
		history.push('/404');
	}

	let occured;
	if (lecture[0]?.occured === false) {
		occured = "Lecture hasn't occured yet, it might have been rescheduled";
	} else {
		occured = 'Lecture has occured at the specified time';
	}

	let cancelled;
	if (lecture[0]?.occured === true && lecture[0]?.cancelled === false) {
		cancelled = 'Lecture has already occured';
	}
	if (lecture[0]?.cancelled === true) {
		cancelled = 'Lecture has been cancelled';
	} else {
		cancelled = 'Lecture has not been cancelled, nor has it occured';
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
							<LectureInfoContainer>
								<InfoBlock title='Date' />
								<InfoBlock title='Time' />
								<InfoBlock
									title='Duration'
									data={`${lecture[0]?.duration} minutes`}
								/>
							</LectureInfoContainer>
							<LectureInfoContainer>
								<InfoBlock title='Instructions' data='Please come on time' />
								<InfoBlock title='Teacher' data={lecture[0]?.byUser.name} />
								<InfoBlock
									title={
										lecture[0]?.subject.length <= 1 ? 'Subject' : 'Subjects'
									}
									data={
										lecture[0]?.subject.length <= 1 ? (
											<>
												{lecture[0]?.subject.map((s, i) => {
													return (
														<span
															key={i}
															style={{ textTransform: 'capitalize' }}
														>
															{s}
														</span>
													);
												})}
											</>
										) : (
											<>
												{lecture[0]?.subject.map((s, i) => {
													return (
														<span
															key={i}
															style={{ textTransform: 'capitalize' }}
														>
															{s + ', '}
														</span>
													);
												})}
											</>
										)
									}
								/>
							</LectureInfoContainer>
							<LectureInfoContainer>
								<InfoBlock title='Occured' data={occured} />
								<InfoBlock title='Cancelled' data={cancelled} />
							</LectureInfoContainer>
							<PB />
						</>
					)}
				</>
			)}
		</SingleLectureContainer>
	);
};

export default SingleLecture;
