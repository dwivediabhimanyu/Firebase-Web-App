
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      var x = document.getElementById("snackbar");
      x.className = "show";
      x.innerHTML += errorMessage;
      setTimeout(function(){ x.className = x.className.replace("show", "");document.getElementById("snackbar").innerHTML = ""; }, 3000);
      // ...
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
    window.location.href = "https://weblogin-c40d4.firebaseapp.com/";
  }
  


//PR3
