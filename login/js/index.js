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

function myFunction2() {
    var email=$("#email").val();
        var password=$("#password").val();
        var cpassword=$("#confirmPassword").val();
        if(email!="" && password!="" && cpassword!="")
        {
                if(password == cpassword)
                {
                    firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
                      window.alert("successfully registered.");
                       }).catch(function(error){
                        var errorcode=error.code;
                                                var message=error.message;
                                                console.log(message);
                                                console.log(errorcode);
                                                window.alert("message:"+message);
                       });    
        }
        else{
            window.alert("password do not match with confirm password.");
        }

        
    }
    else{
        window.alert("please fill out this feilds.");
    }
}

function myFunction3()
{
    var auth=firebase.auth();
    var email=$("#email").val();
    if(email!="")
    {
        auth.sendPasswordResetEmail(email).then(function(){
            window.alert("please verify your email");

        }).catch(function(error){
            var errorcode=error.code;
             var message=error.message;
            console.log(message);
            console.log(errorcode);
            window.alert("message:"+message);
        });
    }else{
        window.alert("please enter email id");

    }
}

function myFunction4()
{
    firebase.auth().signOut().then(function(){
        window.location.href="signin.html";
    }).catch(function(error){

    });
}

function myFunction5()
{
    var phone=$("#phone").val();
        var address=$("#address").val();
        var bio=$("#bio").val();
        var firstname=$("#FirstName").val();
        var lastname=$("#LastName").val();
        var country=$("#country").val();
        var gender=$("#gender").val();

        var rootRef =firebase.database().ref().child("Users");
        var userID = firebase.auth().currentUser.uid;
        var userRef = rootRef.child(userID);

        if(firstname !="" && lastname!="" && phone!="" && address!="" && bio!="" && gender!="" && country!="")
        {
            var userData =
            {
                "FirstName" : firstname,
                "LastName"  : lastname,
                "bio"       : bio,
                "phone"     : phone,
                "gender"    : gender,
                "country"   : country,
                "address"   : address,
            };

            userRef.set(userData,function(error){
                if(error){
                    var errorcode=error.code;
                    var message=error.message;
                    console.log(message);
                    console.log(errorcode);
                    window.alert("message:"+message);
                }else{
                    window.location.href = "home.html"
                }
            });
        }
        else{
            window.alert("please fill out all feilds.");
        }
}

function Delete()
{
    var user = firebase.auth().currentUser;

    user.delete().then(function() {
    window.alert("deleted");
    }).catch(function(error) {
    // An error happened.
    });
    DeleteData();
}

function DeleteData(){
    var userID = firebase.auth().currentUser.uid;
              firebase.database().ref('Users/' + userID).remove();
            window.alert("data deleted");
  }

  function UpdateDataUser()
  {
      //window.location.href="update.html";
        var phone=$("#phone1").val();
        var address=$("#address1").val();
        var bio=$("#bio1").val();
        var firstname=$("#FirstName1").val();
        var lastname=$("#LastName1").val();
        var country=$("#country1").val();
        var gender=$("#gender1").val();   

    var userID = firebase.auth().currentUser.uid;
    firebase.database().ref('Users/' + userID).set({
        FirstName : firstname,
        LastName  : lastname,
        bio       : bio,
        phone     : phone,
        gender    : gender,
        country   : country,
        address   : address,  
      });
      window.alert("updated");
      window.location.href="home.html";
  }