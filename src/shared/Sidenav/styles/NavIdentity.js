import styled from 'styled-components';

export const NavIdentity = styled.div`
	display: flex;
	padding-top: 6px;
	padding-right: 16px;
	padding-left: 16px;
`;

export const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: auto;
	margin-bottom: auto;
`;

export const UserImage = styled.img`
	max-height: 36px;
	margin-top: auto;
	margin-right: 8px;
	margin-bottom: auto;
	border-radius: 100%;
	border: 0.5px solid #111111;
`;

export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SignOutButton = styled.span`
	font-size: 14px;
	/* position: absolute; */
	cursor: pointer;
	margin-top: -5px;

	@media (max-width: 992px) {
		font-size: 12px;
	}
`;

export const DisplayName = styled.h3`
	font-size: 20px;

	@media (max-width: 992px) {
		font-size: 18px;
	}
`;
