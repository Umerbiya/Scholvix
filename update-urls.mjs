import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, updateDoc, doc } from "firebase/firestore";
import * as dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(process.cwd(), '.env.local') });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const URL_MAP = {
  "Fulbright Foreign Student Program": "https://foreign.fulbrightonline.org/apply",
  "Chevening Scholarships": "https://www.chevening.org/apply/",
  "DAAD EPOS Scholarship": "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/?status=&origin=&subjectGrps=&daad=&q=epos&page=1&detail=50076777",
  "Eiffel Excellence Scholarship": "https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence"
};

async function updateUrls() {
  console.log("Fetching scholarships to update URLs...");
  const snapshot = await getDocs(collection(db, "scholarships"));
  for (const document of snapshot.docs) {
    const data = document.data();
    if (URL_MAP[data.title]) {
      await updateDoc(doc(db, "scholarships", document.id), {
        url: URL_MAP[data.title]
      });
      console.log(`✅ Updated URL for ${data.title}`);
    }
  }
  console.log("Done updating URLs.");
  process.exit(0);
}

updateUrls();
