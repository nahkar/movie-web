import { styled } from 'styled-components';

export const StyledCategoryListWrapper = styled.div`
	border-radius: 16px;
	padding: 24px;
	background: #212b36;
	box-shadow:
		0px 0px 2px 0px rgba(0, 0, 0, 0.2),
		0px 12px 24px -4px rgba(0, 0, 0, 0.12);
`;
export const StyledCategoryListTitle = styled.h4`
	color: #919eab;
	margin: 0 0 24px;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 22px;
`;
export const StyledCategoryList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
`;
export const StyledCategoryListItem = styled.li``;
export const StyledCategoryListModalButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const StyledCategoryListModalTitle = styled(StyledCategoryListTitle)`
	text-align: center;
	b {
		color: #161c24;
	}
`;
