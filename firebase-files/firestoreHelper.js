import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { database, auth } from "./firebaseSetup";

export async function setDocToDB(data, col) {
  // the doc ID is user's uid
  try {
    setDoc(doc(database, col, auth.currentUser.uid), data, { merge: true });
  } catch (err) {
    console.log(err);
  }
}
export async function writeToDB(data, col, docId, subCol) {
  try {
    if (docId) {
      await addDoc(collection(database, col, docId, subCol), data);
    } else {
      if (col === "goals") {
        data = { ...data, owner: auth.currentUser.uid };
      }
      await addDoc(collection(database, col), data);
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getAllDocs(path) {
  try {
    const querySnapshot = await getDocs(collection(database, path));
    let newArray = [];
    querySnapshot.forEach((doc) => {
      newArray.push(doc.data());
    });
    return newArray;
  } catch (err) {
    console.log(err);
  }
}

export async function getDocFromDB(col, docId) {
  try {
    const docSnap = await getDoc(doc(database, col, docId));
    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFromDB(id) {
  try {
    await deleteDoc(doc(database, "goals", id));
  } catch (err) {
    console.log(err);
  }
}