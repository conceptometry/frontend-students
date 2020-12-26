import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavBrown } from '../../../styles/ColorPallet';

export const Sidebar = styled.header`
	display: flex;
	flex-direction: column;
	background-color: ${NavBrown};
	width: 270px;
	min-height: 100vh;
	position: fixed;
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
