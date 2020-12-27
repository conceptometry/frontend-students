import styled from 'styled-components';
import {
	LightBlue,
	PrimaryBeige,
	PrimaryWhite,
} from '../../styles/ColorPallet';

export const ProfileContainer = styled.section`
	display: flex;
	flex-direction: column;
	background-repeat: no-repeat;
	min-height: 100vh;
	width: 100vw;
	background-color: linear-gradient(to bottom right, ${LightBlue}, transparent);
	background-image: url('https://picsum.photos/1960/1290?blur=3');
	background-attachment: fixed;
	object-fit: contain;
	opacity: 1;
`;

export const ProfileInfo = styled.div`
	margin-top: 12rem;
	margin-bottom: 1.2rem;
	padding: 20px;
	background-color: ${PrimaryBeige};
	border: 1px solid #111;
	border-radius: 10px;
	margin-right: 3rem;
	margin-left: 3rem;
	box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
	min-height: calc(100vh - 13rem);

	@media (max-width: 992px) {
		margin-right: 1rem;
		margin-left: 1rem;
	}
`;

export const ProfileImage = styled.img`
	display: flex;
	margin-left: auto;
	margin-right: auto;
	border-radius: 100%;
	box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
	max-width: 98px;
	margin-top: -4.3rem;
	border: 1px solid #111;

	@media (max-width: 992px) {
		max-width: 78px;
	}
`;

export const EditProfileImage = styled.button`
	display: flex;
	text-decoration: none;
	padding: 7px 9px;
	text-align: center;
	margin-top: 14px;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
	background-color: ${PrimaryWhite};
	margin-left: auto;
	margin-right: auto;
	border-radius: 7px;
	border: 1px solid #111;
	transition: 0.2s;
	outline: none;
	cursor: pointer;

	&:hover {
		background: linear-gradient(to top left, ${PrimaryWhite}, ${PrimaryBeige});

		transition: 0.2s;
	}

	@media (max-width: 992px) {
		padding: 4px 6px;
	}
`;
