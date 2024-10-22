import { styled } from 'styled-components';

export const StyledModalWrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 500px;
	padding: 20px;
	background-color: #fff;
	z-index: 10000;
	box-shadow: 0px 8px 16px 0px rgba(25, 78, 213, 0.24);
	border-radius: 6px;
`;
export const StyledModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 9999;
`;
