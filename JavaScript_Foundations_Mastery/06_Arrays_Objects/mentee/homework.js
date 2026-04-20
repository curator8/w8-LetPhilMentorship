// HOMEWORK — SIMPLE CONTACT CARD
// -----------------------------------------------

// STEP 1: Create an array called contacts.
//         It should contain at least 2 objects.

// STEP 2: Each contact object needs:
//         name (string)
//         phone (string or number)
//         isFavorite (boolean)

let contacts = [
  {
    name: "Joel",
    phone: "252-222-3344",
    isFavorite: false,
  },
  {
    name: "katie",
    phone: "919-223-4554",
    isFavorite: true,
  },
];

// STEP 3: Log the total number of contacts.

console.log("number of contacts", contacts.length);

// STEP 4: Log the name of the first contact.

console.log("first contact name is", contacts[0].name);

// STEP 5: Update one contact’s isFavorite value.

contacts[0].isFavorite = true;

console.log("updating first contact favorite to", contacts[0].isFavorite);

// STEP 6: Add (push) a new contact object.

contacts.push({
  name: "angel",
  phone: "222-223-3333",
  isFavorite: true,
});

// STEP 7: Log the updated contacts array.

console.log(contacts);
