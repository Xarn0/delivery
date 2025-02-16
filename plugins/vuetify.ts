import "@mdi/font/css/materialdesignicons.css";
import { aliases, fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/iconsets/mdi";
import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		// ... your configuration
		icons: {
			defaultSet: "fa",
			aliases,
			sets: {
				fa,
				mdi
			}
		}
	});
	app.vueApp.use(vuetify);
});
