import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../shared/context/StateProvider';
import { LoadingCircular } from '../shared/Loading';
import AssignmentDescription from './components/AssignmentDescription';
import AssignmentInfo from './components/AssignmentInfo';
import AssignmentIntro from './components/AssignmentIntro';
import { SingleAssignmentContainer } from './styles';

const SingleAssignment = ({ match }) => {
	const [{ token }] = useStateValue();
	const [loading, setLoading] = useState(true);
	const [assignment, setAssignment] = useState([]);
	const [error, setError] = useState('');
	const [data, setData] = useState([]);

	useEffect(() => {
		setLoading(true);
		const url = `${process.env.REACT_APP_API_URI}/assignments/${match.params.id}`;
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
					setAssignment(data.message);
					setError('');
					setData(data);
				} else {
					setAssignment([]);
					setError('Something went wrong, 400');
				}
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
	return (
		<SingleAssignmentContainer>
			{error && <p>{error}</p>}
			{!error && (
				<>
					{loading === true ? (
						<div style={{ marginTop: 20 }}>
							<LoadingCircular />
						</div>
					) : (
						<>
							<AssignmentIntro
								title={assignment !== [] && assignment?.name}
								byUser={assignment !== [] && assignment?.byUser.name}
							/>
							<AssignmentDescription
								description={assignment !== [] && assignment?.description}
							/>

							<AssignmentInfo
								dueDate={assignment !== [] && assignment?.dueDate}
								teacherMaterials={
									assignment !== [] && assignment?.teacherMaterials
								}
							/>
						</>
					)}
				</>
			)}
		</SingleAssignmentContainer>
	);
};

export default SingleAssignment;
