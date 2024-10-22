import { Link } from 'react-router-dom';

export const Nav = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/admin/dashboard">Dashboard</Link>
				</li>
				<li>
					<Link to="/admin/movies">Movies</Link>
				</li>
				<li>
					<Link to="/admin/categories">Categories</Link>
				</li>
				<li>
					<Link to="/admin/actors">Actors</Link>
				</li>
			</ul>
		</div>
	);
};
