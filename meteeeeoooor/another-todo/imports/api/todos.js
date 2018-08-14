import { Mongo } from "meteor/mongo";

export const ToDos = new Mongo.Collection("todos");

if (Meteor.isServer) {
    Meteor.publish('todos', function todosPublication() {
      return ToDos.find({ owner: this.userId });
    });
  }

Meteor.methods({
  "todos.toggleComplete"(todo) {
    if (todo.owner !== this.userId) {
      throw new Meteor.Error(
        "todos.toggleComplete.not-authorized",
        "You are not allowed to update to-dos for other users."
      );
    }
    ToDos.update(todo._id, {
      $set: { isComplete: !todo.isComplete }
    });
  },
  "todos.deleteTodo"(todo) {
    if (todo.owner !== this.userId) {
      throw new Meteor.Error(
        "todos.deleteTodo.not-authorized",
        "You are not allowed to update to-dos for other users."
      );
    }
    ToDos.remove(todo);
  },
  "todos.addNewTodo"(todo) {
    if (todo.owner !== this.userId) {
      throw new Meteor.Error(
        "todos.addNewTodo.not-authorized",
        "You are not allowed to update to-dos for other users."
      );
    }
    ToDos.insert(todo);
  },
  "todos.clearComplete"() {
    ToDos.remove({ owner: this.userId, isComplete: true});
  }
});
