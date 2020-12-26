import {
	EditProfileImage,
	ProfileContainer,
	ProfileImage,
	ProfileInfo,
} from './styles/Profile';

const Profile = () => {
	return (
		<ProfileContainer>
			<ProfileInfo>
				<ProfileImage src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg' />
				<EditProfileImage>Edit Image</EditProfileImage>
			</ProfileInfo>
		</ProfileContainer>
	);
};

export default Profile;
