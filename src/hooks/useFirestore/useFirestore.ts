import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAeOPYt56D1TG1sRvMgwabhZdRn0NGTAiA',
  authDomain: 'karol-bartyzel-website.firebaseapp.com',
  projectId: 'karol-bartyzel-website',
  storageBucket: 'karol-bartyzel-website.appspot.com',
  messagingSenderId: '1026194432528',
  appId: '1:1026194432528:web:50d3542f603208dba22095',
  measurementId: 'G-W8GM6QH6FL',
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export { db };
