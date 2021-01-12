import styled from 'styled-components';
import { PrimaryWhite } from '../../styles/ColorPallet';

export const DashboardContainer = styled.section`
	display: flex;
	flex-direction: column;
	margin-right: auto;
	margin-left: auto;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const DashboardIntroduction = styled.div`
	background: linear-gradient(
		to bottom right,
		${PrimaryWhite},
		rgba(245, 245, 245, 0.623)
	);
	border-radius: 10px;
	/* border: 1px solid #111; */
	padding: 36px;
	display: flex;
	flex-direction: column;
	box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
	margin-top: 30px;
	min-width: 360px;
	max-width: 50%;
	margin-right: auto;
	margin-left: auto;

	@media (max-width: 768px) {
		max-width: 70%;
		min-width: 70%;
		width: 70%;
		margin-top: 55px;
	}
`;

export const DashboardIntroductionHeading = styled.h2`
	font-size: 24px;
	text-align: center;
`;

export const DashboardIntroductionParagraph = styled.p`
	text-align: center;
`;
