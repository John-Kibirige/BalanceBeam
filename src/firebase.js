import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC6d4ispFYMv98sGXomoOx12I4TYtZWbOk',
  authDomain: 'balance-beam-5928f.firebaseapp.com',
  databaseURL:
    'https://balance-beam-5928f-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'balance-beam-5928f',
  storageBucket: 'balance-beam-5928f.appspot.com',
  messagingSenderId: '965052681573',
  appId: '1:965052681573:web:284b86da6541509db9658c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
