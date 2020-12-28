import React from 'react';
import { PersonWorkStatusContainer } from '../styles/PersonWorkStatus';

const PersonWorkStatus = () => {
	return (
		<PersonWorkStatusContainer>
			<p>
				You have <strong>5</strong> assignments pending
			</p>
			<p>You have your next lecture on 13th December 2020</p>
		</PersonWorkStatusContainer>
	);
};

export default PersonWorkStatus;
