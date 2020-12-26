import React from 'react';
import {
	AssignmentDate,
	AssignmentDueDate,
	AssignmentInfo,
	AssignmentListContainer,
	AssignmentTitle,
	ViewAssignmentIcon,
	ViewAssignmentLink,
} from './styles/Assignments';

const AssignmentList = () => {
	return (
		<AssignmentListContainer>
			<AssignmentTitle>This is an assignment</AssignmentTitle>
			<AssignmentInfo>
				<AssignmentDueDate>
					<small>Due Date</small>
					<AssignmentDate>17/11/2021</AssignmentDate>
				</AssignmentDueDate>
				<ViewAssignmentLink to='/'>
					<ViewAssignmentIcon />
				</ViewAssignmentLink>
			</AssignmentInfo>
		</AssignmentListContainer>
	);
};

export default AssignmentList;
