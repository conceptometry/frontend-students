import React from 'react';
import Identity from './components/Identity';
import NavMenu from './components/NavMenu';
import { NavTitle, Sidebar } from './styles/Sidenav';

const Sidenav = () => {
	return (
		<>
			<Sidebar>
				<NavTitle>Conceptometry</NavTitle>
				<Identity />
				<NavMenu />
			</Sidebar>
		</>
	);
};

export default Sidenav;
