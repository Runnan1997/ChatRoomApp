import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyBdr2YtIzFvOIUGpWEGPC4KlvheWv9ETJ8",
    authDomain: "chatroom-6285f.firebaseapp.com",
    projectId: "chatroom-6285f",
    storageBucket: "chatroom-6285f.appspot.com",
    messagingSenderId: "634694227028",
    appId: "1:634694227028:web:08db9bb2b87df0b9e209c1"
  }).auth();