// models/person.js

const mongoose = require('mongoose');

// Define the schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: [String]
});

// Create the model from the schema
const Person = mongoose.model('Person', personSchema);

// Export the model so it can be used in other files
module.exports = Person;
