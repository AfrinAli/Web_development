var firebaseConfig = 
{
    apiKey: "AIzaSyD2Z4lM8_hYQYGXIiRJurXGkaN9_FYguGA",
    authDomain: "fir-web-a2774.firebaseapp.com",
    databaseURL: "https://fir-web-a2774.firebaseio.com",
    projectId: "fir-web-a2774",
    storageBucket: "fir-web-a2774.appspot.com",
    messagingSenderId: "910252380379",
    appId: "1:910252380379:web:c6af6704e4d75f639efcfe",
    measurementId: "G-RDJTB2W87T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth().Auth().Persistance.LOCAL;
  function myFunction() {
    var email=$("#email").val();
        var password=$("#password").val();
        if(email!="" && password!="")
        {
                       firebase.auth().signInWithEmailAndPassword(email,password).then(function(){
                        window.location.href ="home.html";
                       }).catch(function(error){
                        var errorcode=error.code;
                                                var message=error.message;
                                                console.log(message);
                                                console.log(errorcode);
                                                window.alert("message:"+message);
                       });
                        
        }
        else{
            window.alert("plz fill out all fields");
        }
}
