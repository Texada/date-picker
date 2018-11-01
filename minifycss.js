const fs = require("fs");
const CleanCSS = require("clean-css");

new CleanCSS({
  level: 2
}).minify(
  [
    "node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css",
    "src/css/styles.css"
  ],
  (err, output) => {
    fs.writeFile("styles.min.css", output.styles, err => {
      if (err) {
        console.log("Error minifying css", err.message);
      } else {
        console.log("Done minifying css");
      }
    });

    fs.writeFile("examples/styles.min.css", output.styles, err => {
      if (err) {
        console.log("Error minifying css", err.message);
      } else {
        console.log("Done minifying css");
      }
    });
  }
);
