gsap.registerPlugin(ScrollTrigger);

const animationTombe = gsap.timeline();

ScrollTrigger.create({
  trigger: ".ensemble",
  markers: true,
  animation: animationTombe,
  scrub: 1.3,
  pin: true,
  start: "top",
  end: "bottom"
});

animationTombe
  .from(".terre", {
    scale: 0,
    duration: 1
  })

  .from(".tombe", {
    opacity: 0,
    y: "-100%"
  })
  .from(".texte", {
    opacity: 0,
    duration: 1
  })
  .from(".hirondelle", {
    opacity: 0,
    x: "-500%"
  });