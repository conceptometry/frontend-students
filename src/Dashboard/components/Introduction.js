import {
	DashboardIntroduction,
	DashboardIntroductionHeading,
	DashboardIntroductionParagraph,
} from '../styles/Dashboard';
import { useStateValue } from '../../shared/context/StateProvider';

const Introduction = () => {
	const [{ user }] = useStateValue();
	return (
		<DashboardIntroduction>
			<DashboardIntroductionHeading>
				Hello <span style={{ textTransform: 'capitalize' }}>{user?.name}</span>
			</DashboardIntroductionHeading>
			<DashboardIntroductionParagraph>
				You have your next lecture on <br /> 13 Dec 2020
			</DashboardIntroductionParagraph>
		</DashboardIntroduction>
	);
};

export default Introduction;
