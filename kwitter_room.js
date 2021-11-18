
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAzaPWDGowQZNbym8ZWU3SYGejNB69FGQA",
      authDomain: "kwitter-8a6c0.firebaseapp.com",
      databaseURL: "https://kwitter-8a6c0-default-rtdb.firebaseio.com",
      projectId: "kwitter-8a6c0",
      storageBucket: "kwitter-8a6c0.appspot.com",
      messagingSenderId: "823052984681",
      appId: "1:823052984681:web:5b50a39d3bbb4a22ff9df8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"  !!!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(" Room Names  "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

//End code
      });});}
getData();

function addRoom(){
      var room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update(
      {
purpose:"adding room name"
      } );
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}