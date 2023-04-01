
const firebaseConfig = {
    apiKey: "AIzaSyD_tapPpjTCztq1c37SNH0YfyQAqbRkdoY",
    authDomain: "lets-chat-web-app-6a040.firebaseapp.com",
    projectId: "lets-chat-web-app-6a040",
    storageBucket: "lets-chat-web-app-6a040.appspot.com",
    messagingSenderId: "45566742320",
    appId: "1:45566742320:web:eb8cf54361e2ce89c302f5",
    measurementId: "G-L5NDX2CZ3Q"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



