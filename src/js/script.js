
  function openForm(evt, contentName) {

    var i, tabcontent;

    tabcontent = document.getElementsByClassName("form_wrapper");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(contentName).style.display = "flex";
    
    var password = document.getElementById("password"), confirmPassword = document.getElementById("confirm-password");

    function validatePassword(){

      if(password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords Don't Match");
      } else {
        confirmPassword.setCustomValidity('');
      }
    }

    password.onchange = validatePassword;
    confirmPassword.onkeyup = validatePassword;

  }

  setTimeout(function(){
    var defaulForm = document.getElementsByClassName("form_wrapper");
    defaulForm[0].style.display = "block"; 
  },500);
