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