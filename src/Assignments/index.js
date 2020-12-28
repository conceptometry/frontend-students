import { Grow } from '@material-ui/core';
import { useEffect, useState } from 'react';
import AssignmentList from '../shared/Lists/Assignment';
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
	return (
		<Grow in={visible} timeout={700}>
			<AssignmentsContainer>
				<AssignmentsPageTitle>Assignments</AssignmentsPageTitle>
				<AssignmentsListContainer>
					<AssignmentList />
					<AssignmentList />
					<AssignmentList />
					<AssignmentList />
				</AssignmentsListContainer>
			</AssignmentsContainer>
		</Grow>
	);
};

export default Assignments;
