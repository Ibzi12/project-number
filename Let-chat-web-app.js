function addUser() {
  user_name=document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);

   window.location="Let-chat-web-app_room.html";
}