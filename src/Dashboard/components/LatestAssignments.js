import React from 'react';
import AssignmentList from '../../shared/Lists/Assignment';
import {
	LatestAssignmentsContainer,
	ViewAllBtn,
} from '../styles/LatestAssignments';

const LatestAssignments = () => {
	return (
		<LatestAssignmentsContainer>
			<AssignmentList />
			<AssignmentList />
			<AssignmentList />
			<AssignmentList />
			<AssignmentList />
			<ViewAllBtn to='/'>View all</ViewAllBtn>
		</LatestAssignmentsContainer>
	);
};

export default LatestAssignments;
