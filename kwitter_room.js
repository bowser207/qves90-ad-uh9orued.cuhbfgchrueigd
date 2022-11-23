var firebaseConfig = {
    apiKey: "AIzaSyCv-IlA7zVbYCg-sYSaB_yv8JeyOMq13hg",
    authDomain: "hyundai-chat-app.firebaseapp.com",
    projectId: "hyundai-chat-app",
    storageBucket: "hyundai-chat-app.appspot.com",
    messagingSenderId: "196472241181",
    appId: "1:196472241181:web:f3e1b21f7664eef24b5af4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("username");
  document.getElementById("username").innerHTML = "♩Welcome " + user_name + "!♩"

  function addRoom()
  {
     room_name = document.getElementById("roomname").value;
     firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name to input"
     });
     localStorage.setItem("roomname", room_name);

   window.location = "kwitter_page.html"  
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {
document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
    childKey  = childSnapshot.key;
    //Start Code
    Room_names = childKey;
    console.log("Room Name = " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+
    Room_names + "</div><hr>"
    document.getElementById("output").innerHTML += row;

    //End Code
    });
});

}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html";
}

  function logOut()
  {
    window.location = "index.html"
  }