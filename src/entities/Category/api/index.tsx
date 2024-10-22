import { apiClient } from '@/app/config/apiClient';

import { Category, CreateCategoryInput } from '../models/types';

export const api = {
	getCategories: async () => {
		try {
			const response = await apiClient.get<Category[]>(`/categories`);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	},

	createCategory: async (data: CreateCategoryInput) => {
		try {
			const response = await apiClient.post<Category>(`/categories`, data);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	},
	deleteCategory: async (id: number) => {
		try {
			const response = await apiClient.delete<Category>(`/categories/${id}`);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	},
};
