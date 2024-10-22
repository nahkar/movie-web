import { ThemeT } from '@/app/styles/theme';
import styled from 'styled-components';

export const StyledAsideWrapper = styled.header<{ theme: ThemeT }>`
	background: ${({ theme }) => theme.light.colors.primary};
	width: 253px;
	background: #194ed5;
`;
