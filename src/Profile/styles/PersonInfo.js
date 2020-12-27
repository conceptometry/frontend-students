import styled from 'styled-components';
import { PrimaryBeige, PrimaryWhite } from '../../styles/ColorPallet';

export const PersonInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px;
	border-radius: 12px;
	box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
	margin-top: 1rem;
	background-color: ${PrimaryWhite};
	text-decoration: none;
	text-align: center;
	align-items: center;
	justify-content: center;

	${(props) => props.border && `border: 1px solid #111;`}
`;

export const PersonInfoTable = styled.table`
	width: 60%;
	font-size: 20px;
	${(props) =>
		props.border && `border: 1px solid #9c9c9c; border-radius: 10px;`}
	${(props) => props.borderBottom && `border-bottom: 1px solid #9c9c9c;`}

	@media (max-width: 992px) {
		width: 75%;
	}
`;

export const PersonInfoTableRow = styled.tr``;
export const PersonInfoTableHeading = styled.th`
	width: 40%;
	${(props) => props.border && `border-bottom: 1px solid #bbbbbb;`};
	${(props) => props.pt && `padding-top: 2px`}
	${(props) => props.pb && `padding-bottom: 2px`}
`;
export const PersonInfoTableData = styled.td`
	width: 60%;
	${(props) => props.border && `border-bottom: 1px solid #bbbbbb;`};
	${(props) => props.pt && `padding-top: 2px`}
	${(props) => props.pb && `padding-bottom: 2px`}
`;

export const EditProfileInfo = styled.button`
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
