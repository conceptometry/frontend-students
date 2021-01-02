import { Grow } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useStateValue } from '../shared/context/StateProvider';
import LectureList from '../shared/Lists/Lecture';
import { LoadingCircular } from '../shared/Loading';
import getResource from '../shared/Requests/getResource';
import {
	LecturesContainer,
	LecturesListContainer,
	LecturesPageTitle,
} from './styles/Lectures';

const Lectures = ({ match }) => {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		setTimeout(function () {
			setVisible(true);
		}, 0);
	}, []);

	const [{ token }] = useStateValue();
	const [lectures, setLectures] = useState([]);
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const history = useHistory();

	if (parseInt(match.params.page) < 1) {
		history.push('/404');
	}

	useEffect(() => {
		setLoading(true);
		const url = `${process.env.REACT_APP_API_URI}/lectures?limit=10&page=${match.params.page}&sort=eventTime`;
		const headers = {
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`,
		};

		getResource(url, headers, setLectures, setLoading, setError, setData);
	}, [token, match.params.page]);

	return (
		<Grow in={visible} timeout={700}>
			<LecturesContainer>
				{error && <p>{error}</p>}
				{!error && (
					<>
						<LecturesPageTitle>Lectures</LecturesPageTitle>
						{loading ? (
							<>
								<LoadingCircular />
							</>
						) : (
							<>
								<LecturesListContainer>
									{data !== null && data.count < 1 ? (
										<>
											<Redirect to='/404' />
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
											{data !== null && data.pagination.next && (
												<>
													<Link
														to={`/lectures/page/${
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
														to={`/lectures/page/${
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
								</LecturesListContainer>
							</>
						)}
					</>
				)}
			</LecturesContainer>
		</Grow>
	);
};

export default Lectures;
