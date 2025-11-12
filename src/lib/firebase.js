import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Add these to your .env file (no quotes):
// VITE_FIREBASE_API_KEY=
// VITE_FIREBASE_AUTH_DOMAIN=
// VITE_FIREBASE_PROJECT_ID=
// VITE_FIREBASE_STORAGE_BUCKET=
// VITE_FIREBASE_MESSAGING_SENDER_ID=
// VITE_FIREBASE_APP_ID=

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Helpful error for missing envs
if (!firebaseConfig.apiKey || !firebaseConfig.projectId || !firebaseConfig.appId) {
  console.warn('Firebase env vars are missing. Add them to .env to enable form submissions and dashboard data.')
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
