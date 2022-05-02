import { initializeApp } from 'firebase/app';
import {
  signInWithPopup,
  getAuth,
  signOut,
  GithubAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAPf-7pO3zpnE2vmHEGgESp7uLWwrtGkyA',
  authDomain: 'github-repo-app-c2aa0.firebaseapp.com',
  projectId: 'github-repo-app-c2aa0',
  storageBucket: 'github-repo-app-c2aa0.appspot.com',
  messagingSenderId: '189672850873',
  appId: '1:189672850873:web:6757ad00fc64f91731a268',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const user = getAuth().currentUser;


export const signIn = () => {
  const provider = new GithubAuthProvider();
  signInWithPopup(getAuth(), provider).catch(alert);
};

export const logout = () => {
  signOut(getAuth()).catch(alert);
};
