import { useStateValue } from '../../context/StateProvider';
import {
	DisplayName,
	ImageContainer,
	NavIdentity,
	SignOutButton,
	UserImage,
	UserInfo,
} from '../styles/NavIdentity';

const Identity = () => {
	const [{ user }] = useStateValue();
	return (
		<NavIdentity>
			<ImageContainer>
				{user.profilePhoto === 'no-photo.jpg' ? (
					<>
						<UserImage
							src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg'
							alt='User'
						/>
					</>
				) : (
					<>
						<UserImage src={user.profilePhoto} alt='User' />
					</>
				)}
			</ImageContainer>

			<UserInfo>
				<DisplayName>Hello, Yashraj</DisplayName>
				<SignOutButton>Sign Out</SignOutButton>
			</UserInfo>
		</NavIdentity>
	);
};

export default Identity;
