const { text } = require("body-parser");
var mongoose = require("mongoose");

const portalSchema = mongoose.Schema({
  ticket_id: String,
  tittle: String,
  email: String,
  ticket_description: String,
  open_date: { type: Date, default: Date.now },
  ticket_priority: { type: String, default: null },
  check_status: { type: String, default: null },
  assign_to: { type: String, default: null },
  close_date: { type: Date},
});

module.export = mongoose.model("portal", portalSchema);
