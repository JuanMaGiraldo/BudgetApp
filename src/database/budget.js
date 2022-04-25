import { db } from "../firebase";
import { doc, addDoc, collection, getDocs, getDoc } from "firebase/firestore";

const insertExpense = (userId, expense) => {
  const today = new Date();
  return addDoc(collection(db, "users", String(userId), "expenses"), {
    ...expense,
    month: `${today.getMonth()}-${today.getFullYear()}`,
    day: `${today.getDate()}`,
  });
};

const insertCategory = async (userId, category) => {
  return await addDoc(
    collection(db, "users", String(userId), "categories"),
    category
  );
};

export const getExpenses = async (userId) => {
  const notesSnapshot = await getDocs(
    collection(db, "users", String(userId), "expenses")
  );
  const expenses = notesSnapshot.docs.map((doc) => doc.data());
  return expenses;
};

export const getCategories = async (userId) => {
  const notesSnapshot = await getDocs(
    collection(db, "users", String(userId), "categories")
  );
  const categories = notesSnapshot.docs.map((doc) => doc.data());
  return categories;
};

export const getUserData = async (userId) => {
  const notesSnapshot = await getDoc(doc(db, "users", String(userId)));
  const expenses = notesSnapshot.data();
  return expenses;
};

export { insertExpense, insertCategory };
