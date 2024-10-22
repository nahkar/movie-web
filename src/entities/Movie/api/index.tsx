import { apiClient } from '@/app/config/apiClient';

import { CreateMovieInput, Movie } from '../models/types';

export const api = {
	getMovies: async () => {
		try {
			const response = await apiClient.get<Movie[]>(`/movies`);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	},

	createMovie: async (data: CreateMovieInput) => {
		try {
			const response = await apiClient.post<Movie>(`/movies`, data);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	},
	deleteMovie: async (id: number) => {
		try {
			const response = await apiClient.delete<Movie>(`/movies/${id}`);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	},
};
