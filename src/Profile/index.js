import { Grow } from '@material-ui/core';
import { useEffect, useState } from 'react';
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
					<EditProfileImage>Edit Image</EditProfileImage>
					<PersonInfo />
					<PersonWorkStatus />
					<PasswordUpdate />
				</ProfileInfo>
			</ProfileContainer>
		</Grow>
	);
};

export default Profile;
