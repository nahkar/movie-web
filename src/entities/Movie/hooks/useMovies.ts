import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { api } from '../api';
import { CreateMovieInput } from '../models/types';

export const useMovies = () => {
	const queryClient = useQueryClient();
	const [isLoading, setIsLoading] = useState(false);

	const { data: moviesData, isLoading: moviesIsLoading } = useQuery({
		queryKey: ['movies'],
		queryFn: () => api.getMovies(),
	});

	const { mutateAsync: createMovie } = useMutation({
		mutationKey: ['createMovie'],
		mutationFn: (data: CreateMovieInput) => api.createMovie(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['movies'] });
		},
	});

	const { mutateAsync: deleteMovieMutation } = useMutation({
		mutationKey: ['deleteMovie'],
		mutationFn: (id: number) => api.deleteMovie(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['movies'] });
		},
	});

	const deleteMovie = async (id: number) => {
		setIsLoading(true);
		await deleteMovieMutation(id);
		setIsLoading(false);
	};

	useEffect(() => {
		setIsLoading(moviesIsLoading);
	}, [moviesIsLoading]);

	return {
		moviesData,
		isLoading,
		createMovie,
		deleteMovie,
	};
};
