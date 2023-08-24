import { createContext, useContext, useEffect, useState } from "react";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendEmailVerification,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
} from "firebase/auth";

import {
    collection,
    addDoc,
    updateDoc,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    serverTimestamp,
    setDoc
  } from "firebase/firestore";

  import { auth, db } from "../config/firebaseConfig";

  const collectionName = "users";

export const saveUsers = (newUser) =>
  addDoc(collection(db, collectionName), newUser);

export const updateUser = (id, updatedFields) =>
  updateDoc(doc(db, collectionName, id), updatedFields);

export const onGetLinks = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName), callback);
  return unsub;
};

export const getUsers = () => getDocs(collection(db, collectionName));

export const deleteUser = (id) => deleteDoc(doc(db, collectionName, id));

export const getUser = (id) => getDoc(doc(db, collectionName, id));

export const saveData = async (collectionName, documentId, data, user) => {

  const collectionRef = collection(db, collectionName);

  try {
    const docRef = documentId ? doc(collectionRef, documentId) : await addDoc(collectionRef, { ...data, createdAt: serverTimestamp(), createdBy: user });
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Update existing document
      await updateDoc(docRef, { ...data, updatedAt: serverTimestamp(), updatedBy: user });
      console.log(`Document with ID ${docRef.id} updated successfully.`);
    } else {
      console.log(`Error: Document with ID ${docRef.id} does not exist.`);
    }
  } catch (error) {
    console.error(`Error saving data to Firestore: ${error}`);
  }
};

export const signup = async (email, password, data) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(auth.currentUser);
    await setDoc(doc(db, "users", auth.currentUser.uid), {
        ...data,
        timeStamp: serverTimestamp(),
    });
};

export const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
};

export const logout = () => {
    signOut(auth); 
};