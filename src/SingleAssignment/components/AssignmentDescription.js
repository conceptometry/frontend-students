import {
	AssignmentDescriptionContainer,
	AssignmentDescriptionHeading,
	AssignmentDescriptionHeadingContainer,
	AssignmentDescriptionParagraph,
	SubmitAssignmentButton,
} from '../styles';

const AssignmentDescription = ({ description }) => {
	return (
		<AssignmentDescriptionContainer>
			<AssignmentDescriptionHeadingContainer>
				<AssignmentDescriptionHeading>Description</AssignmentDescriptionHeading>
				<SubmitAssignmentButton borderDark style={{ minWidth: 150 }}>
					Submit
				</SubmitAssignmentButton>
			</AssignmentDescriptionHeadingContainer>
			<AssignmentDescriptionParagraph>
				{description}
			</AssignmentDescriptionParagraph>
		</AssignmentDescriptionContainer>
	);
};

export default AssignmentDescription;
