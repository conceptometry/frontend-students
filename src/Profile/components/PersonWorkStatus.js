import React from 'react';
import { Form, FormGroup, FormInput, FormLabel } from '../../styles/Form';
import { PersonWorkStatusContainer } from '../styles/PersonWorkStatus';

const PersonWorkStatus = () => {
	return (
		<PersonWorkStatusContainer>
			<p>
				You have <strong>5</strong> assignments pending
			</p>
			<p>You have your next lecture on 13th December 2020</p>

			<Form w100 center flex flexCol>
				<FormLabel start>Hello</FormLabel>
				<FormInput type='text' placeholder='Hello' w100 center flex border />
			</Form>
		</PersonWorkStatusContainer>
	);
};

export default PersonWorkStatus;
