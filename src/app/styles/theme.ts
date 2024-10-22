export const theme = {
	light: {
		colors: {
			primary: '#E9EED9',
			secondary: '#CBD2A4',
			tertiary: '#9A7E6F',
			text: '#222',
			textSecondary: '#54473F',
		},
	},
	dark: {},
} as const;

export type ThemeT = typeof theme;
