import styled from 'styled-components';
import { PrimaryWhite } from './ColorPallet';

export const Form = styled.form`
	${(props) => props.borderDark && `border: 1px solid #111;`}
	${(props) => props.borderLight && `border: 1px solid #dadada;`}
    ${(props) => props.p && `padding: 8px;`}
    ${(props) => props.px && `padding: 0px 8px;`}
    ${(props) => props.py && `padding: 8px 0px;`}	
    ${(props) => props.center && `margin-left: auto; margin-right: auto;`}
	${(props) => props.flex && `display: flex;`}
	${(props) => props.flexCol && `flex-direction: column;`}
	${(props) => props.w100 && `width: 100%;`}
`;

export const FormInput = styled.input`
	padding: 5px 8px;
	outline: none;
	border-radius: 6px;
	background: linear-gradient(to bottom right, ${PrimaryWhite}, #fbfdff);
	transition: 0.3s;
	font-size: 16px;

	${(props) => props.center && `margin-left: auto; margin-right: auto;`}
	${(props) => props.mt && `margin-top: 9px;`}
	${(props) => props.w100 && `width: 100%;`}
	${(props) => props.flex && `display: flex;`}
	${(props) => props.flexCol && `flex-direction: column;`}
	${(props) => (props.border ? `border: 0.1px solid #a3a3a3;` : `border: none;`)}

    &:focus {
		box-shadow: 0px 0px 1px 3px #a9d2ff;
		transition: 0.3s;
	}
`;

export const FormGroup = styled.div`
	width: 100%;
`;

export const FormLabel = styled.label`
	font-size: 13px;
	padding-bottom: 1px;
	${(props) => props.start && `text-align: left; padding-left: 2px;`}
	${(props) => props.end && `text-align: right; padding-right: 2px;`}
	${(props) => props.mt && `margin-top: 9px;`}
	${(props) => props.flex && `display: flex;`}
`;

export const FormButton = styled.button`
	padding: 5px;
	outline: none;
	background: #fefefe;
	box-sizing: border-box;
	box-shadow: 2px 3px 1px rgba(0, 0, 0, 0.25);
	border-radius: 7px;
	font-size: 16px;
	transition: 0.2s;
	margin: 10px auto;

	${(props) =>
		props.borderLight ? `border: 0.1px solid #464242;` : `border: none;`}
	${(props) =>
		props.borderDark ? `border: 1px solid #000000;` : `border: none;`}
	${(props) => props.flex && `display: flex;`}
	${(props) => props.w100 && `width: 100%;`}

	&:hover {
		transition: 0.2s;
		background: #f9f9ff;
	}

	&:active {
		transition: 0.001s;
		box-shadow: 1.5px 2.5px 2px rgba(0, 0, 0, 0.25);
	}
`;
