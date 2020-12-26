import AssignmentList from '../shared/Sidenav/Lists/Assignment';
import {
	AssignmentsContainer,
	AssignmentsPageTitle,
	AssignmentsListContainer,
} from './styles/Assignments';

const Assignments = () => {
	return (
		<AssignmentsContainer>
			<AssignmentsPageTitle>Assignments</AssignmentsPageTitle>
			<AssignmentsListContainer>
				<AssignmentList />
				<AssignmentList />
				<AssignmentList />
				<AssignmentList />
			</AssignmentsListContainer>
		</AssignmentsContainer>
	);
};

export default Assignments;
