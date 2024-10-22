import { StyledChipButton, StyledChipCount, StyledChipWrapper } from './styled';

type Props = {
	name: string;
	id: number;
	deleteCategory: (id: number) => void;
	count?: number;
};
export const Chip = ({ name, count, id, deleteCategory }: Props) => {
	return (
		<StyledChipWrapper>
			<StyledChipButton $type="edit" />
			{name}
			{count && <StyledChipCount>{count}</StyledChipCount>}
			<StyledChipButton $type="delete" onClick={() => deleteCategory(id)} />
		</StyledChipWrapper>
	);
};
