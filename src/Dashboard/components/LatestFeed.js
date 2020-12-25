import { Suspense, useState } from 'react';
import {
	LatestFeedContainer,
	LatestFeedContent,
	LatestFeedItem,
	LatestFeedItems,
	LatestFeedNavbar,
} from '../styles/LatestFeed';
import LatestAssignments from './LatestAssignments';
import LatestLectures from './LatestLectures';

const LatestFeed = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
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
								<LatestLectures />
							</>
						)}
					</LatestFeedContent>
				</LatestFeedContainer>
			</Suspense>
		</>
	);
};

export default LatestFeed;
