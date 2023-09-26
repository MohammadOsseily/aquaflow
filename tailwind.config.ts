import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#393939',

                    secondary: '#C9CCD1',

                    accent: '#B2F042',

                    neutral: '#B2F042',

                    'base-100': '#ffffff',

                    info: '#3abff8',

                    success: '#36d399',

                    warning: '#fbbd23',

                    error: '#f87272',
                },
            },
        ],
    },
};

export default config;
