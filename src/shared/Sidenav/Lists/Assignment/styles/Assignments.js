import { ChevronRightRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PrimaryBeige } from '../../../../../styles/ColorPallet';

export const AssignmentListContainer = styled.div`
	display: flex;
	flex-direction: row;
	background: linear-gradient(
		to right,
		${PrimaryBeige},
		rgba(243, 243, 243, 0.5)
	);
	border-radius: 9px;
	border: 1px solid #111;
	margin-top: 8px;
	padding: 0px 5px;
	height: 44px;
	justify-content: space-between;
`;

export const AssignmentTitle = styled.h2`
	display: flex;
	margin-top: auto;
	margin-bottom: auto;
	font-size: 24px;
`;

export const AssignmentInfo = styled.div`
	display: flex;
`;

export const AssignmentDueDate = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: auto;
	margin-bottom: auto;
`;

export const AssignmentDate = styled.h4`
	display: flex;
	font-size: 16px;
	margin-top: -5px;
`;

export const ViewAssignmentLink = styled(Link)`
	display: flex;
	text-decoration: none;
	font-size: 38px;
	color: #111;
	margin-top: auto;
	margin-bottom: auto;
`;

export const ViewAssignmentIcon = styled(ChevronRightRounded)`
	display: flex;
	/* font-size: px; */
	margin-top: auto;
	margin-bottom: auto;
`;
