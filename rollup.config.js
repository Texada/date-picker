import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import path from "path";
import { terser } from "rollup-plugin-terser";

const outputConfig = {
  name: "TexadaDatePicker",
  globals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  sourcemap: true
};

const config = {
  input: "src/DateTimeField.js",
  output: [
    {
      ...outputConfig,
      dir: path.resolve(__dirname, "dist/esm"),
      format: "esm"
    },
    {
      ...outputConfig,
      dir: path.resolve(__dirname, "dist/umd"),
      format: "umd"
    },
    {
      ...outputConfig,
      dir: path.resolve(__dirname, "dist/cjs"),
      format: "cjs"
    }
  ],
  external: ["react", "react-dom"],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs({
      include: /node_modules/
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    terser()
  ]
};

export default config;
