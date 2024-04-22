var a1 =document.querySelector("#a1");
var a2 =document.querySelector("#a2");
var a3 =document.querySelector("#a3");
var a4 =document.querySelector("#a4");
var a5 =document.querySelector("#a5");
let numcli ;
    
function f1(){
    a1.style.color=" #9e121b";
    a2.style.color=" rgb(234, 234, 234)";
    a3.style.color=" rgb(234, 234, 234)";
    a4.style.color=" rgb(234, 234, 234)";
    a5.style.color=" rgb(234, 234, 234)";
    alert(numcli =1 );
}
function f2(){
    a2.style.color=" #9e121b";
    a1.style.color=" #9e121b";
    a3.style.color=" rgb(234, 234, 234)";
    a4.style.color=" rgb(234, 234, 234)";
    a5.style.color="rgb(234, 234, 234)";
    alert(numcli =2 );
}
function f3(){
    a2.style.color=" #9e121b";
    a1.style.color=" #9e121b";
    a3.style.color=" #9e121b";
    a4.style.color=" rgb(234, 234, 234)";
    a5.style.color=" rgb(234, 234, 234)";
    alert(numcli =3 );
}
function f4(){
    a2.style.color=" #9e121b";
    a1.style.color=" #9e121b";
    a3.style.color=" #9e121b";
    a4.style.color=" #9e121b";
    a5.style.color="rgb(234, 234, 234)";
    alert(numcli =4 );
}
function f5(){
   
    a2.style.color=" #9e121b";
    a1.style.color=" #9e121b";
    a3.style.color=" #9e121b";
    a4.style.color=" #9e121b";
    a5.style.color=" #9e121b";
    alert(numcli =5 );
}

function f6(){
    var text = document.querySelector("#text");
    var text1=text.textContent;
    var div =document.querySelector("div");
    var p = document.createElement("p");
    p.textContent=text1;
    div.appendChild(p);
}
// $(document).ready(function(){
//     $("#partaj").click(function(){
//     console.log($("#text1").text());

//     });

// });
