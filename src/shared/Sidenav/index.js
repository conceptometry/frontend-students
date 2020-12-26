import React from 'react';
import { logo } from '../../global/logo';
import Identity from './components/Identity';
import NavMenu from './components/NavMenu';
import { NavLink, NavLogo, Sidebar } from './styles/Sidenav';

const Sidenav = () => {
	return (
		<>
			<Sidebar>
				<NavLink to='/'>
					<NavLogo src={logo} alt='Conceptometry Logo	' />
				</NavLink>
				<Identity />
				<NavMenu />
			</Sidebar>
		</>
	);
};

export default Sidenav;
