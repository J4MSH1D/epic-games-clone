import { defineStore } from "pinia";

import router from "../router/index"

import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZyvWrOC4OPdFjcLecW3gx-_zhaetLkqw",
  authDomain: "epic-ga.firebaseapp.com",
  projectId: "epic-ga",
  storageBucket: "epic-ga.appspot.com",
  messagingSenderId: "46625156034",
  appId: "1:46625156034:web:02c61065790e9cd9b3445b",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();


export const useUser = defineStore({
  id: "user",
  state: () => ({
    user: null,
  }),
  actions: {
    async signIn() {
      try {
        const response = await signInWithPopup(auth, provider);
        this.user = response.user;
        router.push("/home");
      } catch (err) {
        console.log(err.message);
      }
    },
    async signOut() {
      try {
        await signOut(auth)
        this.user = null
        router.push("/");
      } catch (err) {
        console.log(err.message);
      }
    },
    async check() {
      try {
        await onAuthStateChanged(auth, (user) => {
          if(user){
            this.user = user
          } else {
            this.user = null
          }
        })
      } catch(err) {console.log(err.message)}
    }
  },
});
