const firebaseConfig = {
      apiKey: "AIzaSyAQJHC4rKH1XLz23kILao6f1Tk5okgCrq4",
      authDomain: "kwitter-4ccdf.firebaseapp.com",
      databaseURL: "https://kwitter-4ccdf-default-rtdb.firebaseio.com",
      projectId: "kwitter-4ccdf",
      storageBucket: "kwitter-4ccdf.appspot.com",
      messagingSenderId: "516925371100",
      appId: "1:516925371100:web:ae70259508c3df23033a19",
      measurementId: "G-JM6ED8854X"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){

      window.location = "index.html";

}
