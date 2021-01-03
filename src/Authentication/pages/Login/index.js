import { useForm } from 'react-hook-form';
import { Form, FormButton, FormInput, FormGroup } from '../../../styles/Form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { LoginContainer, LoginLogo, LoginPageTitle } from './styles/Login';
import { logo } from '../../../global/logo';
import { useStateValue } from '../../../shared/context/StateProvider';
import { useHistory } from 'react-router-dom';
import { login } from '../../functions/login';
import { useState } from 'react';
import { useQuery } from '../../../shared/hooks/useQuery';

const Login = () => {
	const [{ token }, dispatch] = useStateValue();
	const history = useHistory();
	const [message, setMessage] = useState('');
	const query = useQuery();

	const schema = Joi.object({
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.required(),
		password: Joi.string().min(6).required(),
	});
	const { register, handleSubmit, errors } = useForm({
		resolver: joiResolver(schema),
	});
	const handleLogin = (data) => {
		const redirect = query.get('to');
		login(data, dispatch, history, setMessage, token, redirect);
	};

	return (
		<LoginContainer>
			<LoginLogo src={logo} alt='Conceptometry Logo' />
			<LoginPageTitle>Login</LoginPageTitle>
			<Form
				className='loginForm'
				p
				center
				flex
				flexCol
				onSubmit={handleSubmit(handleLogin)}
			>
				<FormGroup>
					<FormInput
						placeholder='Email'
						name='email'
						mt
						w100
						center
						border
						ref={register({ required: 'Please enter your email' })}
					/>
					{errors.email && (
						<p style={{ fontSize: 13 }}>{errors.email.message}</p>
					)}
				</FormGroup>
				<FormGroup>
					<FormInput
						placeholder='Password'
						type='password'
						name='password'
						mt
						center
						w100
						border
						ref={register({ required: 'Please enter your password' })}
					/>
					{errors.password && (
						<p style={{ fontSize: 13 }}>{errors.password.message}</p>
					)}
				</FormGroup>
				<FormButton type='submit' center borderDark w100>
					Submit
				</FormButton>
				{message && <p>{message}</p>}
			</Form>
		</LoginContainer>
	);
};

export default Login;
