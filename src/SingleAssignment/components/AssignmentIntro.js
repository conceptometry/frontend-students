import {
	AssignmentByUser,
	AssignmentIntroContainer,
	AssignmentTitle,
} from '../styles';

const AssignmentIntro = ({ title, byUser }) => {
	return (
		<>
			<AssignmentIntroContainer>
				<AssignmentTitle>{title}</AssignmentTitle>
				<AssignmentByUser>By {byUser}</AssignmentByUser>
			</AssignmentIntroContainer>
			<hr style={{ width: '100%', marginBottom: 3 }} />
		</>
	);
};

export default AssignmentIntro;
