import { styled } from "styled-components";
import { theme } from "../../theme/theme";

export const Text = styled.p``;

export const DropDetailText = styled.p`
	max-width: 96px;
    margin-bottom: 8px;
    color: ${theme.colors.POAP_gray};
    line-break: anywhere;
    white-space: pre-wrap;
    font-family: Archivo,sans-serif;
    span{
        font-weight:bold;
        font-size: 1.25rem;
        display:inline;
    }
`;

export const ErrorText = styled.p`
    margin-bottom: 8px;
    color: ${theme.colors.red};
    font-family: Archivo,sans-serif;
`;
