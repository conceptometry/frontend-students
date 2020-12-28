import { Grow } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Introduction from './components/Introduction';
import LatestFeed from './components/LatestFeed';
import { DashboardContainer } from './styles/Dashboard';

const Dashboard = () => {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		setTimeout(function () {
			setVisible(true);
		}, 0);
	}, []);
	return (
		<Grow in={visible} timeout={700}>
			<DashboardContainer>
				<Introduction />
				<LatestFeed />
			</DashboardContainer>
		</Grow>
	);
};

export default Dashboard;
