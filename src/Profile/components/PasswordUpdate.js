import { PasswordUpdateContainer } from '../styles/PasswordUpdate';
import { Form, FormButton, FormInput } from '../../styles/Form';

const PasswordUpdate = () => {
	return (
		<PasswordUpdateContainer>
			<Form flex flexCol w100>
				<FormInput
					w100
					center
					flex
					type='text'
					border
					style={{ width: '97%' }}
					placeholder='Current Password'
				/>
				<FormInput
					w100
					center
					flex
					type='text'
					border
					mt
					style={{ width: '97%' }}
					placeholder='New Password'
				/>
				<FormButton onClick={(e) => e.preventDefault()}>Submit</FormButton>
			</Form>
		</PasswordUpdateContainer>
	);
};

export default PasswordUpdate;
