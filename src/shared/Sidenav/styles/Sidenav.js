import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavBrown } from '../../../styles/ColorPallet';

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
