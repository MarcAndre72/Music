import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKmkD-zEumFqHDeSRIv2O-MnMZhF2jfo8",
  authDomain: "music-1972.firebaseapp.com",
  projectId: "music-1972",
  storageBucket: "music-1972.appspot.com",
  appId: "1:1075465526682:web:cd5650c62a6eb5b94a6e23",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
