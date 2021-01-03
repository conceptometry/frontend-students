import styled from 'styled-components';
import { PrimaryBeige } from '../../styles/ColorPallet';

export const SingleAssignmentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 99.7%;
`;

export const AssignmentIntroContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const AssignmentTitle = styled.h2`
	margin: 3px 0px;
	padding: 0px 10px;
	display: flex;
`;

export const AssignmentByUser = styled.h4`
	margin: auto 0px;
	padding: 0px 10px;
	display: flex;
`;

export const AssignmentDescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0px 10px;
`;
export const AssignmentDescriptionHeadingContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 1px;
	margin-bottom: 10px;
`;

export const AssignmentDescriptionHeading = styled.h3`
	display: flex;
	margin-top: auto;
	margin-bottom: auto;
`;

export const SubmitAssignmentButton = styled.button`
	padding: 3px 5px;
	outline: none;
	background: #fefefe;
	box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);
	border-radius: 7px;
	font-size: 16px;
	transition: 0.2s;
	/* margin: 10px auto; */

	${(props) =>
		props.borderLight ? `border: 0.1px solid #464242;` : `border: none;`}
	${(props) =>
		props.borderDark ? `border: 1px solid #000000;` : `border: none;`}
	${(props) => props.flex && `display: flex;`}
	${(props) => props.w100 && `width: 100%;`}
	${(props) => props.center && `margin-left: auto; margin-right: auto`}

	&:hover {
		transition: 0.2s;
		background: #f9f9ff;
	}

	&:active {
		transition: 0.001s;
		box-shadow: 1.5px 2.5px 2px rgba(0, 0, 0, 0.25);
	}
`;

export const AssignmentDescriptionParagraph = styled.p`
	display: flex;
	font-size: 14px;
`;

export const AssignmentInfoContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	margin-right: auto;
	margin-left: auto;

	@media (max-width: 992px) {
		flex-direction: column;
	}
`;

export const AssignmentInfoBlockContainer = styled.div`
	display: flex;
	flex-direction: column;
	background: linear-gradient(to bottom right, #fff, ${PrimaryBeige});
	padding: 19px;
	border-radius: 10px;
	border: 1px solid #111;
	margin-top: 18px;
	min-width: 200px;
	max-width: 230px;
	min-height: 100px;

	@media (max-width: 1084px) {
		min-width: 140px;
		max-width: 190px;
	}

	@media (max-width: 992px) {
		min-width: 85%;
		max-width: 85%;
		margin-left: auto;
		margin-right: auto;
	}
`;

export const AssignmentInfoBlockHeading = styled.h3`
	text-align: center;
	font-size: 26px;
`;

export const AssignmentInfoBlockInfo = styled.p`
	font-size: 16px;
	display: flex;
	margin: auto;
`;
