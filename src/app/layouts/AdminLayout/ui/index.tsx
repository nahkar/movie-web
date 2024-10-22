import { Outlet } from 'react-router-dom';

import { Aside } from './Aside';
import {
	StyledAdminLayoutContentWrapper,
	StyledAdminLayoutMain,
	StyledAdminLayoutWrapper,
} from './styled';

export const AdminLayout = () => {
	return (
		<StyledAdminLayoutWrapper>
			<StyledAdminLayoutMain>
				<Aside />
				<StyledAdminLayoutContentWrapper>
					<Outlet />
				</StyledAdminLayoutContentWrapper>
			</StyledAdminLayoutMain>
		</StyledAdminLayoutWrapper>
	);
};
