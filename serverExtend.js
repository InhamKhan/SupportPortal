var express = require("express");
var eSession = require("express-session");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var portSchema = require("./portalSchema");
const { text } = require("body-parser");
const { response } = require("express");

mongoose.connect("mongodb://0.0.0.0:27017/supportPortal");
const mongoDb = mongoose.connection;
mongoDb.on("error", console.error.bind(console, "connection error"));
mongoDb.once("open", function () {
  console.log("connected to DB");
});

function addPortal(request, response) {
  console.log("addPortal info...");
  
  var ticket_Id = request.body.ticket_id;
  var tittle = request.body.tittle;
  var email = request.body.email;
  var ticketDescription = request.body.ticket_description;
  var date_Opened = request.body.open_date;
  var assingned_to = request.body.assign_to;
  var priority = request.body.check_priority;
  var status = request.body.check_status;
  var date_Closed = request.body.close_date;

  let portalSchema = mongoose.model("portal");

  let portalJson = {
    ticket_id: ticket_Id,
    tittle: tittle,
    email: email,
    ticket_description: ticketDescription,
    open_date: date_Opened,
    assign_to: assingned_to,
    check_priority: priority,
    check_status: status,
    date_Closed: date_Closed,
  };

  console.log("portal =" + JSON.stringify(portalJson));
  var temPortal = new portalSchema(portalJson);

  try {
    console.log("saving support Portal in Db");
    temPortal.save();
    console.log("Support Portal info Saved inthe DB");
  } catch (error) {
    console.error(error);
    response.status(500);
    response.end(error);
  }
  response.setHeader("Content-Type", "text/html");
  var result =
    "<html><head><tittle>Support Portal</tittle></head><body><h2>Support Portal Information of Applicant is save.....</h2></body></html>";
  response.end(result);
  console.log("portal Info added...");
}

async function updatePortal(request, response) {
  console.log("updatePortal().....");

  let portal = mongoose.model("portal");
  var doc_id = request.body.doc_id;

  var ticket_Id = request.body.ticket_id;
  var tittle = request.body.tittle;
  var email = request.body.email;
  var ticket_description = request.body.ticket_description;
  var date_Opened = request.body.open_date;
  var assingned_to = request.body.assign_to;
  var priority = request.body.check_priority;
  var status = request.body.check_status;
  var date_Closed = request.body.close_date;
  

  let queryString = {
    _id: doc_id,

  };
  console.log("queryString ="+ JSON.stringify(queryString));
  var  portalResult;
  try{
    console.log("Query Portsl from DB");
     portalResult = await portal.findOne(queryString); 
     portalResult.ticket_id =ticket_Id;
     portalResult.tiitle =tittle;
     portalResult.email =email;
     portalResult.ticket_description =ticket_description;
     portalResult.open_date =date_Opened;
     portalResult.assign_to =assingned_to;
     portalResult.check_priority  =priority;
     portalResult.check_status =status;
     portalResult.close_date =date_Closed;
    await supportPortalResult.save();
  } catch(error){
    console.log(error);
    response.status(500);
    response.end(error);
  }
  console.log("update Portal =" + portalResult);

  response.setHeader("Content-Type", "text/html");
  var result = '<html><head><tittle>Support Portal</tittle></head><body><h2> thanks for visiting Support Portal Information of Applicant is .....</h2></body></html>';
  response.end(result);
console.log("updatePortal Information..end");
}

async function reviewPortal(request, response) {
  console.log("reviewPortal().....");

  let portal = mongoose.model("portal");
  var doc_id = request.body.doc_id;
  console.log("doc_id = "+doc_id);

  var assingned_to = request.body.assign_to;
  var priority = request.body.check_priority;
  var status = request.body.check_status;
  console.log("assingned_to ="+assingned_to);
  console.log("check_priority ="+priority);
  console.log("check_status ="+status);

  let queryString = {
    _id: doc_id,

  };
 // console.log("queryString ="+ JSON.stringify(queryString));
  var  portalResult;
  try{
    console.log("Update portal in DB");
     portalResult = await portal.findOne(queryString); 

     portalResult.assign_to = assingned_to;
     portalResult.ticket_priority = priority;
     portalResult.check_status = status;
    await portalResult.save();
    console.log("Successfully updated doc = "+doc_id);
  } catch(error){
    console.log(error);
    response.status(500);
  }
  console.log("review Portal =" + portalResult);

  response.setHeader("Content-Type", "text/html");
  var result = '<html><head><tittle>Support Portal</tittle></head><body><h2> Thanks for Reviewing the Ticket ...</h2></body></html>';
  response.end(result);
  console.log("reviewPortal End.");
}
async function getPortalById(request, response){
    console.log("getPortalById()....");

    let portal = mongoose.model("portal");
    console.log("here is error");
    var doc_id = request.query.doc_id;
    console.log("here is error");
    console.log(doc_id);


    let queryString ={
        _id: doc_id,
    };
    console.log("queryString = " + JSON.stringify(queryString));
    var portalResult;
    try{
        console.log("Query from DB");
         portalResult = await portal.findOne(queryString);
    }catch(error){
        console.log(error);
        response.status(500);
          }
    console.log("portalResult = " + portalResult);

    response.render("editPortal", {portal: portalResult});
    console.log("getPortalByID () End");
}

async function listTickets(request, response){
    console.log("listTickets().... ");

    let portal = mongoose.model("portal");

    let queryString = {
        ticket_id: null,
    };

    var tickets;
    try {
        console.log("check the tickets");
        tickets = await portal.find();
    } catch (error) {
        console.log(error);
        response.status(500);
        response.end(error);
    }
    console.log("tickets= " + tickets);

    response.render("listTickets" ,{ data: tickets });
    console.log("listTickets...");
}
module.exports = {
    listTickets,
    addPortal,
    getPortalById,
    updatePortal,
    reviewPortal,
}