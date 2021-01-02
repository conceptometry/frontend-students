import { Form, FormButton, FormInput } from '../../../styles/Form';

const Login = () => {
	return (
		<Form borderDark p center flex flexCol w100>
			<FormGroup>
				<FormInput placeholder='Email' mt flexCol borderDark />
			</FormGroup>
			<FormGroup>
				<FormInput placeholder='Password' mt flexCol borderDark />
			</FormGroup>
			<FormButton type='submit' borderDark flex>
				Submit
			</FormButton>
		</Form>
	);
};

export default Login;
