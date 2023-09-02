// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC6d4ispFYMv98sGXomoOx12I4TYtZWbOk',
  authDomain: 'balance-beam-5928f.firebaseapp.com',
  projectId: 'balance-beam-5928f',
  storageBucket: 'balance-beam-5928f.appspot.com',
  messagingSenderId: '965052681573',
  appId: '1:965052681573:web:284b86da6541509db9658c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
