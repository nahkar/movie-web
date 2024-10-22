import { styled } from 'styled-components';

import deleteHoverIcon from './img/delete.hover.icon.svg';
import deleteIcon from './img/delete.icon.svg';
import editHoverIcon from './img/edit.hover.icon.svg';
import editIcon from './img/edit.icon.svg';

export const StyledChipWrapper = styled.div`
	border-radius: 50px;
	background: rgba(145, 158, 171, 0.16);
	padding: 5px 10px;
	display: flex;
	gap: 5px;
	min-width: 50px;
	color: #fff;
	align-items: center;
`;
export const StyledChipButton = styled.button<{ $type: 'edit' | 'delete' }>`
	border: none;
	background: none;
	cursor: pointer;
	width: 18px;
	height: 18px;
	display: flex;
	align-items: center;
	background: url(${({ $type }) => ($type === 'edit' ? editIcon : deleteIcon)}) no-repeat;
	&:hover {
		background: url(${({ $type }) => ($type === 'edit' ? editHoverIcon : deleteHoverIcon)})
			no-repeat;
	}
`;
export const StyledChipCount = styled.div`
	background: #212b36;
	width: 22px;
	height: 22px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 10px;
	font-weight: 700;
`;
