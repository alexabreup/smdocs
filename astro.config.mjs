import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Departamento de Hardware',
			
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
	customCss: [
        // Relative path to your @font-face CSS file.
        './src/fonts/font-face.css',
      ],
});
