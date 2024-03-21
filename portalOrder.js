var express = require("express");
var eSession = require("express-session");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var path = require("path");
var ejs = require("ejs");
var helper = require("./serverExtend");
const portalSchema = require("./portalSchema");


var myServer = express();
myServer.use(
  eSession({ secret: "ssshhhh", saveUninitialized: true, resave: true })
);
myServer.use(bodyParser.urlencoded({ extended: true }));
myServer.use(cors({ origin: "*" }));

myServer.set("views", __dirname);
myServer.set("view engine", "ejs");

myServer.get("/portal.js", function (request, response) {
  let fpath = __dirname + "/portal.js";
  response.contentType(path.basename(fpath));
  response.sendFile(fpath);
});
myServer.get("/review.js", function (request, response) {
  let spath = __dirname + "/review.js";
  response.contentType(path.basename(spath));
  response.sendFile(spath);
});


myServer.get("/index.htm", function (request, response) {
  console.log("recived request for /index.htm");
  response.sendFile(__dirname + "/index.html");
});

myServer.get("/showPortal.htm", function (request, response) {
  console.log("recived request for /showPortal.htm");
  response.sendFile(__dirname + "/addPortal.html");
});

myServer.post("/addPortal.htm", helper.addPortal);
myServer.post("/updatePortal.htm", helper.updatePortal);

myServer.post("/reviewPortal.htm", helper.reviewPortal);


myServer.get("/editPortal.htm", helper.getPortalById);
myServer.get("/listTickets.htm", helper.listTickets);

var server = myServer.listen(8080, initFunction);

function initFunction() {
  var port = server.address().port;
  var host = server.address().address;

  console.log("host =" + host + "" + port);
}
