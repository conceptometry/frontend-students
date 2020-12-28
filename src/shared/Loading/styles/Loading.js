import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';
import { PrimaryWhite } from '../../../styles/ColorPallet';

export const LoadingScreenContainer = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;

	${(props) =>
		props.gradientBg
			? `background: linear-gradient(to bottom right, #fff, rgb(209, 209, 209))`
			: `background: ${PrimaryWhite}`}
`;

export const LoadingScreenIcon = styled(CircularProgress)`
	display: flex;
	margin: auto;
	align-items: center;
	justify-content: center;
	/* font-size: 200px; */
	min-width: 64px;
	min-height: 64px;
`;

export const LoadingContainer = styled.div`
	background: transparent;
	width: 100%;
	display: flex;
	margin: auto;
	align-items: center;
	justify-content: center;
`;

export const LoadingIcon = styled(CircularProgress)`
	display: flex;
	margin-left: auto;
	margin-right: auto;
	min-width: 40px;
	min-height: 40px;
`;
