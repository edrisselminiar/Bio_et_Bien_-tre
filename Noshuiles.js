


function f1(){
    var input1 = document.querySelector("#input1").value;
    if((input1>=1)&&(input1<10)){
        var input1 = document.querySelector("#input1").value++;

    }
}
function f2(){
    var input2 =document.querySelector("#input1").value;
    if((input2<=10)&&(input2>1)){
        var input2 = document.querySelector("#input1").value--;

    };
}
function f3(){
    var select = document.querySelector(".select").value;
    var span = document.querySelectorAll(".span");
    var span1 = document.querySelectorAll(".span1");
    // var span2 =parseInt().span1;
    span1.forEach((t) => {
       
        if(select=="EUR"){
            // t.style.color = "red";
            var span2 = t.textContent;
            t.textContent=span2*0.10;

        }
        else{
            // t.style.color = "red";
            var span2 = t.textContent;
            t.textContent=span2/0.10;
        }
    });
    span.forEach((e) => {
        // e.style.color = "red";
        if(select=="MAD"){
            e.innerHTML="MAD";
       }
       else{
            e.innerHTML="EUR";
   
       }
    });

}




$(document).ready(function(){
    $(".ajoute").click(function(){
        $(".relative").fadeIn();
    });
    $(".closee").click(function(){
        $(".relative").fadeOut();

    })
    $(".relative").click(function(){
        $(".relative").fadeOut();
    });
    $(".relative .popup").click(function(e){
        e.stopPropagation();
    });
});

$(document).ready(function(){
    $(".cosmétiques").click(function(){
        $(".bio").fadeOut();
        $(".alimentaires").fadeOut();
        $(".ESSENTIELLE").fadeIn();

    });

    $(".bio1").click(function(){
        $(".ESSENTIELLE").fadeOut();
        $(".alimentaires").fadeOut();
        $(".bio").fadeIn();


    });

    $(".alimentaires1").click(function(){
        $(".bio").fadeOut();
        $(".ESSENTIELLE").fadeOut();
        $(".alimentaires").fadeIn();

    });

    $(".prixmax70").click(function(){
        $(".prix60").fadeOut();
        $(".prix40").fadeOut();
        $(".prix80").fadeIn();
        $(".prix100").fadeIn();



    });

    $(".prixmin70").click(function(){
        $(".prix80").fadeOut();
        $(".prix100").fadeOut();
        $(".prix40").fadeIn();
        $(".prix60").fadeIn();



    });
   
 
});