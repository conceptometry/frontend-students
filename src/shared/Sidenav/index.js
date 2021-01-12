import { logo } from '../../global/logo';
import { useStateValue } from '../context/StateProvider';
import Identity from './components/Identity';
import NavMenu from './components/NavMenu';
import {
	MobileNavToggleContainer,
	NavClosedIcon,
	NavLink,
	NavLogo,
	NavOpenIcon,
	Sidebar,
} from './styles/Sidenav';

const Sidenav = () => {
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
		<>
			<MobileNavToggleContainer onClick={handleNavToggle}>
				{navOpen === false ? <NavOpenIcon /> : <NavClosedIcon />}
			</MobileNavToggleContainer>
			<Sidebar className={navOpen === true && `navOpen`}>
				<NavLink to='/'>
					<NavLogo src={logo} alt='Conceptometry Logo' />
				</NavLink>
				<Identity />
				<NavMenu />
			</Sidebar>
		</>
	);
};

export default Sidenav;
