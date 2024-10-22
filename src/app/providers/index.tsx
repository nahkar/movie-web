import { RouterProvider } from '@/app/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';

type Props = {
	children?: ReactNode;
};

export const Providers: React.FC<Props> = ({ children }) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<GlobalStyle theme={theme} />
				<RouterProvider />
				{children}
			</ThemeProvider>
		</QueryClientProvider>
	);
};
