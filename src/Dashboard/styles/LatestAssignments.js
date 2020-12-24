import { Link } from 'react-router-dom';
import { PrimaryWhite, RichBlue } from '../../styles/ColorPallet';
import styled from 'styled-components';

export const LatestAssignmentsContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 7px;
	margin-bottom: 15px;
`;

export const ViewAllBtn = styled(Link)`
	color: ${PrimaryWhite};
	border-radius: 7px;
	margin-top: 10px;
	/* border: 1px solid #111; */
	padding: 5px 40px;
	text-decoration: none;
	background-image: linear-gradient(
		to right,
		rgba(8, 61, 119, 0.8),
		${RichBlue}
	);
	text-align: center;
	display: flex;
	margin-left: auto;
	margin-right: auto;
	transition: all 0.3s;
	box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.25);
	/* width: 150px; */

	&:hover {
		transition: all 0.3s;
		background-color: #cecece;
	}

	&:active {
		transition: 0.001s;
		box-shadow: 1.5px 3.5px 2px rgba(0, 0, 0, 0.25);
		/* padding: 4.5px 39.5px; */
	}
`;
