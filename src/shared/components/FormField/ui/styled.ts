import { styled } from 'styled-components';

export const StyledFormFieldWrapper = styled.div`
	border-radius: 10px;
	border: 1px solid rgba(145, 158, 171, 0.24);
	background: #fff;
	height: 40px;
`;
export const StyledFormFieldInput = styled.input<{ $loading?: boolean }>`
	width: 100%;
	height: 100%;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 10px;
	pointer-events: ${({ $loading }) => ($loading ? 'none' : 'auto')};
	&::placeholder {
		color: #919eab;
	}
`;
