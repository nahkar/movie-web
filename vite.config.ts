import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@components': path.resolve(__dirname, 'src/shared/components'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@config': path.resolve(__dirname, 'src/config'),
			'@services': path.resolve(__dirname, 'src/services'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@layout': path.resolve(__dirname, 'src/app/layouts'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@routes': path.resolve(__dirname, 'src/app/routes'),
			'@providers': path.resolve(__dirname, 'src/app/providers'),
			'@styles': path.resolve(__dirname, 'src/styles'),
		},
	},
	server: {
		port: 3072,
	},
});
