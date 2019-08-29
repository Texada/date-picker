const gulp = require("gulp");
const fs = require("fs");
const CleanCSS = require("clean-css");
const execSync = require("child_process").execSync;

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: "inherit",
    env: Object.assign({}, process.env, extraEnv)
  });

gulp.task("start-examples", done => {
  exec("cd examples && npm i && npm run start");
  done();
});

gulp.task("build-examples-dir", done => {
  exec("cd examples && npm i && npm run build");
  done();
});

gulp.task("build-css", done => {
  new CleanCSS({
    level: 2
  }).minify(
    [
      "node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css",
      "src/css/styles.css"
    ],
    (err, output) => {
      if (!fs.existsSync("./dist")) {
        fs.mkdirSync("./dist");
      }

      fs.writeFile("dist/styles.min.css", output.styles, err => {
        if (err) {
          done("Error minifying css: \n".concat(err.message));
        } else {
          done();
        }
      });
    }
  );
});

gulp.task("build-js", done => {
  exec("cross-env NODE_ENV=production rollup -c rollup.config.js");
  done();
});

gulp.task("publish", async done => {
  const { tag } = require("yargs").argv;

  let command = `npm publish`;
  if (tag) {
    command += ` --tag ${tag}`;
  }
  exec(command);
  done();
});

gulp.task("build", gulp.parallel("build-css", "build-js"));
gulp.task("examples", gulp.series("build-css", "start-examples"));
gulp.task("build-examples", gulp.series("build-css", "build-examples-dir"));
gulp.task("build+publish", gulp.series("build", "publish"));
