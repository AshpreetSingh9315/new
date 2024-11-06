//locomotive attached
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//Gsap
gsap.from(".nlink", {
  stagger: 0.1,
  y: 10,
  opacity: 0,
  duration: 0.6,
  ease: Power2,
});

//shery js
Shery.textAnimate(".heading" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

//gsap

gsap.from(".anim2", {
  stagger: 0.3,
  y: 10,
  opacity: 0,
  duration: 2,
  ease: Expo,
});

//shery image effect

Shery.imageEffect(".bg2", {
  style: 3,
});

Shery.imageEffect(".bg", {
  style: 3,
});
Shery.imageEffect(".leftbg", {
  style: 4,
});

Shery.imageEffect(".rightbg", {
  style: 4,
  
//   config: {
//     uColor: { value: true },
//     uSpeed: { value: 0.53, range: [0.1, 1], rangep: [1, 10] },
//     uAmplitude: { value: 1.91, range: [0, 5] },
//     uFrequency: { value: 5.8, range: [0, 10] },
//     geoVertex: { range: [1, 64], value: 30.82 },
//     zindex: { value: -9996999, range: [-9999999, 9999999] },
//     aspect: { value: 0.6736288311718381 },
//     ignoreShapeAspect: { value: true },
//     shapePosition: { value: { x: 0, y: 0 } },
//     shapeScale: { value: { x: 0.5, y: 0.5 } },
//     shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
//     shapeRadius: { value: 0, range: [0, 2] },
//     currentScroll: { value: 0 },
//     scrollLerp: { value: 0.07 },
//     gooey: { value: false },
//     infiniteGooey: { value: false },
//     growSize: { value: 4, range: [1, 15] },
//     durationOut: { value: 1, range: [0.1, 5] },
//     durationIn: { value: 1.5, range: [0.1, 5] },
//     displaceAmount: { value: 0.5 },
//     masker: { value: true },
//     maskVal: { value: 1.37, range: [1, 5] },
//     scrollType: { value: 0 },
//     noEffectGooey: { value: true },
//     onMouse: { value: 0 },
//     noise_speed: { value: 0.2, range: [0, 10] },
//     metaball: { value: 0.2, range: [0, 2] },
//     discard_threshold: { value: 0.5, range: [0, 1] },
//     antialias_threshold: { value: 0.002, range: [0, 0.1] },
//     noise_height: { value: 0.5, range: [0, 2] },
//     noise_scale: { value: 10, range: [0, 100] },
//   },
});

//gsap

gsap.from(".bg2", {
  z: -4,
  duration: 2,
});



//shery img banne

Shery.imageEffect(".bioimg", {
  style: 5,
    gooey: true,
    // debug:true,
});


//js

document.querySelector(".video button").addEventListener("mouseover",()=>{
   gsap.to("video",{
    opacity:1,
    duration:0.5,
    ease:Power4.easeOut
   })
})
 
document.querySelector(".video button").addEventListener("mouseleave",()=>{
    gsap.to("video",{
        opacity:0,
        duration:0.5,
        ease:Power4.easeOut
       })
})
 