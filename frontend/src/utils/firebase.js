import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC1ABk0s21_CfbKW3Cjlr0kR1JHMSAMtNQ",
    authDomain: "coach-brad.firebaseapp.com",
    databaseURL: "https://coach-brad.firebaseio.com",
    projectId: "coach-brad",
    storageBucket: "coach-brad.appspot.com",
    messagingSenderId: "881321954519",
    appId: "1:881321954519:web:1bea3ce23013f05ad83492"
};
firebase.initializeApp(firebaseConfig);

export default firebase;