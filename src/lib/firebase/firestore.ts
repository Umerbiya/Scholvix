import { collection, getDocs, query, orderBy, limit, doc, getDoc } from "firebase/firestore";
import { db } from "./config";
import { cache } from "react";

export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  country: string;
  eligibilityTags: string[];
  description: string;
  university: string;
  imageUrl?: string;
  url?: string;
}

export interface Guide {
  id: string;
  title: string;
  category: "Step-by-Step" | "Tips" | "Research" | string;
  content: string;
  featuredImage: string;
}

export const getLatestScholarships = cache(async (count: number = 4): Promise<Scholarship[]> => {
  try {
    const q = query(collection(db, "scholarships"), orderBy("deadline", "asc"), limit(count));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Scholarship[];
  } catch (error) {
    console.error("Error fetching scholarships:", error);
    return [];
  }
});

export const getScholarshipById = cache(async (id: string): Promise<Scholarship | null> => {
  try {
    const docRef = doc(db, "scholarships", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Scholarship;
    }
    return null;
  } catch (error) {
    console.error("Error fetching scholarship by id:", error);
    return null;
  }
});

export const getGuides = cache(async (): Promise<Guide[]> => {
  try {
    const q = query(collection(db, "guides"));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Guide[];
  } catch (error) {
    console.error("Error fetching guides:", error);
    return [];
  }
});
