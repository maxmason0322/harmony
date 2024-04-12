/** @type {import('next').NextConfig} */
const nextConfig = {
	//...Other config properties
	experimental: {
		// Only run the plugin in development mode
		swcPlugins: [
			['harmony-ai-plugin', {rootDir: new URL('.', import.meta.url).pathname}]
		]
	},
}
	
export default nextConfig;