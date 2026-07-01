 gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

// 状态变量必须在 scrollTrigger 回调之前声明
let isAnimating = false;
let isEntered = false;

const map = gsap.timeline({
  scrollTrigger: {
    trigger: ".maplujing",
    start: "top top",
    end: "+=300%",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    // markers: true,
    id: "map-draw",
    // 监听进度，在接近结束时触发场景切换，避免和另一个 trigger 冲突
    onUpdate: self => {
      // 当进度接近 1 时触发一次场景切换
      if (self.progress >= 0.9 && !isAnimating && !isEntered) {
        transitionTL.play();
      }
      // 当进度回到起点并且已经进入过场景，执行 reverse
      if (self.progress <= 0.85 && isEntered && !isAnimating) {
        transitionTL.reverse();
      }
    }
  }
});

map.from(
  [".cls-1", ".cls-2", ".cls-3", ".cls-4"],
  {
    drawSVG: "0%",
    ease: "power1.inOut",
    stagger: 0
  },
  0
);

map.fromTo(".map-stage svg",
  {
    scale: 1.2,
    x: 0,
    y: 10,
    ease: "none"
  },
  {
    scale: 1.8,
    x: 91,
    y: 300,
    ease: "none"
  },
  0.2
);

const transitionTL = gsap.timeline({ paused: true,
  onStart: () => {
    isAnimating = true; 
  },
  onComplete: () => {
    isAnimating = false;
    isEntered = true;
  },
  onReverseComplete: () => {
    isAnimating = false;
    isEntered = false;
  }
}); 

transitionTL.to(".mapbeforground", {
  opacity: 1,
  duration: 0.5,
  ease: "power3.out"
}, 0);
