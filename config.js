import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDBLk6o43jyaSNW_fQvcmDtesOOrrSNn0s',
  authDomain: 'voting-app-28ace.firebaseapp.com',
  databaseURL: 'https://voting-app-28ace-default-rtdb.firebaseio.com',
  projectId: 'voting-app-28ace',
  storageBucket: 'voting-app-28ace.appspot.com',
  messagingSenderId: '1068236290685',
  appId: '1:1068236290685:web:605dfe6d1a2cba66050f14',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
