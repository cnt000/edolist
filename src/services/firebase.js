import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyAk71zGgejXb4NRzDzkLn-3BJmj9Lo9iww',
  authDomain: 'edolist-169a9.firebaseapp.com',
  databaseURL: 'https://edolist-169a9.firebaseio.com',
  projectId: 'edolist-169a9',
  storageBucket: 'edolist-169a9.appspot.com',
  messagingSenderId: '401645105155'
}

firebase.initializeApp(config)
export const storage = firebase.storage()
export const database = firebase.database()
