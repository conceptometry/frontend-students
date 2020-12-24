import { useState } from 'react';
import {
	LatestFeedContainer,
	LatestFeedContent,
	LatestFeedItem,
	LatestFeedItems,
	LatestFeedNavbar,
} from '../styles/LatestFeed';
import LatestAssignments from './LatestAssignments';

const LatestFeed = () => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<LatestFeedContainer>
			<LatestFeedNavbar>
				<LatestFeedItems>
					<LatestFeedItem
						onClick={() => setActiveTab(0)}
						className={activeTab === 0 && `activeLatestFeedTab`}
					>
						Assignments
					</LatestFeedItem>
					<LatestFeedItem
						onClick={() => setActiveTab(1)}
						className={activeTab === 1 && `activeLatestFeedTab`}
					>
						Lectures
					</LatestFeedItem>
				</LatestFeedItems>
			</LatestFeedNavbar>

			<LatestFeedContent>
				{activeTab === 0 && (
					<>
						<LatestAssignments />
					</>
				)}
				{activeTab === 1 && (
					<>
						<h1>Lectures</h1>
					</>
				)}
			</LatestFeedContent>
		</LatestFeedContainer>
	);
};

export default LatestFeed;
