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
					<NavMenuLink to='/assignments'>Assignments</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink to='/lectures/page/1'>Lectures</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink to='/profile'>My Profile</NavMenuLink>
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
