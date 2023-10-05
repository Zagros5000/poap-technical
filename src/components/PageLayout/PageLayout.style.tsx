import styled from "styled-components";
import { theme } from "../../theme/theme";
export const PageLayoutWrapper = styled.div`
	display: flex;
	min-height: 100vh;
	width: 100vw;
	justify-content: center;
	background-color: ${theme.colors.background};
`;
export default PageLayoutWrapper;
