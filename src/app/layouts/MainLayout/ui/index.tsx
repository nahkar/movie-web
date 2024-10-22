import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
	return (
		<section>
			<div>
				<header>Header</header>
				<div>
					<Outlet />
				</div>
			</div>
			<footer>Footer</footer>
		</section>
	);
};
