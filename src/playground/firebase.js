import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB-GArl1XX5rNkCpFyb3DqSM8HTxh4D2kk",
  authDomain: "expensify-b743a.firebaseapp.com",
  databaseURL: "https://expensify-b743a.firebaseio.com",
  projectId: "expensify-b743a",
  storageBucket: "expensify-b743a.appspot.com",
  messagingSenderId: "158488937641"
};

firebase.initializeApp(config);

const database = firebase.database();


//
// Remove a value based on randomly generated id
//

// database.ref('notes/-LRTEoEaM2pVqHJwAQTC').remove()

//
// Update value in database based on randomly generated id
//

// database.ref('notes/-LRTEoEaM2pVqHJwAQTC').update({
//   body: 'buy food'
// })

//
// Use push to automatically generate a unique ID on on the "notes" object
//

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// Use objects instead to store data

// const firebaseNotes = {
//   notes: {
//     adpfogopfsdf: {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     asdqwdvbcvbfwfe: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// }

// 
// Firebase does not support arrays. They will be converted to objects.
//

// const notes = [{
//   id: '12',
//   title: 'First Note',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(firebaseNotes);

//
// Watch for changes to the database
//

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// })

//
// Will unsubscribe from the 'on' method
//

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000)

//
// Read the value passed to ref ONCE from the database
//

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   })

// database.ref().set({
//   name: 'Scott Snodgrass',
//   age: 24,
//   isSingle: false,
//   location: {
//     city: 'Fremont',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// })

// Overwrite, delete, or add object properties at root level to database
// database.ref().update({
//   name: 'Mike',
//   age: 29,
//   job: 'IT Administrator',
//   isSingle: null,
     // To update a single nested object, use following syntax
//   'location/city': 'Boston'
// })

//
// Overwrite the database with a string value
//
// database.ref().set('This is my data.')

//
// Overwrite a specific object in the existing database
//
// database.ref('age').set(27);
// database.ref('location/city').set('New York');

//
// Add a new object to existing database
//
// database.ref('attributes').set({
//   height: 73,
//   weight: 150
// }).then(() => {
//   console.log('Second set call worked.');
// }).catch((e) => {
//   console.log('This failed.', e);
// })

// database.ref('isSingle').set(null);

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data' , e);
// })