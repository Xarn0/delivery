// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: false,

	runtimeConfig: {
		public: {
			apiBase: "http://localhost/wp2/wp-json/wp/v2" // Проверь, что этот адрес доступен!
		}
	},

	css: ["~/assets/scss/style.scss"],

	build: {
		transpile: ["vuetify"]
	},

	modules: [
		(_options, nuxt) => {
			nuxt.hooks.hook("vite:extendConfig", (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }));
			});
		}
		//...
	],

	vite: {
		vue: {
			template: {
				transformAssetUrls
			}
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/scss/_colors.scss" as *;'
				}
			}
		}
	},
	app: {
		baseURL: "/delivery/" // GitHub Pages требует префикс
	},
	routeRules: {
		"/**": { prerender: true } // Пререндеринг всех страниц
	},
	nitro: {
		preset: "static" // Генерируем статический сайт
	},

	compatibilityDate: "2025-02-15"
});
