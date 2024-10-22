import { useCategories } from '@/entities/Category/hooks/useCategories';
import { Category } from '@/entities/Category/models/types';
import { Button } from '@/shared/components/Button';
import { Chip } from '@/shared/components/Chip';
import { Modal } from '@/shared/components/Modal';
import { useState } from 'react';

import {
	StyledCategoryList,
	StyledCategoryListItem,
	StyledCategoryListModalButtonWrapper,
	StyledCategoryListModalTitle,
	StyledCategoryListTitle,
	StyledCategoryListWrapper,
} from './styled';

export const CategoryList = () => {
	const { categoriesData, isLoading, deleteCategory } = useCategories();

	return (
		<StyledCategoryListWrapper>
			<StyledCategoryListTitle>Categories</StyledCategoryListTitle>
			{isLoading && <p>Loading ... </p>}
			<StyledCategoryList>
				{categoriesData?.map((category) => (
					<CategoryListItem
						key={category.category_id}
						deleteCategory={deleteCategory}
						category={category}
					/>
				))}
			</StyledCategoryList>
		</StyledCategoryListWrapper>
	);
};

type CategoryListItemProps = {
	category: Category;
	deleteCategory: (id: number) => void;
};
export const CategoryListItem = ({ category, deleteCategory }: CategoryListItemProps) => {
	const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

	const handleCloseDeleteModal = () => {
		setIsShowDeleteModal(false);
	};

	const handleShowDeleteModal = () => {
		setIsShowDeleteModal(true);
	};
	return (
		<StyledCategoryListItem key={category.category_id}>
			<Chip
				id={category.category_id}
				name={category.name}
				count={category.movie_count}
				deleteCategory={handleShowDeleteModal}
			/>

			{isShowDeleteModal && (
				<Modal onClose={handleCloseDeleteModal}>
					<StyledCategoryListModalTitle>
						Are you sure you want to delete <b>{category.name}</b> category?
					</StyledCategoryListModalTitle>
					<StyledCategoryListModalButtonWrapper>
						<Button
							name="Delete"
							variant="danger"
							onClick={() => deleteCategory(category.category_id)}
						/>
						<Button name="Cancel" onClick={handleCloseDeleteModal} />
					</StyledCategoryListModalButtonWrapper>
				</Modal>
			)}
		</StyledCategoryListItem>
	);
};
