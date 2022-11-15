import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/*FIREBASE */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeTt_PYWq2bu7z-R02RdHtlE65LLWVn9A",
  authDomain: "ionicdev-8e5a6.firebaseapp.com",
  projectId: "ionicdev-8e5a6",
  storageBucket: "ionicdev-8e5a6.appspot.com",
  messagingSenderId: "705914372776",
  appId: "1:705914372776:web:2611893480a43698aeb89d",
  measurementId: "G-WJZBZHL8FN"
};

// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(appFireBase);
  
router.isReady().then(() => {
  app.mount('#app');
});