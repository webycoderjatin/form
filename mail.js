const firebaseConfig = {
    apiKey: "AIzaSyC5NJ9AyPtXv0Zv_AfpkWBbV-okGwj8HCs",
    authDomain: "user-data-438c0.firebaseapp.com",
    databaseURL: "https://user-data-438c0-default-rtdb.firebaseio.com",
    projectId: "user-data-438c0",
    storageBucket: "user-data-438c0.appspot.com",
    messagingSenderId: "1037563066739",
    appId: "1:1037563066739:web:e8c483098f2b0673ccad06",
    measurementId: "G-7RSBQ4LB1Y"
  };
  firebase.initializeApp(firebaseConfig);
var contactformDB = firebase.database().ref('contactform')
document.getElementById('contactform').addEventListener('submit',submitForm)

function submitForm(e){
    e.preventDefault();
    var email = getElementVal('email')
    var pwd = getElementVal('pwd')

    savemsg(email,pwd);
}

const savemsg = (email,pwd)=>{
    var newcontactForm = contactformDB.push();
    newcontactForm.set({
        email : email,
        pwd : pwd,
    })
}

const getElementVal = (id) =>{
    return document.getElementById(id).value ;
};