import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"prueba-firebase-6cbd7","appId":"1:887132030949:web:5dc6be56f2ac1fb1b4110c","storageBucket":"prueba-firebase-6cbd7.appspot.com","apiKey":"AIzaSyAMsvicK24kY853YEthpmtiagxD3jA07uk","authDomain":"prueba-firebase-6cbd7.firebaseapp.com","messagingSenderId":"887132030949"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
