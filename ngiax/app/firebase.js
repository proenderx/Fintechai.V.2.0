import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; // REMOVE or comment out

const firebaseConfig = {
  apiKey: "AIzaSyDdTy1IIB80b9tK5y6FpDGRIA70_aMzslo",
  authDomain: "fintech-ai-007.firebaseapp.com",
  projectId: "fintech-ai-007",
  storageBucket: "fintech-ai-007.appspot.com",
  messagingSenderId: "49302189913",
  appId: "1:49302189913:web:c661b0984ff5630ffebe48",
  measurementId: "G-GBB9EV4R4V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Only initialize analytics in the browser
// if (typeof window !== "undefined") {
//   getAnalytics(app);
// }