/**Creates an Express application. The express() function is a top-level function exported by the express module. */
var express = require("express");
var path = require("path");
/**Open stuff like URLs, files, executables. Cross-platform. */
var open = require("open");
var port = 3000;
/**create an instance of express and set that to app*/
var app = express();
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
