
/**
 * @type {import('next').NextConfig}
 */

const removeImports = require('next-remove-imports')();
const runtimeCaching = require('next-pwa/cache');

// next-pwa
const withPWA = require('next-pwa')({
	dest: 'public',
	disable: process.env.NODE_ENV !== 'production',
	runtimeCaching,
	register: true,
	skipWaiting: true,
	scope: '/',
	maximumFileSizeToCacheInBytes: 3000000,

});

const nextConfig = removeImports(
		withPWA({
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
		})
	);

module.exports = nextConfig;