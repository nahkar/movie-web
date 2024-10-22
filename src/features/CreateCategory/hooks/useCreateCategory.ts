import { useCategories } from '@/entities/Category/hooks/useCategories';
import { useCallback, useState } from 'react';

export const useCreateCategory = () => {
	const { createCategory } = useCategories();
	const [isShowCreateCategoryForm, setIsShowCreateCategoryForm] = useState(false);
	const [categoryName, setCategoryName] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const handleShowCreateCategoryForm = useCallback(() => {
		setIsShowCreateCategoryForm(true);
	}, [setIsShowCreateCategoryForm]);

	const handleCloseCreateCategoryForm = useCallback(() => {
		setIsShowCreateCategoryForm(false);
	}, [setIsShowCreateCategoryForm]);

	const onSubmit = async (e?: React.SyntheticEvent) => {
		e?.preventDefault();

		setIsLoading(true);
		await createCategory({ name: categoryName });
		setIsLoading(false);
		setIsShowCreateCategoryForm(false);
		setCategoryName('');
	};

	return {
		isShowCreateCategoryForm,
		handleShowCreateCategoryForm,
		handleCloseCreateCategoryForm,
		onSubmit,
		categoryName,
		setCategoryName,
		isLoading,
	};
};
