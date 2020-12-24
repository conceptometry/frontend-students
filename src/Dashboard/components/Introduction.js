import {
	DashboardIntroduction,
	DashboardIntroductionHeading,
	DashboardIntroductionParagraph,
} from '../styles/Dashboard';

const Introduction = () => {
	return (
		<DashboardIntroduction>
			<DashboardIntroductionHeading>Hello Yashraj</DashboardIntroductionHeading>
			<DashboardIntroductionParagraph>
				You have your next lecture on <br /> 13 Dec 2020
			</DashboardIntroductionParagraph>
		</DashboardIntroduction>
	);
};

export default Introduction;
