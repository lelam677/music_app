import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRJmcpfKZCW5rp2lLyzU4QC4v0UM_J6GU",
  authDomain: "musicapp-fed09.firebaseapp.com",
  projectId: "musicapp-fed09",
  storageBucket: "musicapp-fed09.appspot.com",
  messagingSenderId: "143878844869",
  appId: "1:143878844869:web:110d669d2970f041885bac",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
