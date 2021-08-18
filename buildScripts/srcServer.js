/**Creates an Express application. The express() function is a top-level function exported by the express module. */
import express from "express";
import path from "path";
import webpack from "webpack";
import config from "../webpack.config.dev";
/**Open stuff like URLs, files, executables. Cross-platform. */
import open from "open";
const port = 3000;
/**create an instance of express and set that to app*/
const app = express();
/**reference webpack */
const compiler = webpack(config);
/**tell express what other things we would like to use */
app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
  })
);
/**tell express which routes it should handle */
app.get("/", function (req, res) {
  /**Transfer the file at the given path. */
  res.sendFile(path.join(__dirname, "../src/index.html"));
});
/**Listen for connections.
 * A node http.Server is returned, with this application (which is a Function) as its callback. If you wish to create both an
 HTTP and HTTPS server you may do so with the "http" and "https" modules as shown here:
 */
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
