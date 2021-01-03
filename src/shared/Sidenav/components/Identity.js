import { useStateValue } from '../../context/StateProvider';
import {
	DisplayName,
	ImageContainer,
	NavIdentity,
	SignOutButton,
	UserImage,
	UserInfo,
} from '../styles/NavIdentity';
import { logout } from '../../../Authentication/functions/logout';

const Identity = () => {
	const [{ user }, dispatch] = useStateValue();

	const handleLogout = () => {
		logout(dispatch);
	};
	return (
		<NavIdentity>
			<ImageContainer>
				{user !== null && user?.profilePhoto === 'no-photo.jpg' ? (
					<>
						<UserImage
							src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg'
							alt='User'
						/>
					</>
				) : (
					<>
						<UserImage src={user !== null && user?.profilePhoto} alt='User' />
					</>
				)}
			</ImageContainer>

			<UserInfo>
				<DisplayName>
					Hello,{' '}
					<span style={{ textTransform: 'capitalize' }}>{user?.name}</span>
				</DisplayName>
				<SignOutButton onClick={handleLogout}>Sign Out</SignOutButton>
			</UserInfo>
		</NavIdentity>
	);
};

export default Identity;
