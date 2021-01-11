import styled from 'styled-components';
import { PrimaryWhite } from '../../styles/ColorPallet';

export const SingleLectureContainer = styled.div`
	display: flex;
	margin-left: auto;
	flex-direction: column;
	margin-right: auto;
	width: 99.7%;
`;

export const LectureIntroContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: auto;
`;

export const LectureTitle = styled.h2`
	display: flex;
	margin: auto 0;
	padding: 3px 0px 1px 9px;
	display: flex;
`;

export const LectureByUser = styled.h4`
	margin: auto 0px;
	padding: 0px 10px;
	display: flex;
`;

export const LectureInfoContainer = styled.div`
	display: flex;
	margin-left: auto;
	margin-right: auto;
	justify-content: space-evenly;
	margin-top: 22px;
	width: 95%;

	@media (max-width: 1112px) {
		width: 99%;
	}

	@media (max-width: 992px) {
		flex-direction: column;
		margin-top: 0px;
	}
`;

export const InfoBlockContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
	border: 1px solid #111;
	background: linear-gradient(to bottom right, ${PrimaryWhite}, #fafafa);
	border-radius: 12px;
	width: 100%;
	height: 140px;
	margin-left: 10px;
	margin-right: 10px;
	box-shadow: 2px 3px 7px #c4c4c4;

	@media (max-width: 992px) {
		max-width: 80% !important;
		width: 80% !important;
		margin-left: auto;
		margin-right: auto;
		margin-top: 16px;
	}
`;

export const PB = styled.div`
	margin-top: 20px;
`;
