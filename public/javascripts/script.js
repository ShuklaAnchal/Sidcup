var mouse= document.querySelector("#cursor")
var blur= document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    mouse.style.left=dets.x+10+"px"
    mouse.style.top=dets.y+"px"
})

document.addEventListener("mousemove", function(move){
  blur.style.left=move.x-150+"px"
  blur.style.top=move.y-160+"px"
})

var cursor2 = document.querySelectorAll("#nav h4,#arrow, .f1 img, .icons i, .f2 h2, .f3 h2, .f4 h3")
cursor2.forEach(function(move){
  move.addEventListener("mouseenter", function(elm){
    mouse.style.scale =3,
    mouse.style.backgroundColor = "transparent",
    mouse.style.border = "1px solid #fff"
  })
   
  move.addEventListener("mouseleave", function(elm){
    mouse.style.scale =1,
    mouse.style.backgroundColor = "#95c11e",
    mouse.style.border = "1px solid #95c11e"
  })
 
})


document.querySelectorAll(".card").forEach((elm)=>{

  VanillaTilt.init(elm, {
    max: 10,
    speed: 1000,
    perspective: 700
  });
})



gsap.to("#nav", {
    backgroundColor:"#000",
  height:"120px",
  duration: 0.5,
  scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -10%",
    end:"top -11%",
    scrub:1
  }
})

gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -50%",
        end:"top -90%",
        scrub:2
    }
})

gsap.from("#colon1", {
      x:-40, 
      y:-50,
      duration:3,
      scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
       start:"top 53%",
       end:"top 43%",
        scrub:3,
      //  markers:true
      }
})

gsap.from("#colon2", {
  x:40, 
  y:50,
  duration:3,
  scrollTrigger:{
    trigger:"#swipers",
    scroller:"body",
   start:"top 45%",
   end:"top 25%",
    scrub:3,
  //  markers:true
  }
})


gsap.from("#page4 h1",{
  y:50,
  duration:3,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"body",
    start:"top 66%",
    end:"top 60%",
    // markers:true,
    scrub:2
  }
})


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//Golf-lessons js-

// var border=document.querySelector(".effects h3");
//  border.addEventListener("click", function(line){
//   line.style.borderBottom = "5px solid #95C11E"
//  })