import styled from 'styled-components';

export const Button = styled.Button`
	padding: 6px;
	outline: none;
	border: 0.1px solid #111;
	width: 90%;
	background: #fefefe;
	border: 1px solid #000000;
	box-sizing: border-box;
	box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.25);
	border-radius: 7px;
	font-size: 18px;
	transition: 0.2s;
	margin: 10px 2rem;

	&:hover {
		transition: 0.2s;
		background: #f9f9ff;
	}

	&:active {
		transition: 0.001s;
		box-shadow: 1.5px 3.5px 2px rgba(0, 0, 0, 0.25);
	}
`;
