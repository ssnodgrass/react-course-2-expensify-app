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

export { firebase, database as default };