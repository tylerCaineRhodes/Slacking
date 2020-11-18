import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC3zf-64tA2r5vDlH-eylE-8A6ziVLShXA',
  authDomain: 'slack-clone-8bb30.firebaseapp.com',
  databaseURL: 'https://slack-clone-8bb30.firebaseio.com',
  projectId: 'slack-clone-8bb30',
  storageBucket: 'slack-clone-8bb30.appspot.com',
  messagingSenderId: '924167854598',
  appId: '1:924167854598:web:7f07de402739223dd4c187',
  measurementId: 'G-9B29VY9HGE',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db as default, auth, provider };
