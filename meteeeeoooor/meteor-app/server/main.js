import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

Items = new Mongo.Collection("items");

Meteor.startup(() => {
  if(!Items.findOne()) {
    Items.insert({ test: "ok" });
  }
  // code to run on server at startup
});
