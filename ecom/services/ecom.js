import {
  collection,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  addDoc,
  setDoc,
  updateDoc,
  increment,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../config/firebase";

export const getProducts = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));

  const dataToReturn = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return dataToReturn;
};

export const updateFavouriteProduct = async (id) => {
  const docSnap = await getProductById(id, "productData");
  const favourited = docSnap.favourited;

  await updateDoc(doc(db, "productData", id), {
    favourited: !favourited,
  });
};

export const updateProductQuantity = async (id, size, quant) => {
  const docSnap = await getProductById(id, "productData");
  const newQty = docSnap.qty;
  newQty[size] -= quant;

  await updateDoc(doc(db, "productData", id), {
    qty: newQty,
  });
};

export const getProductById = async (id, collectionName) => {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("Document not found");
  }
  console.log(docSnap.data());
  return { id: docSnap.id, ...docSnap.data() };
};

export const addToCart = async (obj, size, quant) => {
  await setDoc(doc(db, "cart", obj.id), {
    ...obj,
    qty: { [size]: parseInt(quant) },
  });
  updateProductQuantity(obj.id, size, parseInt(quant));
};

export const deleteFromCart = async (id) => {
  const docSnap = await getProductById(id, "cart");
  const [[size, cartQty]] = Object.entries(docSnap.qty);
  await deleteDoc(doc(db, "cart", id));

  updateProductQuantity(id, size, cartQty * -1);
};
