import { defineConfig } from 'astro/config';
import path from 'path';
import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [svelte(), tailwind({ applyBaseStyles: false })],
	vite: {
		resolve: { alias: { $lib: path.resolve('./src/lib') } },
		ssr: { noExternal: ['lucide-svelte'] }
	}
});
