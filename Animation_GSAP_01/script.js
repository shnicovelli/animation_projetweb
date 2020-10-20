gsap.registerPlugin(ScrollTrigger);

const animationMaison = gsap.timeline();

ScrollTrigger.create({
  trigger: ".maison",
  markers: true,
  animation: animationMaison,
  scrub: 1.3,
  pin: true,
  start: "top",
  end: "bottom"
});

animationMaison
  .from(".base", {
    opacity: 0,
    duration: 1
  })

  .from(".toit", {
    y: "-150%",
    duration: 1
  })

  .from(".chemine", {
    y: "200%",
    opacity: 0,
    duration: 1
  });