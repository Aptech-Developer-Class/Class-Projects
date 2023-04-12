let togglebtn = document.getElementsByClassName('redButton')[0];
let reset = document.querySelector("#reset");
let del = document.querySelector("#del");
let equal = document.querySelector("#equal");


function theme1() {
    myfunction1();
    reset.style.backgroundColor = "hsl(225, 21%, 49%)";
    reset.style.color = "hsl(0, 0%, 100%)";
    reset.style.boxShadow = "0px 4px 0px hsl(224, 28%, 35%)";
    reset.classList.add("hover");
    del.style.backgroundColor = "hsl(225, 21%, 49%)";
    del.style.color = "hsl(0, 0%, 100%)";
    del.style.boxShadow = "0px 4px 0px hsl(224, 28%, 35%)"
    del.classList.add("hover");
    equal.style.backgroundColor = "hsl(6, 63%, 50%)";
    equal.style.color = "white";
    equal.style.boxShadow = "0px 4px 0px hsl(6, 70%, 34%)";
   togglebtn.classList.add('translate1');
   togglebtn.classList.remove('translate2');
   togglebtn.classList.remove('translate3');
   document.getElementById('main-container').style.backgroundColor = "hsl(222, 26%, 31%)"
   document.getElementById("hside").style.color = "white"
   document.getElementById('red-container').style.backgroundColor = "hsl(224, 36%, 15%)";
   document.getElementById('input-side').style.backgroundColor = "hsl(224, 36%, 15%)"
   document.getElementById('input-side').style.color = "white";
   togglebtn.style.backgroundColor = "red"
   document.getElementById('number-section').style.backgroundColor = "hsl(223, 31%, 20%)"
   document.getElementById("oggle-txt1").style.color = "white";
   document.getElementById("thee").style.color = "white";
   document.getElementById("oggle-txt2").style.color = "white";
   document.getElementById("oggle-txt3").style.color = "white";
}

function theme2() {
    myfunction2();
    reset.style.backgroundColor = "hsl(185, 42%, 37%)";
    reset.style.color = "hsl(0, 0%, 100%)";
    reset.style.boxShadow = "0px 4px 0px hsl(185, 58%, 25%)"
    del.style.backgroundColor = "hsl(185, 42%, 37%)";
    del.style.color = "hsl(0, 0%, 100%)";
    del.style.boxShadow = "0px 4px 0px hsl(185, 58%, 25%)"
    equal.style.backgroundColor = "hsl(25, 98%, 40%)";
    equal.style.color = "white";
    equal.style.boxShadow = "0px 4px 0px hsl(25, 99%, 27%)";
    togglebtn.classList.add('translate2');
    togglebtn.classList.remove('translate1');
    togglebtn.classList.remove('translate3');
    document.getElementById('main-container').style.backgroundColor = "hsl(0, 0%, 90%)"
   document.getElementById("hside").style.color = "black"
   document.getElementById('input-side').style.backgroundColor = "hsl(0, 0%, 100%)"
   document.getElementById('input-side').style.color = "black"
   document.getElementById("thee").style.color = "black";
   document.getElementById('red-container').style.backgroundColor = "hsl(0, 5%, 81%)"
   togglebtn.style.backgroundColor = "hsl(25, 98%, 40%)"
   document.getElementById('number-section').style.backgroundColor = "hsl(0, 5%, 81%)"
   document.getElementById("oggle-txt1").style.color = "black";
   document.getElementById("oggle-txt2").style.color = "black";
} 

function theme3() {
    toggle3();
    reset.style.backgroundColor = "hsl(281, 89%, 26%)";
    reset.style.color = "hsl(0, 0%, 100%)";
    reset.style.boxShadow = "0px 4px 0px hsl(285, 91%, 52%)";
    del.style.backgroundColor = "hsl(281, 89%, 26%)";
    del.style.boxShadow = "0px 4px 0px hsl(285, 91%, 52%)";
    del.style.color = "hsl(0, 0%, 100%)";
    equal.style.backgroundColor = "hsl(176, 100%, 44%)";
    equal.style.boxShadow = "0px 4px 0px hsl(177, 92%, 70%)";
    equal.style.color = "black";
    togglebtn.classList.add('translate3');
    togglebtn.classList.remove('translate1');
    togglebtn.classList.remove('translate2');
    document.getElementById('main-container').style.backgroundColor = "hsl(268, 75%, 9%)"
    document.getElementById("hside").style.color = "hsl(52, 100%, 62%)"
    document.getElementById('input-side').style.backgroundColor = "hsl(268, 71%, 12%)";
    document.getElementById('input-side').style.color = "hsl(52, 100%, 62%)";
    document.getElementById('red-container').style.backgroundColor = "hsl(268, 71%, 12%)"
    togglebtn.style.backgroundColor = "hsl(176, 100%, 44%)";
    document.getElementById("thee").style.color = "hsl(52, 100%, 62%)"
    document.getElementById('number-section').style.backgroundColor = "hsl(268, 71%, 12%)"
    document.getElementsByClassName('numerals').style.color = "hsl(52, 100%, 62%)";

}


let answer = document.getElementById("input-side"); 
function show() {
 answer.value += 7;
}







function myfunction1 () {
    let numerals = document.getElementsByClassName("numerals");
   
    for(let i = 0; i < numerals.length; i++) {
       numerals[i].style.backgroundColor = "hsl(30, 25%, 89%)";
       numerals[i].style.color = "hsl(222, 26%, 31%)";
       numerals[i].style.boxShadow = "0px 4px 0px hsl(28, 16%, 65%)";
       numerals[i].classList.add('hover');
    }
}



function myfunction2 () { 
    let numerals = document.getElementsByClassName("numerals");

    document.getElementById("oggle-txt3").style.color = "black";
    document.getElementById("oggle-txt2").style.color = "black";
    document.getElementById("oggle-txt1").style.color = "black";
   
    for(let i = 0; i < numerals.length; i++) {
       numerals[i].style.backgroundColor = "hsl(30, 25%, 89%)";
       numerals[i].style.color = "hsl(268, 75%, 9%)";
       numerals[i].style.boxShadow = "0px 4px 0px hsl(28, 16%, 65%)";
    }

}

        // can also be called myfunction3
 function toggle3() {
    let numerals = document.getElementsByClassName("numerals");

     document.getElementById("oggle-txt3").style.color = "yellow";
     document.getElementById("oggle-txt2").style.color = "yellow";
     document.getElementById("oggle-txt1").style.color = "yellow";
    
     for(let i = 0; i < numerals.length; i++) {
        numerals[i].style.backgroundColor = "hsl(268, 47%, 21%)";
        numerals[i].style.color = "hsl(52, 100%, 62%)";
        numerals[i].style.boxShadow = "0px 4px 0px hsl(290, 70%, 36%)";
     }
}



