import { Tooltip } from '@material-ui/core';
import React from 'react';
import {
	NavMenuContainer,
	NavMenuItem,
	NavMenuItems,
	NavMenuLink,
	RefreshIcon,
} from '../styles/NavMenu';

const NavMenu = () => {
	return (
		<NavMenuContainer>
			<NavMenuItems>
				<NavMenuItem>
					<NavMenuLink to='/'>Home</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink to='/'>Assignments</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink to='/'>Lectures</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink to='/'>My Profile</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<Tooltip title='Refresh' placement='right'>
						<RefreshIcon />
					</Tooltip>
				</NavMenuItem>
			</NavMenuItems>
		</NavMenuContainer>
	);
};

export default NavMenu;
