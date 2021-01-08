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
	const [todayAssignments, setTodayAssignments] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		setLoading(true);
		const url = `${process.env.REACT_APP_API_URI}/assignments?limit=10&page=${match.params.page}&sort=-dueDate`;
		const headers = {
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`,
		};

		getResource(url, headers, setAssignments, setLoading, setError, setData);
	}, [token, match.params.page, user._id]);

	useEffect(() => {
		setLoading(true);
		const url = `${
			process.env.REACT_APP_API_URI
		}/assignments?limit=10&page=1&sort=-dueDate&dueDate=${new Date()}`;
		const headers = {
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`,
		};

		getResource(url, headers, setTodayAssignments, setLoading, setError);
	}, [token, user._id]);
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
									{assignments !== [] && data !== [] && (
										<>
											{data !== [] &&
											data &&
											data !== undefined &&
											data?.count < 1 ? (
												<>
													<Redirect to='/404' />
												</>
											) : (
												<>
													<h3 style={{ textAlign: 'center' }}>
														Today's Assignments
													</h3>
													{todayAssignments && todayAssignments?.length > 0 ? (
														<>
															{todayAssignments?.map((a) => (
																<AssignmentList
																	key={a._id.toString()}
																	title={a.name}
																	dueDate={a.dueDate}
																	id={a._id}
																/>
															))}
														</>
													) : (
														<>
															<p
																style={{
																	textAlign: 'center',
																	marginBottom: 10,
																}}
															>
																No assignments for today
															</p>
														</>
													)}
													<h3 style={{ textAlign: 'center' }}>
														All Assignments
													</h3>
													{assignments && (
														<>
															{assignments?.map((a) => (
																<AssignmentList
																	fallback={'Loading..'}
																	key={a._id.toString()}
																	title={a.name}
																	dueDate={a.dueDate}
																	id={a._id}
																/>
															))}
														</>
													)}
													{!loading && (
														<>
															{data !== [] &&
																data &&
																data !== undefined &&
																data?.pagination.next && (
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
															{data !== [] &&
																data &&
																data !== undefined &&
																data?.pagination.prev && (
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
														</>
													)}
													{data !== [] &&
														data &&
														data !== undefined &&
														data?.pages && (
															<>
																<p>Pages: {data.pages}</p>
															</>
														)}
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
