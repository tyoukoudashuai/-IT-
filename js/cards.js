
function initCardHover() {
  document.querySelectorAll('.cards').forEach(cards => {

    const hoverShell = cards;
    const inner = cards.querySelector(".flip-inner");

    let currentTween = null;

    const axis = cards.dataset.rotate === "x" ? "rotateX" : "rotateY";
    const scaleProp = axis === "rotateX" ? "scaleY" : "scaleX";

    function getTiltZ(card, fallback = 8) {
    const z = Number(card.dataset.tilt);
    return isNaN(z) ? fallback : z;
    }

    const flipTL = gsap.timeline({ paused: true });

    flipTL
      .addLabel("front")

      // 翻到背面
      .to(inner, {
        duration: 0.2,
        [axis]: 180,
        ease: "power4.out"
      })
      .to(inner, {
        duration: 1,
        rotateZ: getTiltZ(hoverShell),
        ease: "elastic.out(1,1)"
      },"-=0.2")
      .to(inner, {
        duration: 1.2,
        [scaleProp]: 1.05,
        ease: "elastic.out(1,0.5)"
      }, "<")
      .addLabel("back")

      // 翻回正面
      .to(inner, {
        duration: 0.3,
        [axis]: 0,
        rotateZ: 0,
        ease: "power2.out"
      })
      .to(inner, {
        duration: 1.2,
        scaleX: 1,
        ease: "elastic.out(1,0.5)"
      }, "-=0.1")

      .addLabel("frontEnd");


      function playCardSegment(tl, from, to) {
    if (currentTween) {
      try { currentTween.kill(); } catch(e) {}
      currentTween = null;
    }

    currentTween = tl.tweenFromTo(from, to, {
      onComplete: () => (currentTween = null)
    });

    return currentTween;
  };


  hoverShell.addEventListener("mouseenter", () => {
    playCardSegment(flipTL, "front", "back");
  });

  hoverShell.addEventListener("mouseleave", () => {
    playCardSegment(flipTL, "back", "frontEnd");
  });

  });
}


// hover 只负责翻卡
initCardHover();

// scroll 只负责状态
initCardScroll();

function initCardScroll() {

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".cards").forEach(el => {

  ScrollTrigger.create({
    trigger: el,
    start: "center bottom",
    end: "bottom top",
    // markers: true,

    onEnter: () => {
      el.classList.add("isActive");
      playCounter(el);
    },

    onLeaveBack: () => {
      el.classList.remove("isActive");
      resetCounter(el);
    },
    onEnterBack: () => {
      el.classList.add("isActive");
      playCounter(el);
    },
    onLeave: () => {
      el.classList.remove("isActive");
      resetCounter(el);
    }

  });
  

});

// 播放数字动画函数
function playCounter(card) {
  const counter = card.querySelector(".counter");
  if (!counter) return;

  gsap.fromTo(counter,{ 
      opacity: 0, 
      y: 40
    },
    { opacity: 1, 
      y: 0, 
      duration: 0.8, 
      ease: "power3.out" 
    }
  );
  gsap.fromTo(card.querySelector(".flip-inner"),
  { scale: 0.6,
   },
  {
    duration: 1.2,
    scale: 1,
    ease: "elastic.out(1,0.5)"
  });
  gsap.fromTo(card.querySelector(".flip-inner"),
  { opacity: 0 },
   {
    duration: 1.2,
    opacity: 1,
    ease: "power3.out"
  },"<");
  const target = parseInt(counter.dataset.target, 10);
  if (!isNaN(target)) {
    animateNumber(counter, target);
  }
}

// 重置数字函数
function resetCounter(card) {
  const counter = card.querySelectorAll(".counter");
  if (!counter) return;

  gsap.killTweensOf(counter);
  counter.forEach(el => {
    el.textContent = "0";
  });
  gsap.set(counter, {
    opacity: 0,
    y: 40
  });
}

// 数字动画函数
function animateNumber(el, target) {
  const obj = { value: 0 };


  gsap.to(obj, {
    value: target,
    duration: 1.2,
    ease: "power4.out",
    snap: { value: 1 }, // ⭐ 核心
    onUpdate: () => {
      el.textContent = obj.value;
    }
  });
}


}