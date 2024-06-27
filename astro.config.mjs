import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	site: 'https://alexabreup.github.io',
	base: 'smdocs',

	integrations: [
		starlight({
			title: 'Departamento de Hardware/SmartPlug',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',],
			
      logo: {
        src: './src/assets/my-logo.svg',
      },
			social: {
				github: 'https://github.com/alexabreup/smartplugelt',
			},
			sidebar: [
				{
					label: 'Guia',
					label: 'Guia',
					autogenerate: { directory: 'guia' },
				},
				{
					label: 'Referencia',
					autogenerate: { directory: 'referencia' },
				},
			],
		}),
	],

});
