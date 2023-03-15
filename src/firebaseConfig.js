import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
	apiKey: "AIzaSyAkcU9uIbXPgSh8k9BxV-XfvRKBTvnYFLo",
  authDomain: "pds2023-b02f8.firebaseapp.com",
  databaseURL: "https://pds2023-b02f8-default-rtdb.firebaseio.com",
  projectId: "pds2023-b02f8",
  storageBucket: "pds2023-b02f8.appspot.com",
  messagingSenderId: "972267120215",
  appId: "1:972267120215:web:9b439d73ef1daa0bd86512",
  measurementId: "G-G522Y9D6SZ"
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
