

var firebaseConfig = {
  apiKey: "AIzaSyCpZ7YIEDWmhDG05kZmd-iyPQ0PKw_HOg4",
  authDomain: "classtest-7e8d8.firebaseapp.com",
  databaseURL: "https://classtest-7e8d8-default-rtdb.firebaseio.com",
  projectId: "classtest-7e8d8",
  storageBucket: "classtest-7e8d8.appspot.com",
  messagingSenderId: "605841517622",
  appId: "1:605841517622:web:7a6c9e6df93047efc87c97",
  measurementId: "G-V1VRT0H00X"
};



function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End code
});});}

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update ({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="index.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setIem("room_name", name);
       window.location="index.html"
}

function logout()
{
      localStorage.setItem("user_name");
      localStorage.setItem("room_name");
      window.location="index.html";
}




