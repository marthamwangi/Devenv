//this files is not transpiled, so ,ust use commmonJS and ES5
//register babel to transpile before our tests
require("@babel/register")();
//disable webpack features that Mocha doen't understand
require.extensions[".css"] = function () {};
