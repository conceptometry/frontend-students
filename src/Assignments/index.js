import { Grow } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useStateValue } from '../shared/context/StateProvider';
import AssignmentList from '../shared/Lists/Assignment';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { LoadingCircular } from '../shared/Loading';
import getResource from '../shared/Requests/getResource';
import {
	AssignmentsContainer,
	AssignmentsPageTitle,
	AssignmentsListContainer,
} from './styles/Assignments';

const Assignments = ({ match }) => {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		setTimeout(function () {
			setVisible(true);
		}, 0);
	}, []);

	const history = useHistory();

	if (parseInt(match.params.page) < 1) {
		history.push('/404');
	}
	const [{ token, user }] = useStateValue();
	const [assignments, setAssignments] = useState([]);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		setLoading(true);
		const url = `${process.env.REACT_APP_API_URI}/assignments?limit=10&page=${match.params.page}&sort=dueDate`;
		const headers = {
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`,
		};

		getResource(url, headers, setAssignments, setLoading, setError, setData);
	}, [token, match.params.page, user._id]);
	return (
		<Grow in={visible} timeout={700}>
			<AssignmentsContainer>
				{error && <p>{error}</p>}
				{!error && (
					<>
						<AssignmentsPageTitle>Assignments</AssignmentsPageTitle>
						<AssignmentsListContainer>
							{loading ? (
								<>
									<LoadingCircular />
								</>
							) : (
								<>
									{data !== null && data.count < 1 ? (
										<>
											<Redirect to='/404' />
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
											{data !== null && data.pagination.next && (
												<>
													<Link
														to={`/assignments/page/${
															parseInt(match.params.page) + 1
														}`}
													>
														Next
													</Link>
												</>
											)}
											{data !== null && data.pagination.prev && (
												<>
													<Link
														to={`/assignments/page/${
															parseInt(match.params.page) - 1
														}`}
													>
														Previous
													</Link>
												</>
											)}
											{data !== null && data.pages && (
												<>
													<p>Pages: {data.pages}</p>
												</>
											)}
										</>
									)}
								</>
							)}
						</AssignmentsListContainer>
					</>
				)}
			</AssignmentsContainer>
		</Grow>
	);
};

export default Assignments;
