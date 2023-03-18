import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      // Escoge entre los temas integrados de Shiki (o agrega los tuyos propios)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dracula',
      // Agrega lenguajes de programación personalizados
      // Nota: Shiki tiene innumerables lenguajes de programación incorporados, ¡incluido .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Habilita word wrap para evitar el desplazamiento horizontal
      wrap: true,
    },
  },
  integrations: [tailwind()]
});