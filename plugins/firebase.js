import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyB1dYQ-SgaLTJpg8ZnvaOAR_xP-0Sxs5mE",
    authDomain: "genazoz3com.firebaseapp.com",
    databaseURL: "https://genazoz3com.firebaseio.com",
    projectId: "genazoz3com",
    storageBucket: "genazoz3com.appspot.com",
    messagingSenderId: "1013822662522",
    appId: "1:1013822662522:web:7a514f1f22518e1a4e18c3",
    measurementId: "G-CPQW70NNDZ"
};

!firebase.apps.length > 0 ? firebase.initializeApp(firebaseConfig): ''

export default firebase