// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@kevinmarrec/nuxt-pwa'
  ],
	app: {
		head: {
			title: "Match Scouting App",
			meta: [
				{ charset: "utf-8"},
				{ name: "viewport", content: "width=device-width, initial-scale=1"},
				{ hid: "description", name: "description", content: ""},
				{ name: "format-detection", content: "telephone=no"},
			],
			script: [
				{ hid: "fa", defer: true, src: "(url to FontAwesome CDN)" }
			],
			link: [
				{ rel: "preconnect", href: "https://fonts.google.com" },
				{ rel: "preconnect", href: "https://fonts.gstatic.com" },
				{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400&display=swap" },
			]
		}
	},  
})
