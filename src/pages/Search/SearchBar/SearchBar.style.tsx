import { styled } from "styled-components";
import { theme } from "../../../theme/theme";

export const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const SearchInput = styled.input`
	background: ${theme.colors.white};
	border: 2px solid ${theme.colors.white};
	border-radius: 4px;
	box-shadow: none;
	color: ${theme.colors.POAP_purple};
	font-size: 13px;
	font-size: 0.8125rem;
	margin: 0 auto 16px;
	outline-color: ${theme.colors.POAP_purple};
	padding: 12px;
	transition: right 0.2s ease-out;
	width: 100%;
	box-sizing: border-box;
	&:hover,
	&:focus {
		border-color: ${theme.colors.POAP_purple};
	}
`;

export const SearchButton = styled.button`
	background: ${theme.colors.POAP_purple};
	border: 0;
	border-radius: 40px;
	box-shadow: 0 10px 30px -5px rgba(101, 52, 255, 0.5);
	color: ${theme.colors.white};
	cursor: pointer;
	display: block;
	font-family: Archivo Narrow, sans-serif;
	font-size: 1.5rem;
	font-weight: 700;
	margin: 20px auto;
	max-width: 320px;
	padding: 12px 24px;
	text-align: center;
	text-decoration: none;
	transition: all 0.2s ease-out;
	&:hover {
		box-shadow: none;
	}
`;

export const FormWrapper = styled.form`
	display: flex;
	margin-top: 2rem;
`;
