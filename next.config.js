// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const runtimeCaching = require('next-pwa/cache')

// eslint-disable-next-line no-undef
module.exports = {
	withPWA(config) {
		config.module.rules.push({
			reactStrictMode: true,
		i18n: {
			locales: ['ru', 'nl'],
			defaultLocale: 'ru',
			localeDetection: false,
		},
		pwa: {
			// eslint-disable-next-line no-undef
			disable: process.env.NODE_ENV !== 'production',
			dest: 'public',
			runtimeCaching,
			buildExcludes: [/middleware-manifest.json$/],
		},
		});

		return config;
	},
	webpack(config) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			issuer: /\.[jt]sx?$/,
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [{
						name: 'preset-default',
						params: {
							override: {
								removeViewBox: false
							}
						}
					}]
				},

				titleProp: true,

			},
			test: /\.svg$/,
		});


		return config;
	},

	
};

