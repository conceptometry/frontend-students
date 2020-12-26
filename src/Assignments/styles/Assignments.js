import styled from 'styled-components';

export const AssignmentsContainer = styled.section`
	display: flex;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	padding-right: 10px;
	padding-left: 10px;
`;

export const AssignmentsPageTitle = styled.h1`
	display: flex;
	margin-left: auto;
	margin-right: auto;
`;

export const AssignmentsListContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;
	width: 85%;

	@media (max-width: 992px) {
		width: 100%;
	}
`;
