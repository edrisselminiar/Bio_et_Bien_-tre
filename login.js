function f1(){
    var email =document.querySelector("#email").value;
    var email1 = document.querySelector("#email1");

    if(email==""){
    email1.textContent="Il est nécessaire d'entrer l'email";
    email1.style.color = "#ff0000";
    }
    else{
        email1.textContent="";

    }
}
function f2(){
    var moddepass =document.querySelector("#moddepass").value;
    var moddepass1 = document.querySelector("#moddepass1");

    if(moddepass==""){
        moddepass1.textContent="Il est nécessaire de saisir le code secret";
        moddepass1.style.color = "#ff0000";
    }
    else{
        moddepass1.textContent="";

    }
}

function f3(){
    var emaill =document.querySelector("#emaill").value;
    var emaill1 = document.querySelector("#emaill1");

    if(emaill==""){
    emaill1.textContent="Il est nécessaire d'entrer l'email";
    emaill1.style.color = "#ff0000";
    }
    else{
        emaill1.textContent="";

    }
}
var homme = document.querySelector("#homme");
var femme = document.querySelector("#femme");
var hommefemme = document.querySelector("#hommefemme");


function f4(){
    var moddepasss =document.querySelector("#moddepasss").value;
    var moddepasss1 = document.querySelector("#moddepasss1");
    
    
    if((homme.checked!==true)&&(femme.checked!==true)){
        hommefemme.textContent="choisissez-en un";
        hommefemme.style.color="red";

    }
    else{
        hommefemme.textContent="";

    }

    if(moddepasss==""){
        moddepasss1.textContent="Il est nécessaire de saisir le code secret";
        moddepasss1.style.color = "#ff0000";
    }
    else{
        moddepasss1.textContent="";

    }
}
function f8(){
    var moddepasss =document.querySelector("#moddepasss").value;
    var moddepasss1 = document.querySelector("#moddepasss1");
    if(moddepasss==""){
        moddepasss1.textContent="Il est nécessaire de saisir le code secret";
        moddepasss1.style.color = "#ff0000";
    }
    else{
        moddepasss1.textContent="";

    }

}
function f7(){
    if((homme.checked==true)||(femme.checked==true))
    {
        hommefemme.textContent="";

    }
}
function f5(){
    var Nom =document.querySelector("#Nom").value;
    var Nom1 = document.querySelector("#Nom1");

    if(Nom==""){
        Nom1.textContent="Il est nécessaire de saisir le code secret";
        Nom1.style.color = "#ff0000";
    }
    else{
        Nom1.textContent="";

    }
}

function f6(){
    var prenom =document.querySelector("#prenom").value;
    var prenom1 = document.querySelector("#prenom1");

    if(prenom==""){
        prenom1.textContent="Il est nécessaire de saisir le code secret";
        prenom1.style.color = "#ff0000";
    }
    else{
        prenom1.textContent="";

    }
}
function f9(){
    var moddepasss =document.querySelector("#moddepasss").value;
    var moddepasss1 = document.querySelector("#moddepasss1");
    var conpass =document.querySelector("#conpass").value;
    var conpass1 = document.querySelector("#conpass1");
    if(conpass!==moddepasss){
        conpass1.textContent="Il est nécessaire de saisir le code secret";
        conpass1.style.color = "#ff0000";
    }
    else{
        conpass1.textContent="";

    }
    
}
function f10(){
    document.querySelector("#disply").style.display = "none";
    document.querySelector("#disply1").style.display = "block";

}
function f11(){
    document.querySelector("#disply1").style.display = "none";
    document.querySelector("#disply").style.display = "block";

}