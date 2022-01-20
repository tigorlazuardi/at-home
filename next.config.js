/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		dirs: ['src'],
	},
	images: {
		domains: ['tigor.web.id'],
	},
}

module.exports = nextConfig
