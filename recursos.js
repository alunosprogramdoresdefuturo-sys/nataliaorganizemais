const cards =
document.querySelectorAll(".feature-card");

cards.forEach((card,index)=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition="all .8s ease";
card.style.opacity="1";
card.style.transform="translateY(0px)";

},index*150);

});