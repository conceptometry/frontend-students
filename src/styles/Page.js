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

	@media (max-width: 768px) {
		margin-left: 0px;
		transition: all 0.3s ease;
	}
`;
