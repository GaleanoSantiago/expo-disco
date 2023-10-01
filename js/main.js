// -------- imagenes cambiants de hdd y ssd --------
const hddDiv = document.getElementById("hdd-div");
const ssdDiv = document.getElementById("ssd-div");
const hddImg = document.getElementById("hdd-img");
const ssdImg = document.getElementById("ssd-img");
// --------- Seleccionar los botones dentro de #section-ssd --------- 
const btnsHDD = document.querySelectorAll('#section-hdd .btn-img');
// --------- Seleccionar los botones dentro de #section-ssd --------- 
const btnsSSD = document.querySelectorAll('#section-ssd .btn-img');
//--------- Arreglos con las imagenes del hdd --------- 
let imgsHdd = ["hhd.png", "hdd-back.png", "hdd-inside.png"];
//--------- Arreglos con las imagenes del ssd --------- 
let imgsSsd = ["ssd.png", "ssd-back.png", "ssd2.png"];


// -------- Nav --------
const btnNav = document.getElementById("btn-nav");
const ulNav = document.getElementById("ul-nav");
const navSide = document.getElementById("nav-side");


btnNav.addEventListener("click",()=>{
    if (navSide.classList.contains("close-nav")) {
        navSide.classList.replace("close-nav", "open-nav");
    } else if (navSide.classList.contains("open-nav")) {
        navSide.classList.replace("open-nav", "close-nav");
    }
})

for(let i=0; i< btnsHDD.length; i++){
    btnsHDD[i].addEventListener("click", ()=>{
        hddImg.src=`./img/${imgsHdd[i]}`;
    })
}

for(let i=0; i< btnsSSD.length; i++){
    btnsSSD[i].addEventListener("click", ()=>{
        ssdImg.src=`./img/${imgsSsd[i]}`;
    })
}

addEventListener("scroll",()=>{
    // Prueba animacion subrayados al hacer scroll

    let subrayado = document.getElementById("subrayado");
    let subrayado2=document.getElementById("subrayado-2");
    let subrayado3 = document.getElementById("subrayado-3");
    let subrayado4 =document.getElementById("subrayado-4");
    let subrayado5 =document.getElementById("subrayado-5");
    let subrayado6 = document.getElementById("subrayado-6");
    let subrayado7=document.getElementById("subrayado-7");
    let subrayado8 = document.getElementById("subrayado-8");
    let subrayado9 =document.getElementById("subrayado-9");
    let subrayado10 =document.getElementById("subrayado-10");
    let subrayado11 =document.getElementById("subrayado-11");
    let subrayado12 =document.getElementById("subrayado-12");

    let subsArray = [subrayado, subrayado2, subrayado3, subrayado4, subrayado5, subrayado6, subrayado7, subrayado8, subrayado9, subrayado10, subrayado11, subrayado12];

    let posicionObjt1 = subrayado.getBoundingClientRect().top;
    let posicionObjt2 = subrayado2.getBoundingClientRect().top;
    let posicionObjt3 = subrayado3.getBoundingClientRect().top;
    let posicionObjt4 = subrayado4.getBoundingClientRect().top;
    let posicionObjt5 = subrayado5.getBoundingClientRect().top;
    let posicionObjt6 = subrayado6.getBoundingClientRect().top;
    let posicionObjt7 = subrayado7.getBoundingClientRect().top;
    let posicionObjt8 = subrayado8.getBoundingClientRect().top;
    let posicionObjt9 = subrayado9.getBoundingClientRect().top;
    let posicionObjt10 = subrayado10.getBoundingClientRect().top;
    let posicionObjt11 = subrayado11.getBoundingClientRect().top;
    let posicionObjt12 = subrayado12.getBoundingClientRect().top;
    let tamanoDePantalla=window.innerHeight;

    let subPosiArray = [posicionObjt1, posicionObjt2, posicionObjt3, posicionObjt4, posicionObjt5, posicionObjt6, posicionObjt7, posicionObjt8, posicionObjt9, posicionObjt10, posicionObjt11, posicionObjt12];

    for(let i=0; i<subPosiArray.length; i++){
        if(subPosiArray[i] < (tamanoDePantalla-200)){
            subsArray[i].style.animation = "fade-sub 2s ease";
            subsArray[i].style.opacity=1;
        }
    }
})

// timeline jquery

 
$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
    $("#line-progress").css("width", "0%");
    $(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
    $("#line-progress").css("width", "19%");
    $(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
    $("#line-progress").css("width", "40%");
    $(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function () {
    $("#line-progress").css("width", "60.5%");
    $(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function () {
    $("#line-progress").css("width", "81%");
    $(".analysis").addClass("active").siblings().removeClass("active");
});

$(".step06").click(function () {
    $("#line-progress").css("width", "100%");
    $(".2020-adelante").addClass("active").siblings().removeClass("active");

});