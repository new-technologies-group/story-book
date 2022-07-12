/* eslint-disable @typescript-eslint/no-var-requires */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      postcss({
        minimize: true,
        modules: true,

        extract: true,
      }),
      commonjs(),
      json(),
      typescript({ tsconfig: './tsconfig.json' }),
      copy({
        targets: [
          { src: 'tailwind.config.js', dest: 'dist/cjs' },
          { src: 'types/twin.d.ts', dest: 'dist/cjs/types' },
        ],
      }),
      terser(),
    ],
    external: ['react', 'react-dom', 'styled-components'],
  },
  {
    input: 'dist/esm/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
