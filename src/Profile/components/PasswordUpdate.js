import { PasswordUpdateContainer } from '../styles/PasswordUpdate';
import { Form, FormButton, FormInput } from '../../styles/Form';
import { useForm } from 'react-hook-form';
import postResource from '../../shared/Requests/postResource';
import { useStateValue } from '../../shared/context/StateProvider';
import { useState } from 'react';
import { LinearProgress } from '@material-ui/core';

const PasswordUpdate = () => {
	const [{ token }] = useStateValue();
	const [data, setData] = useState('');
	const [loading, setLoading] = useState(false);
	const { register, handleSubmit, errors } = useForm();
	const handleUpdatePassword = (data) => {
		console.log(data);
		const url = `${process.env.REACT_APP_API_URI}/users/me/password`;
		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(data),
		};
		postResource(url, options, setData, setLoading);
	};
	return (
		<PasswordUpdateContainer>
			<h1 style={{ marginBottom: 6 }}>Update Password</h1>
			<Form flex flexCol w100 onSubmit={handleSubmit(handleUpdatePassword)}>
				<FormInput
					w100
					center
					flex
					type='password'
					name='currentPassword'
					ref={register({
						required: 'Please enter your current password',
						minLength: {
							value: 6,
							message: 'Password should be 6+ characters long',
						},
					})}
					border
					style={{ width: '98%' }}
					placeholder='Current Password'
				/>

				{errors.currentPassword && (
					<p style={{ textAlign: 'left' }}>{errors.currentPassword.message}</p>
				)}
				<FormInput
					w100
					center
					flex
					type='password'
					name='newPassword'
					ref={register({
						required: 'Please enter your new password',
						minLength: {
							value: 6,
							message: 'Password should be 6+ characters long',
						},
					})}
					border
					mt
					style={{ width: '98%' }}
					placeholder='New Password'
				/>
				{errors.newPassword && (
					<p style={{ textAlign: 'left' }}>{errors.newPassword.message}</p>
				)}
				<FormButton w100 borderDark type='submit'>
					Submit
				</FormButton>
				{loading && <LinearProgress />}
				{data && <p style={{ textAlign: 'left' }}>{data}</p>}
			</Form>
		</PasswordUpdateContainer>
	);
};

export default PasswordUpdate;
