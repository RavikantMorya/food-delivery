import {getApp,getApps,initializeApp} from 'firebase/app'
import { getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDWn5cluk4Eeq7vuJiMii4Pdy57i_G6sMg", 
    authDomain: "fooddeliver-6cb37.firebaseapp.com", 
    databaseURL: "https://fooddeliver-6cb37-default-rtdb.firebaseio.com", 
    projectId: "fooddeliver-6cb37", 
    storageBucket: "fooddeliver-6cb37.appspot.com", 
    messagingSenderId: "229065725287", 
    appId: "1:229065725287:web:3a06b0dac2861730684bc2" 
  };
  
  
  // Initialize Firebase
  
  const app = getApps.length>0 ?getApp(): initializeApp(firebaseConfig);

  const firestore =getFirestore(app)

  const storage =getStorage(app)

  export {app,firestore,storage};