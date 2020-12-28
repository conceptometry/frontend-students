import { useEffect, useState } from 'react';
import { useStateValue } from '../../shared/context/StateProvider';
import AssignmentList from '../../shared/Lists/Assignment';
import { LoadingCircular } from '../../shared/Loading';
import getResource from '../../shared/Requests/getResource';
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

		getResource(url, headers, setAssignments, setLoading, setError);
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
								<AssignmentList title={a.name} dueDate={a.dueDate} id={a.id} />
							))}
							<ViewAllBtn to='/'>View all</ViewAllBtn>
						</>
					)}
				</>
			)}
		</LatestAssignmentsContainer>
	);
};

export default LatestAssignments;
