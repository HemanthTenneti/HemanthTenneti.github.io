/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,css,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			keyframes: {
				unblur: {
					'0%': { filter: 'blur(20px)' },
					'100%': { filter: 'blur(0px)' }
				},
				fadeDown: {
					'0%': { opacity: 0, transform: 'translateY(-20px)' },
					'100%': { opacity: 100, transform: 'translateY(0)' }
				},
				fadeUp: {
					'0%': { opacity: 0, transform: 'translateY(20px)' },
					'100%': { opacity: 100, transform: 'translateY(0)' }
				},
				fadeRight: {
					'0%': { opacity: 0, transform: 'translateX(-20px)' },
					'100%': { opacity: 100, transform: 'translateX(0)' }
				},
				fadeLeft: {
					'0%': { opacity: 0, transform: 'translateX(20px)' },
					'100%': { opacity: 100, transform: 'translateX(0)' }
				}
			},
			animation: {
				unblur: 'unblur 0.4s ease-in-out',
				fadeDown: 'fadeDown 0.6s ease-in-out',
				fadeUp: 'fadeUp 0.6s ease-in-out',
				fadeRight: 'fadeRight 0.6s ease-in-out',
				fadeLeft: 'fadeLeft 0.6s ease-in-out'
			}
		}
	},
	plugins: []
};
