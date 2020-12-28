import { PasswordUpdateContainer } from '../styles/PasswordUpdate';
import { Form, FormButton, FormInput } from '../../styles/Form';

const PasswordUpdate = () => {
	return (
		<PasswordUpdateContainer>
			<h1 style={{ marginBottom: 6 }}>Update Password</h1>
			<Form flex flexCol w100>
				<FormInput
					w100
					center
					flex
					type='text'
					border
					style={{ width: '98%' }}
					placeholder='Current Password'
				/>
				<FormInput
					w100
					center
					flex
					type='text'
					border
					mt
					style={{ width: '98%' }}
					placeholder='New Password'
				/>
				<FormButton w100 borderDark onClick={(e) => e.preventDefault()}>
					Submit
				</FormButton>
			</Form>
		</PasswordUpdateContainer>
	);
};

export default PasswordUpdate;
