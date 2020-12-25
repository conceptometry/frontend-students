import Introduction from './components/Introduction';
import LatestFeed from './components/LatestFeed';
import { DashboardContainer } from './styles/Dashboard';

const Dashboard = () => {
	return (
		<DashboardContainer>
			<Introduction />
			<LatestFeed />
		</DashboardContainer>
	);
};

export default Dashboard;
