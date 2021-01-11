import { useEffect, useState } from 'react';
import { useStateValue } from '../../shared/context/StateProvider';
import AssignmentList from '../../shared/Lists/Assignment';
import { LoadingCircular } from '../../shared/Loading';
import {
	LatestAssignmentsContainer,
	ViewAllBtn,
} from '../styles/LatestAssignments';

const LatestAssignments = () => {
	const [{ token }] = useStateValue();
	const [assignments, setAssignments] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	useEffect(() => {
		setLoading(true);
		const url = `${process.env.REACT_APP_API_URI}/assignments?limit=5&page=1`;
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
					setAssignments(data.message);
					setError('');
				} else {
					setAssignments([]);
					setError('Something went wrong, 400');
				}
				setLoading(false);
			})
			.catch((err) => {
				console.log('Error: ', err);
				setError('Failed to get data, 500');
			});
	}, [token]);
	return (
		<LatestAssignmentsContainer>
			{error && <p>{error}</p>}
			{!error && (
				<>
					<h3 style={{ textAlign: 'center' }}>Assignments</h3>
					{loading === true ? (
						<>
							<LoadingCircular />
						</>
					) : (
						<>
							{assignments.map((a) => (
								<AssignmentList
									key={a._id.toString()}
									title={a.name}
									dueDate={a.dueDate}
									id={a._id}
								/>
							))}
							<ViewAllBtn to='/assignments'>View all</ViewAllBtn>
						</>
					)}
				</>
			)}
		</LatestAssignmentsContainer>
	);
};

export default LatestAssignments;
