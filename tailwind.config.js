/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
				ocean: {
					DEFAULT: 'hsl(200, 100%, 50%)',
					light: 'hsl(200, 100%, 60%)',
					dark: 'hsl(200, 100%, 40%)',
				}
    		},
			keyframes: {
				shake: {
					'0%, 100%': { transform: 'translateX(0)' },
					'20%': { transform: 'translateX(-4px)' },
					'40%': { transform: 'translateX(4px)' },
					'60%': { transform: 'translateX(-4px)' },
					'80%': { transform: 'translateX(4px)' },
				},
				'fade-in': {
					'0%': { opacity: 0, transform: 'translateY(20px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
				slide: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' },
				},
				'glow-ring': {
					'0%': { boxShadow: '0 0 10px 2px var(--glow-color)' },
					'50%': { boxShadow: '0 0 20px 6px var(--glow-color)' },
					'100%': { boxShadow: '0 0 10px 2px var(--glow-color)' },
				},
			},
			animation: {
				shake: 'shake 0.5s ease-in-out',
				'fade-in': 'fade-in 0.8s ease-out forwards',
				slide: 'slide 2s linear infinite',
				'glow-ring': 'glow-ring 3s ease-in-out infinite',
			},
    	}
    },
    plugins: [require("tailwindcss-animate")],
}