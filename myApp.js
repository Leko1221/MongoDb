require('dotenv').config();

// Fetch the MongoDB URI from environment variables
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error('Error: MONGO_URI is not defined. Check your .env file.');
    process.exit(1);
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas!'))
.catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Define the schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
});

// Create the model
const Person = mongoose.model("Person", personSchema);

// Function to create and save a person
const createAndSavePerson = (done) => {
  const newPerson = new Person({
    name: 'John Doe',
    age: 30,
    favoriteFoods: ['Pizza', 'Burger']
  });

  newPerson.save((err, savedPerson) => {
    if (err) {
      done(err);
    } else {
      done(null, savedPerson);
    }
  });
};

// Function to find people by name
const findPeopleByName = function(personName, done) {
  Person.find({ name: personName }, function (err, personFound) {
    if (err) {
      return console.log(err);
    }
    done(null, personFound); // This will pass the found person to the callback
  });
};

// Create and save a person, then search for people by name
createAndSavePerson((err, savedPerson) => {
  if (err) {
    console.error('Error saving person:', err);
  } else {
    console.log('Saved person:', savedPerson);

    // Now find the person by name using findPeopleByName
    findPeopleByName('John Doe6', (err, personFound) => {
      if (err) {
        console.log('Error:', err);
      } else {
        console.log('Found person:', personFound);
      }

      // Close the connection after the operations are complete
      mongoose.connection.close();
    });
  }
});


// Implement createManyPeople
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, savedPeople) => {
    if (err) {
      done(err);
    } else {
      done(null, savedPeople);
    }
  });
};

// Test data
const people = [
  { name: 'Alice', age: 25, favoriteFoods: ['Apple', 'Banana'] },
  { name: 'Bob', age: 30, favoriteFoods: ['Pizza', 'Pasta'] },
  { name: 'Charlie', age: 35, favoriteFoods: ['Sushi', 'Rice'] }
];

// Call createManyPeople and log the result
createManyPeople(people, (err, savedPeople) => {
  if (err) {
    console.error('Error saving people:', err);
  } else {
    console.log('Saved people:', savedPeople);
  }
  // Close the connection after operation is done
  //mongoose.connection.close();
});

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
