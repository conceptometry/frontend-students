import { Tooltip } from '@material-ui/core';
import React from 'react';
import { useStateValue } from '../../context/StateProvider';
import {
	NavMenuContainer,
	NavMenuItem,
	NavMenuItems,
	NavMenuLink,
	RefreshIcon,
} from '../styles/NavMenu';

const NavMenu = () => {
	const [{ navOpen }, dispatch] = useStateValue();
	const handleNavToggle = () => {
		if (navOpen === true) {
			dispatch({
				type: 'SET_NAV_OPEN',
				navOpen: false,
			});
		} else {
			dispatch({
				type: 'SET_NAV_OPEN',
				navOpen: true,
			});
		}
	};
	return (
		<NavMenuContainer>
			<NavMenuItems>
				<NavMenuItem>
					<NavMenuLink onClick={handleNavToggle} to='/'>
						Home
					</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink onClick={handleNavToggle} to='/assignments'>
						Assignments
					</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink onClick={handleNavToggle} to='/lectures'>
						Lectures
					</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<NavMenuLink onClick={handleNavToggle} to='/profile'>
						My Profile
					</NavMenuLink>
				</NavMenuItem>
				<NavMenuItem>
					<Tooltip title='Refresh' placement='right'>
						<RefreshIcon onClick={() => window.location.reload()} />
					</Tooltip>
				</NavMenuItem>
			</NavMenuItems>
		</NavMenuContainer>
	);
};

export default NavMenu;
