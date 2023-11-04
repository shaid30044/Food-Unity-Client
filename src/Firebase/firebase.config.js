import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2afh9D1qEEUuMZxNd09ArJBQbRvDf3lA",
  authDomain: "assignment-11-6cede.firebaseapp.com",
  projectId: "assignment-11-6cede",
  storageBucket: "assignment-11-6cede.appspot.com",
  messagingSenderId: "766171761718",
  appId: "1:766171761718:web:73296feaf04ef6cc719c97",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
