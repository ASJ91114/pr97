var firebaseConfig = {
    apiKey: "AIzaSyCSoAqp7lLS2NUHmWREaNpmQ5XxNrDs3Hk",
    authDomain: "project-6820d.firebaseapp.com",
    databaseURL: "https://project-6820d-default-rtdb.firebaseio.com",
    projectId: "project-6820d",
    storageBucket: "project-6820d.appspot.com",
    messagingSenderId: "253461796078",
    appId: "1:253461796078:web:c53c9c2dd6e15b41d4cfff",
    measurementId: "G-6ZLS1V5NX0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME " + user_name + " !";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "add_room_name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "room.html";

}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}


function redirectToRoomName(name) {
    localStorage.setItem("room_name", name);
    window.location = "room.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}