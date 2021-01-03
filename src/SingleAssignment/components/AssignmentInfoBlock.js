import {
	AssignmentInfoBlockContainer,
	AssignmentInfoBlockHeading,
	AssignmentInfoBlockInfo,
} from '../styles';

const AssignmentInfoBlock = ({ title, info, teacherMaterials }) => {
	return (
		<AssignmentInfoBlockContainer>
			<AssignmentInfoBlockHeading>{title}</AssignmentInfoBlockHeading>
			{info && <AssignmentInfoBlockInfo>{info}</AssignmentInfoBlockInfo>}
			{teacherMaterials && (
				<>
					{teacherMaterials === 'No file has been uploaded' ? (
						<>
							<AssignmentInfoBlockInfo>
								No file has been uploaded yet
							</AssignmentInfoBlockInfo>
						</>
					) : (
						<a
							style={{
								display: 'flex',
								margin: 'auto',
								textDecoration: 'none',
								fontSize: '16px',
								color: '#111',
							}}
							href={`${teacherMaterials}`}
							target='_blank'
							rel='noopener noreferrer'
						>
							Click Here
						</a>
					)}
				</>
			)}
		</AssignmentInfoBlockContainer>
	);
};

export default AssignmentInfoBlock;
