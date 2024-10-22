import { styled } from 'styled-components';

import { ButtonVariant } from '../models/types';

const getBackground = (variant: ButtonVariant) => {
	switch (variant) {
		case 'default':
			return '#194ed5';
		case 'danger':
			return '#FF4842';
		case 'success':
			return '#00AB55';
		case 'warning':
			return '#F4CD00';
		default:
			return '#194ed5';
	}
};

export const StyledButton = styled.button<{
	$fullWidth?: boolean;
	$isDisabled?: boolean;
	$variant: ButtonVariant;
}>`
	border-radius: 6px;
	background: ${({ $variant }) => getBackground($variant)};
	box-shadow: 0px 8px 16px 0px rgba(25, 78, 213, 0.24);
	border: none;
	padding: 10px 20px;
	color: #fff;
	font-weight: 700;
	width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
	&:hover {
		transition: all 0.3s ease-in-out;
		opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 0.9)};
	}
`;
export const StyledSubmit = styled.input<{
	$fullWidth?: boolean;
	$isDisabled?: boolean;
	$variant: ButtonVariant;
}>`
	border-radius: 6px;
	background: ${({ $variant }) => getBackground($variant)};
	box-shadow: 0px 8px 16px 0px rgba(25, 78, 213, 0.24);
	border: none;
	padding: 10px 20px;
	color: #fff;
	font-weight: 700;
	width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
	&:hover {
		transition: all 0.3s ease-in-out;
		opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 0.9)};
	}
`;
