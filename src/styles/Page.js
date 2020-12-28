import styled from 'styled-components';

export const PageWithNavbar = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 270px;
	transition: 0.5s;

	@media (max-width: 992px) {
		margin-left: 240px;
		transition: 0.5s;
	}
`;
