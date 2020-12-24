import React from 'react';
import {
	DisplayName,
	ImageContainer,
	NavIdentity,
	SignOutButton,
	UserImage,
	UserInfo,
} from '../styles/NavIdentity';

const Identity = () => {
	return (
		<NavIdentity>
			<ImageContainer>
				<UserImage
					src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg'
					alt='User'
				/>
			</ImageContainer>

			<UserInfo>
				<DisplayName>Hello, Yashraj</DisplayName>
				<SignOutButton>Sign Out</SignOutButton>
			</UserInfo>
		</NavIdentity>
	);
};

export default Identity;
