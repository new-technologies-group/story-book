import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      babel({
        // exclude: 'node_modules/**',
        presets: [['@babel/preset-react', { runtime: 'automatic' }]],
        extensions,
      }),
      resolve({
        extensions,
      }),
      external(),
      commonjs({
        ignoreGlobal: true,
        include: /\/node_modules\//,
        namedExports: {
          react: Object.keys(require('react')),
          'react-is': Object.keys(require('react-is')),
        },
      }),
      terser(),
      typescript(),
    ],
  },
];
