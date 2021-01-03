import { Backdrop, Grow, LinearProgress, Modal } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Form, FormButton, FormInput, FormLabel } from '../styles/Form';
import { useStyles } from '../styles/MaterialUI-theme';
import PasswordUpdate from './components/PasswordUpdate';
import PersonInfo from './components/PersonInfo';
import PersonWorkStatus from './components/PersonWorkStatus';
import { useStateValue } from '../shared/context/StateProvider';
import imageCompression from 'browser-image-compression';
import {
	EditProfileImage,
	ProfileContainer,
	ProfileImage,
	ProfileInfo,
} from './styles/Profile';

const Profile = () => {
	const [{ user, token }, dispatch] = useStateValue();
	const [visible, setVisible] = useState(false);
	const [updateImageModalOpen, setUpdateImageModalOpen] = useState(false);
	const [newImage, setNewImage] = useState(null);
	const [submissionMessage, setSubmissionMessage] = useState('');
	const [submitting, setSubmitting] = useState(false);
	const [imageCompressing, setImageCompressing] = useState(false);

	const classes = useStyles();
	const handleUpdateImageModal = () => {
		if (updateImageModalOpen === true) {
			setUpdateImageModalOpen(false);
		} else {
			setUpdateImageModalOpen(true);
		}
	};

	const updateImage = async (e) => {
		e.preventDefault();
		if (newImage === null) {
			alert('Please upload an Image');
		} else {
			setSubmitting(true);
			const submissionData = new FormData();
			submissionData.append('file', newImage);
			const options = {
				method: 'PUT',
				headers: {
					authorization: `Bearer ${token}`,
				},

				body: submissionData,
			};
			await fetch(`${process.env.REACT_APP_API_URI}/users/me/photo`, options)
				.then((response) => response.json())
				.then((data) => {
					if (data.success === false) {
						setSubmissionMessage(`${data.message}`);
					} else {
						setSubmissionMessage(`Profile photo has been updated`);
						dispatch({
							type: 'SET_USER',
							user: data.message,
							token: token,
						});

						handleUpdateImageModal();
					}
				})
				.catch((err) => {
					console.log(err);
					setSubmissionMessage('Something went wrong, 500');
				});
			setSubmitting(false);
		}
	};

	const handleNewImageSelect = async (e) => {
		if (e.target.files && e.target.files.length > 0) {
			setImageCompressing(true);
			const imageFile = e.target.files[0];

			const options = {
				maxSizeMB: 0.3,
				maxWidthOrHeight: 1024,
				useWebWorker: true,
				fileType: 'image/jpeg',
			};
			try {
				const compressedFile = await imageCompression(imageFile, options);
				await setNewImage(compressedFile);
				setImageCompressing(false);
			} catch (error) {
				console.log(error);
			}
		}
	};
	useEffect(() => {
		setTimeout(function () {
			setVisible(true);
		}, 0);
	}, []);
	return (
		<ProfileContainer>
			<Grow in={visible} timeout={700}>
				<ProfileInfo>
					{user.profilePhoto === 'no-photo.jpg' ? (
						<>
							<ProfileImage src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg' />
						</>
					) : (
						<>
							<ProfileImage src={user.profilePhoto} />
						</>
					)}
					<EditProfileImage onClick={handleUpdateImageModal}>
						Edit Image
					</EditProfileImage>
					<Modal
						aria-labelledby='transition-modal-title'
						aria-describedby='transition-modal-description'
						className={classes.modal}
						open={updateImageModalOpen}
						onClose={handleUpdateImageModal}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500,
						}}
					>
						<Grow in={updateImageModalOpen}>
							<div className={classes.paper}>
								<h2 style={{ textAlign: 'center' }}>Update Image</h2>
								<Form flex flexCol w100 onSubmit={updateImage}>
									<FormLabel flex start for='upload'>
										Select Image -
										{!newImage ? ` No image selected` : ` ${newImage?.name}`}
									</FormLabel>
									<FormInput
										id='upload'
										type='file'
										accept='image/*'
										flex
										file
										style={{ width: '100%' }}
										onChange={handleNewImageSelect}
										placeholder='Name'
									/>

									{imageCompressing === true ? (
										<>
											<FormButton disabled borderDark w100>
												Loading...
											</FormButton>
										</>
									) : (
										<>
											<FormButton type='submit' borderDark w100>
												Update
											</FormButton>
										</>
									)}

									{submitting && (
										<>
											<LinearProgress style={{ width: '100%' }} />
										</>
									)}

									{submissionMessage && <p>{submissionMessage}</p>}
								</Form>
							</div>
						</Grow>
					</Modal>
					<PersonInfo />
					<PersonWorkStatus />
					<PasswordUpdate />
				</ProfileInfo>
			</Grow>
		</ProfileContainer>
	);
};

export default Profile;
