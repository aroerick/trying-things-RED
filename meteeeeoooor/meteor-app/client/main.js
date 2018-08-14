import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from "meteor/mongo";

import './main.html';

Items = new Mongo.Collection("items");

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.input = new ReactiveVar("________");
  // this.items = Items.find().fetch()
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  input() {
    return Template.instance().input.get()
  },
  items() {
    const items = Items.find().fetch()
    return JSON.stringify(items, 0, 2)
  }
});

Template.hello.events({
  'click .up'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
  'click .down'(event, instance) {
    // decrement the counter when button is clicked
    instance.counter.set(instance.counter.get() - 1);
  },
  'click .jepp'(event, instance) {
    event.preventDefault()
    console.log(event)
    instance.input.set(event.target.previousSibling.previousSibling.value)
  }
});
