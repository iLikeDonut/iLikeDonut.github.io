
function login() {




   var username = document.getElementById('username').value;


   var password = document.getElementById('password').value;


  


   if (username === 'hi' && password === 'dopebreh') {


       document.getElementById('error').classList.add('hide');


       window.location.href = 'home.html';


   } else {


       document.getElementById('error').classList.remove('hide');


   }


}

