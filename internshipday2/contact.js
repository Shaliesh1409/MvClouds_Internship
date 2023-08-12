const firebaseConfig = {
    apiKey: "AIzaSyB9t8UZYChGAya8rrTbzVHTv7ed34C73XU",
    authDomain: "fir-c78b2.firebaseapp.com",
    databaseURL: "https://fir-c78b2-default-rtdb.firebaseio.com",
    projectId: "fir-c78b2",
    storageBucket: "fir-c78b2.appspot.com",
    messagingSenderId: "871816892384",
    appId: "1:871816892384:web:de0b3da32eb32171922585",
    measurementId: "G-CWQEE33R5R"
  };
  
  firebase.initializeApp(firebaseConfig);

    var contactformDB=firebase.database().ref('contactform');
    //listen for form submit
    document.getElementById('content').addEventListner('submit', submitform);

    // submit form
    
    function submitform(e){
        e.preventDefault();

        var name = getElementval("name");
        var lastname = getElementval("lastnameame");
        var email = getElementval("email");
        var age = getElementval("age");
        var password = getElementval("password");
        var repassword = getElementval("repassword");
        var image = getElementval("image");
        var sourceofincome = getElementval("sourceofincome");
        var gender = getElementval("hobbies");
        var gender = getElementval("gender");

            console.log(name,lastname,email,age,password,repassword,image,sourceofincome,hobbies,gender);
}

  
 const getElementval=(id) =>{
    return document.getElementById(id).value;
 };