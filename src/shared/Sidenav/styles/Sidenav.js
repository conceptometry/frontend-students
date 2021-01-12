import { CloseRounded, MenuRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavBrown } from '../../../styles/ColorPallet';

export const MobileNavToggleContainer = styled.div`
	position: fixed;
	display: flex;
	top: 0;
	left: 0;
	margin: auto;
	padding: 5px;
	background: #b80000;
	height: 30px;
	z-index: 999;
	width: 30px;

	@media (min-width: 767px) {
		display: none;
	}
`;

export const NavOpenIcon = styled(MenuRounded)`
	display: flex;
	margin: auto;
	color: white;
	font-weight: bold;
`;

export const NavClosedIcon = styled(CloseRounded)`
	margin: auto;
	display: flex;
	color: white;
	font-weight: bold;
`;

export const Sidebar = styled.header`
	display: flex;
	flex-direction: column;
	background-color: ${NavBrown};
	width: 270px;
	min-height: 100vh;
	transition: 0.5s;
	position: fixed;

	@media (max-width: 992px) {
		transition: 0.5s;
		width: 240px;
	}

	@media (max-width: 768px) {
		transition: 0.3s;
		width: 0px;
		left: -240px;
		z-index: 998;
	}
`;

export const NavLink = styled(Link)`
	display: flex;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
	text-decoration: none;
`;

export const NavLogo = styled.img`
	display: flex;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
`;
