import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUNK6S4CY29hAH1u30SokFoZ-e4mkIJmI",
  authDomain: "video-streaming-be3c2.firebaseapp.com",
  projectId: "video-streaming-be3c2",
  storageBucket: "video-streaming-be3c2.appspot.com",
  messagingSenderId: "1017755987368",
  appId: "1:1017755987368:web:83ea99b40b2627d01e019d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebaseApp;