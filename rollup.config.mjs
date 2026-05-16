import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from '@rollup/plugin-terser';
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        entryFileNames: "cjs/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        dir: "dist",
        entryFileNames: "esm/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
		peerDepsExternal(),
    	resolve(),
    	commonjs(),
    	typescript({ tsconfig: "./tsconfig.json", declaration: true, declarationDir: "dist/types" }),
		postcss(),
		terser(),
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.s?css$/],
  },
];
