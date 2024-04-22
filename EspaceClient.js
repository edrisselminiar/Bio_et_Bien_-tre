
let numcli ;
    
function f1(){
var a1 =document.querySelector("#a1");
var a2 =document.querySelector("#a2");
var a3 =document.querySelector("#a3");
var a4 =document.querySelector("#a4");
var a5 =document.querySelector("#a5");


    a1.style.color=" #9e121b";
    a2.style.color=" rgb(234, 234, 234)";
    a3.style.color=" rgb(234, 234, 234)";
    a4.style.color=" rgb(234, 234, 234)";
    a5.style.color=" rgb(234, 234, 234)";
    numcli =1;
}
function f2(){
var a1 =document.querySelector("#a1");
var a2 =document.querySelector("#a2");
var a3 =document.querySelector("#a3");
var a4 =document.querySelector("#a4");
var a5 =document.querySelector("#a5");
    a2.style.color=" #9e121b";
    a1.style.color=" #9e121b";
    a3.style.color=" rgb(234, 234, 234)";
    a4.style.color=" rgb(234, 234, 234)";
    a5.style.color="rgb(234, 234, 234)";
    numcli =2;
}
function f3(){
var a1 =document.querySelector("#a1");
var a2 =document.querySelector("#a2");
var a3 =document.querySelector("#a3");
var a4 =document.querySelector("#a4");
var a5 =document.querySelector("#a5");
    a2.style.color=" #9e121b";
    a1.style.color=" #9e121b";
    a3.style.color=" #9e121b";
    a4.style.color=" rgb(234, 234, 234)";
    a5.style.color=" rgb(234, 234, 234)";
    numcli =3;
}
function f4(){
var a1 =document.querySelector("#a1");
var a2 =document.querySelector("#a2");
var a3 =document.querySelector("#a3");
var a4 =document.querySelector("#a4");
var a5 =document.querySelector("#a5");
    a2.style.color=" #9e121b";
    a1.style.color=" #9e121b";
    a3.style.color=" #9e121b";
    a4.style.color=" #9e121b";
    a5.style.color="rgb(234, 234, 234)";
    numcli =4;
}

function f5(){
   
var a1 =document.querySelector("#a1");
var a2 =document.querySelector("#a2");
var a3 =document.querySelector("#a3");
var a4 =document.querySelector("#a4");
var a5 =document.querySelector("#a5");
    a2.style.color=" #9e121b";
    a1.style.color=" #9e121b";
    a3.style.color=" #9e121b";
    a4.style.color=" #9e121b";
    a5.style.color=" #9e121b";
    numcli =5 ;
}





function f6(){ 

    a2.style.color=" rgb(234, 234, 234)";
    a1.style.color=" rgb(234, 234, 234)";
    a3.style.color=" rgb(234, 234, 234)";
    a4.style.color=" rgb(234, 234, 234)";
    a5.style.color=" rgb(234, 234, 234)";
    // var row =document.querySelector(".row");
    var div = document.createElement("div");
    div.classList.add("row");
    var container =document.querySelector(".container");
    


    var div1 =document.createElement("div");
    div1.classList.add("col-2");
    div.appendChild(div1);

    var text1 = document.querySelector("#text1");
    var div2 =document.createElement("div");
    var P =document.createElement("P");
    P.textContent=text1.value;
    div2.appendChild(P);
    div2.classList.add("col-6");
    div2.classList.add("coll");
    div.appendChild(div2);
    
    // text1.value=""


    var div3 =document.createElement("div");
    if(numcli==1){
        div3.innerHTML="<i id='a10' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a6' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a6' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a6' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a6' class='fa-solid fa-star'></i>";

    }
    else if(numcli==2){
        div3.innerHTML="<i id='a10' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a10' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a6' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a6' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a6' class='fa-solid fa-star'></i>";

    }
    else if(numcli==3){
        div3.innerHTML="<i id='a10' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a10' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a10' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a6' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a6' class='fa-solid fa-star'></i>";

    }
    else if(numcli==4){
        div3.innerHTML="<i id='a10' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a10' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a10' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a10' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a6' class='fa-solid fa-star'></i>";

    }
    else if(numcli==5){
        div3.innerHTML="<i id='a10' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a10' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a10' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a10' class='fa-solid fa-star'></i>";
    div3.innerHTML+="<i id='a10' class='fa-solid fa-star'></i>";

    }
    numcli=0;
    div3.classList.add("col-4");
    
    div.appendChild(div3);
    container.appendChild(div);
    container.innerHTML+="<hr>";
    // if(text1.value==""){
    //     console.log("test");
    // }
    // else{text1.value=""}
    console.log("test test test");

    // a1.style.color=" #ffff";
    // a2.style.color=" #ffff";
    // a3.style.color=" rgb(234, 234, 234)";
    // a4.style.color=" rgb(234, 234, 234)";
    // a5.style.color=" rgb(234, 234, 234)";
}