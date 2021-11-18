var emailC = "snorrea@uia.no";
var passwordC = "12345";
var emailI;
var passwordI;

function login(){
    emailI = document.getElementById("email").value;
    passwordI = document.getElementById("pwd").value;
    console.log(emailI, passwordI)
    if(emailC === emailI && passwordI === passwordC){
        window.location.href = "./event.html";
    } else{
        alert("Feil brukernavn og passord");
    }
}