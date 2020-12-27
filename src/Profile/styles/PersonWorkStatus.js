import styled from 'styled-components';
import { PrimaryWhite } from '../../styles/ColorPallet';

export const PersonWorkStatusContainer = styled.div`
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
