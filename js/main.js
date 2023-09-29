// -------- imagenes cambiants de hdd y ssd --------
const hddDiv = document.getElementById("hdd-div");
const ssdDiv = document.getElementById("ssd-div");
const hddImg = document.getElementById("hdd-img");
const ssdImg = document.getElementById("ssd-img");

// para la img del hdd
hddDiv.addEventListener("mouseenter",()=>{
    // console.log("mouse encima de hdd");
    hddImg.src="./img/hard-disc-png.png";


})
hddDiv.addEventListener("mouseleave",()=>{
    // console.log("mouse dejando de hdd");
    hddImg.src="./img/hard-disc.png";

})

// para la img del ssd
ssdDiv.addEventListener("mouseenter",()=>{
    // console.log("mouse encima de hdd");
    ssdImg.src="./img/ssd2.png";
    ssdImg.style.width="80%";

})
ssdDiv.addEventListener("mouseleave",()=>{
    // console.log("mouse dejando de hdd");
    ssdImg.src="./img/ssd.png";
    ssdImg.style.width="100%";

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