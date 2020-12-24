import styled from 'styled-components';
import { PrimaryBeige } from '../../../styles/ColorPallet';

export const Sidebar = styled.header`
	display: flex;
	flex-direction: column;
	background-color: ${PrimaryBeige};
	width: 270px;
	min-height: 100vh;
	position: fixed;
`;

export const NavTitle = styled.h1`
	display: flex;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	font-size: 30px;
`;
