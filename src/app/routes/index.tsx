import {
	Navigate,
	RouterProvider as ReactRouterProvider,
	createBrowserRouter,
} from 'react-router-dom';

import { NotFound } from '@/pages/NotFound';
import { Actors } from '@/pages/admin/Actors';
import { Categories } from '@/pages/admin/Categories';
import { Dashboard } from '@/pages/admin/Dashboard';
import { Movies } from '@/pages/admin/Movies';
import { Home } from '@/pages/user/Home';
import { Movie } from '@/pages/user/Movie';
import { Movies as UserMovies } from '@/pages/user/Movies';

import { AdminLayout } from '../layouts/AdminLayout';
import { MainLayout } from '../layouts/MainLayout';

const router = createBrowserRouter([
	{
		path: '/admin',
		element: <AdminLayout />,
		children: [
			{
				path: '',
				element: <Navigate to="dashboard" />,
			},
			{
				path: 'dashboard',
				element: <Dashboard />,
			},
			{
				path: 'movies',
				element: <Movies />,
			},
			{
				path: 'categories',
				element: <Categories />,
			},
			{
				path: 'actors',
				element: <Actors />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
	// HOME PAGE
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: <Navigate to="home-page" />,
			},
			{
				path: 'home-page',
				element: <Home />,
			},
		],
	},
	{
		path: '/movies',
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: <UserMovies />,
			},
		],
	},
	{
		path: '/movies/:movieId',
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: <Movie />,
			},
		],
	},
]);

export const RouterProvider = () => {
	return <ReactRouterProvider router={router} />;
};
