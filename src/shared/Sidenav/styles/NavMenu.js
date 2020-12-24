import { Link } from 'react-router-dom';
import { CachedRounded } from '@material-ui/icons';
import styled from 'styled-components';
import { DarkBlue } from '../../../styles/ColorPallet';

export const NavMenuContainer = styled.nav`
	display: flex;
	flex-direction: column;
`;

export const NavMenuItems = styled.ul`
	display: flex;
	flex-direction: column;
`;

export const NavMenuItem = styled.li`
	/* border-bottom: 1.25px solid ${DarkBlue}; */
	margin-top: 15px;
`;

export const NavMenuLink = styled(Link)`
	text-decoration: none;
	padding: 7px 16px;
	color: #111;
	transition: 0.2s;
	font-size: 20px;

	&:hover {
		color: #5f5f5f;
		transition: 0.2s;
	}

	&:active {
		text-decoration: none;
	}
`;

export const RefreshIcon = styled(CachedRounded)`
	padding-top: 7px;
	padding-bottom: 7px;
	padding-left: 16px;
	color: #111;
	font-size: 32px;
	cursor: pointer;
`;
