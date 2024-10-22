import { CreateCategory } from '@/features/CreateCategory';
import { CategoryList } from '@/widgets/admin/CategoryList';

import { StyledCategoriesWrapper } from './styled';

export const Categories = () => {
	return (
		<StyledCategoriesWrapper>
			<CreateCategory />
			<CategoryList />
		</StyledCategoriesWrapper>
	);
};
