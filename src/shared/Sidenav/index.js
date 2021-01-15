import { memo, useState } from 'react';
import { logo } from '../../global/logo';
import { Tooltip } from '@material-ui/core';
import Identity from './components/Identity';
import {
	MobileNavToggleContainer,
	NavClosedIcon,
	NavLink,
	NavLogo,
	NavOpenIcon,
	Sidebar,
} from './styles/Sidenav';
import {
	NavMenuContainer,
	NavMenuItem,
	NavMenuItems,
	NavMenuLink,
	RefreshIcon,
} from './styles/NavMenu';

const Sidenav = memo(() => {
	const [navOpen, setNavOpen] = useState(false);
	const handleNavToggle = () => {
		if (navOpen === true) {
			setNavOpen(false);
		} else {
			setNavOpen(true);
		}
	};
	return (
		<>
			<MobileNavToggleContainer onClick={handleNavToggle}>
				{navOpen === false ? <NavOpenIcon /> : <NavClosedIcon />}
			</MobileNavToggleContainer>
			<Sidebar className={navOpen === true && `navOpen`}>
				<NavLink to='/'>
					<NavLogo src={logo} alt='Conceptometry Logo' />
				</NavLink>
				<Identity />
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
			</Sidebar>
		</>
	);
});

export default Sidenav;
