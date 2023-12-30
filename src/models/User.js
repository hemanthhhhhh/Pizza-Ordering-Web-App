import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    name: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String},
    // image: {type: String},
}, {timestamps: true});

export const User = models?.User || model('User', UserSchema)


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB4igV35mCYGmtycDRNRnB1riOPqBH9-rw",
//   authDomain: "food-ordering-15e9c.firebaseapp.com",
//   projectId: "food-ordering-15e9c",
//   storageBucket: "food-ordering-15e9c.appspot.com",
//   messagingSenderId: "650208643386",
//   appId: "1:650208643386:web:1bf0619420e434754aa803",
//   measurementId: "G-NFN45BRFY9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);