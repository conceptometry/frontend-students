import {
	AssignmentDate,
	AssignmentDueDate,
	AssignmentInfo,
	AssignmentListContainer,
	AssignmentTitle,
	ViewAssignmentIcon,
	ViewAssignmentLink,
} from './styles/Assignments';

const AssignmentList = ({ title, dueDate, id }) => {
	const date = new Date(dueDate);
	const formattedDueDate =
		date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
	return (
		<AssignmentListContainer>
			<AssignmentTitle>{title}</AssignmentTitle>
			<AssignmentInfo>
				<AssignmentDueDate>
					<small>Due Date</small>
					<AssignmentDate>{formattedDueDate}</AssignmentDate>
				</AssignmentDueDate>
				<ViewAssignmentLink to={`/assignments/${id}`}>
					<ViewAssignmentIcon />
				</ViewAssignmentLink>
			</AssignmentInfo>
		</AssignmentListContainer>
	);
};

export default AssignmentList;
