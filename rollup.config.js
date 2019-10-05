import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import { postcss } from 'svelte-preprocess';

const isDev = Boolean(process.env.ROLLUP_WATCH);

export default [
  // Browser bundle
  {
    input: 'src/main.js',
    output: {
      sourcemap: true,
      format: 'iife',
      name: 'app',
      file: 'public/bundle.js',
    },
    plugins: [
      svelte({
        hydratable: true,
        dev: isDev,
        css: css => {
          css.write('public/bundle.css');
        },
        preprocess: [
          postcss({
            plugins: [require('autoprefixer')],
          }),
        ],
      }),

      resolve({
        browser: true,
        dedupe: importee =>
          importee === 'svelte' || importee.startsWith('svelte/'),
      }),

      commonjs(),

      isDev &&
        livereload({
          watch: 'public/App.js',
          delay: 200,
        }),

      !isDev && terser(),
    ],
  },
  // Server bundle
  {
    input: 'src/App.svelte',
    output: {
      sourcemap: false,
      format: 'cjs',
      name: 'app',
      file: isDev ? 'public/App.js' : 'App.js',
    },
    plugins: [
      svelte({
        generate: 'ssr',
      }),
      resolve(),
      commonjs(),
      !isDev && terser(),
    ],
  },
];
