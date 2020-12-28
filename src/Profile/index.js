import { Backdrop, Grow, Modal } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Form, FormButton, FormInput, FormLabel } from '../styles/Form';
import { useStyles } from '../styles/MaterialUI-theme';
import PasswordUpdate from './components/PasswordUpdate';
import PersonInfo from './components/PersonInfo';
import PersonWorkStatus from './components/PersonWorkStatus';
import {
	EditProfileImage,
	ProfileContainer,
	ProfileImage,
	ProfileInfo,
} from './styles/Profile';

const Profile = () => {
	const [visible, setVisible] = useState(false);
	const [updateImageModalOpen, setUpdateImageModalOpen] = useState(false);
	const [newImage, setNewImage] = useState(null);
	const classes = useStyles();
	const handleUpdateImageModal = () => {
		if (updateImageModalOpen === true) {
			setUpdateImageModalOpen(false);
		} else {
			setUpdateImageModalOpen(true);
		}
	};

	const updateImage = (e) => {
		e.preventDefault();
		if (newImage === null) {
			alert('Please upload an Image');
		}
		{
			handleUpdateImageModal();
		}
	};

	const handleNewImageSelect = (e) => {
		if (e.target.files) {
			setNewImage(e.target.files[0]);
		}
	};
	useEffect(() => {
		setTimeout(function () {
			setVisible(true);
		}, 0);
	}, []);
	return (
		<Grow in={visible} timeout={700}>
			<ProfileContainer>
				<ProfileInfo>
					<ProfileImage src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg' />
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
										{newImage === null
											? ` No image has been chosen`
											: ` ${newImage.name}`}
									</FormLabel>
									<FormInput
										id='upload'
										type='file'
										accept='image/*'
										flex
										file
										style={{ width: '60vh' }}
										onChange={handleNewImageSelect}
										placeholder='Name'
									/>

									<FormButton type='submit' borderDark w100>
										Update
									</FormButton>
								</Form>
							</div>
						</Grow>
					</Modal>
					<PersonInfo />
					<PersonWorkStatus />
					<PasswordUpdate />
				</ProfileInfo>
			</ProfileContainer>
		</Grow>
	);
};

export default Profile;
