import { Grow } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useStateValue } from '../shared/context/StateProvider';
import AssignmentList from '../shared/Lists/Assignment';
import { LoadingCircular } from '../shared/Loading';
import getResource from '../shared/Requests/getResource';
import {
	AssignmentsContainer,
	AssignmentsPageTitle,
	AssignmentsListContainer,
} from './styles/Assignments';

const Assignments = () => {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		setTimeout(function () {
			setVisible(true);
		}, 0);
	}, []);
	const [{ token }] = useStateValue();
	const [assignments, setAssignments] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	useEffect(() => {
		setLoading(true);
		const url = `${process.env.REACT_APP_API_URI}/assignments?limit=20&page=1`;
		const headers = {
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`,
		};

		getResource(url, headers, setAssignments, setLoading, setError);
	}, [token]);
	return (
		<Grow in={visible} timeout={700}>
			<AssignmentsContainer>
				{error && <p>{error}</p>}
				{!error && (
					<>
						<AssignmentsPageTitle>Assignments</AssignmentsPageTitle>
						<AssignmentsListContainer>
							{loading === false ? (
								<>
									{assignments.map((a) => (
										<AssignmentList
											title={a.name}
											dueDate={a.dueDate}
											id={a.id}
										/>
									))}
								</>
							) : (
								<LoadingCircular />
							)}
						</AssignmentsListContainer>
					</>
				)}
			</AssignmentsContainer>
		</Grow>
	);
};

export default Assignments;
