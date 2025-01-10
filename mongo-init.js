// mongo-init.js
db = db.getSiblingDB('localDb');

// Create and populate first table
db.users.insertMany([
    { password: "JohnDoe1", email: "john2@example.com" },
    { password: "JaneDoe2", email: "janew@example.com" }
]);
