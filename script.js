var cursor = document.querySelector(".cursor")
var blur = document.querySelector(".blur")

document.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x+"px"
    cursor.style.top=dets.y+"px"
    blur.style.left=dets.x-150 + "px"
    blur.style.top=dets.y-150 + "px"
})

gsap.to(".nav", {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    duration: 0.5,
    height: "80px",
    scrollTrigger: {
      trigger: ".nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

  gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        makers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
  });


  gsap.from(".about_us img , .about_content", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".about_us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  // gsap.from(".cards", {
  //   scale: 0.8,
  //   // opacity:0,
  //   duration: 0.5,
  //   stagger: 0.1,
  //   scrollTrigger: {
  //     trigger: ".cards",
  //     scroller: "body",
  //     // markers:false,
  //     start: "top 70%",
  //     end: "top 65%",
  //     scrub: 1,
  //   },
  // });

  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });  