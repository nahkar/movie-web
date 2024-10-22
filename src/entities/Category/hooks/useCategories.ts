import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { api } from '../api';
import { CreateCategoryInput } from '../models/types';

export const useCategories = () => {
	const queryClient = useQueryClient();
	const [isLoading, setIsLoading] = useState(false);

	const { data: categoriesData, isLoading: categoriesIsLoading } = useQuery({
		queryKey: ['categories'],
		queryFn: () => api.getCategories(),
	});

	const { mutateAsync: createCategory } = useMutation({
		mutationKey: ['createCategory'],
		mutationFn: (data: CreateCategoryInput) => api.createCategory(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['categories'] });
		},
	});

	const { mutateAsync: deleteCategoryMutation } = useMutation({
		mutationKey: ['deleteCategory'],
		mutationFn: (id: number) => api.deleteCategory(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['categories'] });
		},
	});

	const deleteCategory = async (id: number) => {
		setIsLoading(true);
		await deleteCategoryMutation(id);
		setIsLoading(false);
	};

	useEffect(() => {
		setIsLoading(categoriesIsLoading);
	}, [categoriesIsLoading]);

	return {
		categoriesData,
		isLoading,
		createCategory,
		deleteCategory,
	};
};
