var tl = gsap.timeline();
tl.from("#nav h4", {
  y: -50,
  opacity: 0,
  delay: 0.5,
  duration: 1.1,
  stagger: 0.5,
});
tl.from("#main h1", {
  x: -500,
  opacity: 0,
  duration: 1.1,
  stagger: 0.8,
});
tl.from("img", {
  x: 100,
  opacity: 0,
  duration: 0.5,
  rotate: 45,
  stagger: 0.6,
});
