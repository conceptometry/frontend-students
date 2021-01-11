import React from 'react';
import { InfoBlockContainer } from '../styles';

const InfoBlock = ({ title, data }) => {
	return (
		<InfoBlockContainer>
			<h5 style={{ display: 'flex', margin: '10px auto 0px auto' }}>{title}</h5>
			<h2 style={{ display: 'flex', margin: 'auto', fontSize: '20px' }}>
				{data && data}
			</h2>
		</InfoBlockContainer>
	);
};

export default InfoBlock;
