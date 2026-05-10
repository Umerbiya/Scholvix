import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import * as dotenv from 'dotenv';
import { resolve } from 'path';

// Load .env.local
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
const auth = getAuth(app);
const db = getFirestore(app);

const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

async function seed() {
  console.log("Starting Firebase seed process...");

  // 1. Create Admin Account
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
    console.log(`✅ Admin account created successfully: ${userCredential.user.email}`);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log(`⚠️ Admin account already exists for ${adminEmail}`);
    } else {
      console.warn("⚠️ Failed to create admin account. Have you enabled Email/Password authentication in the Firebase Console?", error.message);
    }
  }

  // 2. Populate Scholarships
  const scholarships = [
    {
      title: "Fulbright Foreign Student Program",
      provider: "US Department of State",
      amount: "Full Tuition + Stipend",
      deadline: "2026-10-15",
      country: "USA",
      university: "Various US Universities",
      imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000",
      eligibilityTags: ["International", "Master's", "PhD", "All Fields"],
      url: "https://foreign.fulbrightonline.org/apply",
      description: "<p>The Fulbright Foreign Student Program enables graduate students, young professionals, and artists from abroad to study and conduct research in the United States.</p><ul><li>Full tuition coverage</li><li>Airfare included</li><li>Monthly living stipend</li></ul>",
      createdAt: new Date().toISOString()
    },
    {
      title: "Chevening Scholarships",
      provider: "UK Government",
      amount: "Fully Funded",
      deadline: "2026-11-05",
      country: "UK",
      university: "Any UK University",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1000",
      eligibilityTags: ["International", "Master's", "1 Year"],
      url: "https://www.chevening.org/apply/",
      description: "<p>Chevening is the UK government’s international awards programme aimed at developing global leaders. It offers full financial support for a one-year master’s degree.</p>",
      createdAt: new Date().toISOString()
    },
    {
      title: "DAAD EPOS Scholarship",
      provider: "German Academic Exchange Service",
      amount: "€934/month + Travel",
      deadline: "2026-09-30",
      country: "Germany",
      university: "Various German Universities",
      imageUrl: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80&w=1000",
      eligibilityTags: ["Developing Countries", "Master's", "Development"],
      url: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/?status=&origin=&subjectGrps=&daad=&q=epos&page=1&detail=50076777",
      description: "<p>The EPOS program offers scholarships for development-related postgraduate courses at German universities.</p>",
      createdAt: new Date().toISOString()
    },
    {
      title: "Eiffel Excellence Scholarship",
      provider: "French Ministry for Europe",
      amount: "€1,181/month",
      deadline: "2026-01-10",
      country: "France",
      university: "French Universities",
      imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=1000",
      eligibilityTags: ["Engineering", "Law", "Master's", "PhD"],
      url: "https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence",
      description: "<p>The Eiffel Excellence Scholarship Program was established by the French Ministry for Europe to enable French higher education institutions to attract top foreign students to enroll in their masters and PhD programs.</p>",
      createdAt: new Date().toISOString()
    }
  ];

  console.log("Seeding scholarships...");
  for (const scholarship of scholarships) {
    try {
      await addDoc(collection(db, "scholarships"), scholarship);
      console.log(`✅ Added scholarship: ${scholarship.title}`);
    } catch (e) {
      console.error(`❌ Failed to add scholarship: ${scholarship.title}`, e);
    }
  }

  // 3. Populate Guides
  const guides = [
    {
      title: "How to Write a Winning Statement of Purpose",
      category: "Tips",
      content: "<h2>1. Start with a Hook</h2><p>Your first paragraph must grab the reader's attention immediately...</p><h2>2. Align with the Program</h2><p>Explicitly mention why you chose this specific program and university...</p>",
      featuredImage: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&q=80&w=1000",
      createdAt: new Date().toISOString()
    },
    {
      title: "Mastering the Scholarship Interview",
      category: "Preparation",
      content: "<h2>Common Questions</h2><ul><li>Tell me about yourself and your background.</li><li>Why did you choose this country/university?</li><li>What are your long-term career goals?</li></ul>",
      featuredImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000",
      createdAt: new Date().toISOString()
    }
  ];

  console.log("Seeding guides...");
  for (const guide of guides) {
    try {
      await addDoc(collection(db, "guides"), guide);
      console.log(`✅ Added guide: ${guide.title}`);
    } catch (e) {
      console.error(`❌ Failed to add guide: ${guide.title}`, e);
    }
  }

  console.log("🎉 Seed process completed!");
  process.exit(0);
}

seed();
