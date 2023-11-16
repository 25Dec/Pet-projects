import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ["vuetify/styles"],
	modules: [
		(_options, nuxt) => {
			nuxt.hooks.hook("vite:extendConfig", (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }));
			});
		},
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: "@import './assets/scss/colors.scss';",
				},
			},
		},
		vue: {
			template: {
				transformAssetUrls,
			},
		},
		ssr: {
			noExternal: ["vuetify"],
		},
	},
});
