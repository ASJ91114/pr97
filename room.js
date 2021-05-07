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
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}


function getData() {
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {
                   childKey  = childSnapshot.key;
                    childData = childSnapshot.val();
                        if(childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4>" + name + "<img class='user_tick' src='data:image/jpeg;base64,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'></h4>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;
                  }
            });
      });
}

getData();

// function updateLike(message_id) {
//       button_id = message_id;
//       likes = document.getElementById(button_id).value;
//       updated_likes = Number(likes) + 1;
//       console.log(updated_likes);
//       firebase.database().ref(room_name).child(message_id).update({
//             like: updated_likes
//       });
// }


function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}

function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
