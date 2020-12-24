import styled from 'styled-components';
import { LightBlue, PrimaryWhite } from '../../styles/ColorPallet';

export const LatestFeedContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 30px;
	width: 60vw;
	background-color: ${PrimaryWhite};
	border-radius: 10px;
	border: 1px solid #111;
	box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
`;

export const LatestFeedNavbar = styled.div`
	display: flex;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	flex-direction: column;
	/* background-color: ${LightBlue}; */
	background-image: linear-gradient(
		to bottom right,
		${LightBlue},
		rgba(238, 245, 252, 0.6)
	);
	/* margin-bottom: 1rem; */
	border-bottom: 1px solid #111;
`;

export const LatestFeedItems = styled.ul`
	display: flex;
	padding-left: 5px;
	padding-top: 7px;
	padding-bottom: 7px;
`;

export const LatestFeedItem = styled.li`
	display: flex;
	text-decoration: none;
	padding: 2px 12px;
	cursor: pointer;
`;

export const LatestFeedContent = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 8px;
	padding-right: 8px;
`;
