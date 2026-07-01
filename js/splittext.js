gsap.registerPlugin(SplitText, ScrollTrigger);

const wrapper = document.querySelector(".Horizontal");
const lines = document.querySelectorAll(".Horizontalline");

const scrollTween = gsap.timeline({
  scrollTrigger: {
    trigger: wrapper,
    pin: true,//固定横向滚动区域
    scrub: true,
    end: "+=4000"
  }
});

lines.forEach((line, i) => {
  scrollTween.to(line, {
    xPercent: -100,//按 自身宽度的 100% 向左移动  
    duration: 1,//每行动画持续时间相等
    ease: "none"
  }, 0);
});



let split = SplitText.create(".Horizontalline", { type: "chars, words" });

split.words.forEach((char) => {
  gsap.from(char, {
    yPercent: "random(-200, 200)",//按 自身高度的 -200% 到 200% 之间随机移动
    rotation: "random(-20, 20)",//随机旋转角度
    ease: "back.out(1.3)",
    scrollTrigger: {
      trigger: char,
      containerAnimation: scrollTween,//关联横向滚动动画
      start: "left 100%",
      end: "left 40%",
      markers: false,
      scrub: 1//跟随滚动条
    }
  });
});
