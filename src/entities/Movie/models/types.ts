export type Movie = {
	movie_id: number;
	name: string;
	description?: string;
	image_url?: string;
	release_date?: string;
	created_at: string;
	updated_at: string;
	view_count: number;
};
export type CreateMovieInput = {
	name: string;
	description?: string;
	image_url?: string;
	release_date?: string;
};
