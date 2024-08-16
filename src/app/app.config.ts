import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { getAnalytics } from "firebase/analytics";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';


import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyCB4Mwvdj0f_sPH0f2qqMG0-_uLmSeYSn4",
  authDomain: "super-ace-data.firebaseapp.com",
  projectId: "super-ace-data",
  storageBucket: "super-ace-data.appspot.com",
  messagingSenderId: "27306500162",
  appId: "1:27306500162:web:0b7eada279b3565cf1cddb",
  measurementId: "G-M6728BTDP1"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
  
};
