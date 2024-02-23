  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { 
    getDatabase, 
    ref, 
    child, 
    get, 
    onValue 
  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBPKpxufPHVqvwgkeQHm2SnejY8ju2WG6M",
    authDomain: "fir-demo-38cc1.firebaseapp.com",
    projectId: "fir-demo-38cc1",
    storageBucket: "fir-demo-38cc1.appspot.com",
    messagingSenderId: "312769073597",
    appId: "1:312769073597:web:d649c7f0c7ea1db81942d4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = getDatabase();

  const messages = ref(database, '/messages');

  onValue(messages, (snapshot) => {

    //console.log(snapshot);

    const ul = document.getElementById("messages");

    ul.replaceChildren();

    snapshot.forEach((childSnapshot) => {

      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      console.log(childKey);
      console.log(childData);

      const text = document.createTextNode(childData.message);
      const li = document.createElement("li");

      li.appendChild(text);
      ul.appendChild(li);

    });

  }, {

    onlyOnce: false

  }
  )