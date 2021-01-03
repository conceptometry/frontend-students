import { AssignmentInfoContainer } from '../styles';
import AssignmentInfoBlock from './AssignmentInfoBlock';

const AssignmentInfo = ({ dueDate, teacherMaterials }) => {
	const date = new Date(dueDate);
	const formattedDueDate =
		date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
	return (
		<AssignmentInfoContainer>
			<AssignmentInfoBlock title={'Due Date'} info={formattedDueDate} />
			<AssignmentInfoBlock
				title={'Materials'}
				teacherMaterials={teacherMaterials}
			/>
			<AssignmentInfoBlock
				title={'Instructions'}
				info={
					'Please submit assignment on time, Please submit assignment on time Please submit assignment on time '
				}
			/>
		</AssignmentInfoContainer>
	);
};

export default AssignmentInfo;
