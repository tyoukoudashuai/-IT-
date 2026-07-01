
// opencanmpusimgae
const opcricmrodi = document.querySelector('.circlemero')

gsap.to(opcricmrodi,{
  duration: 2,
  rotation: 25,
  yoyo:true,
  repeat: -1,
  ease: "sine.inOut",
  transformOrigin:"25px 100%",
  force3D: true,
}); 


// menu-animation

const menu = document.querySelector('.menu')
const menube = document.querySelector('#menubest')
const menuho = document.querySelector('#menuhover')
const menufo = document.querySelector('#menufount')
const menunavhv = document.querySelector('#menunavhover')
const menup = document.querySelector('.menu p')
const starts = document.querySelector('.starts')
const start1 = document.querySelector('.starts .s1')
const start2 = document.querySelector('.starts .s2')
const start3 = document.querySelector('.starts .s3')



gsap.set([menu, menube, menufo, menuho, menunavhv, start1, start2, start3], {
      clearProps: "all"
    });
gsap.set([menube,menufo,menuho,menunavhv], { scaleX:1,scaleY:1, });

// pagetop時
const master = gsap.timeline({paused: true, defaults: { overwrite:"auto"}});


master
// enter段
.addLabel("start")
  .to([menube,menufo,menuho,menunavhv,menup],{
    duration:0.6,
    scaleX:1.05,
    scaleY:0.95,
    ease: "elastic.out(5,0.5)"
  })
  .to(menufo,{duration: 0.1,opacity:"0"},"<")
  .to(menuho,{duration: 0.1,opacity:"1"},"<")

  .to(starts,{opacity:"1"},"<")
  .to(start1,{duration:0.9,x:8,y:-2,rotation:270,ease:"power3.out"},"<")
  .to(start2,{duration:0.7,x:4,y:7,rotation:200,ease:"power3.out"},"<")
  .to(start3,{duration:0.8,x:-1,y:-1,rotation:250,ease:"power3.out"},"<")
  .to([start1,start2,start3],{duration:0.5,opacity:0,ease:"power1.out"},"<0.3")

.addLabel("enterEnd")
master
  .to([menube,menufo,menuho,menunavhv,menup],{
    duration: 0.5,
    scaleX:1,
    scaleY:1,
    ease: "elastic.out(1.5,0.8)"
  })
  .to(menufo,{duration: 0.1,opacity:"1"},"<")
  .to(menuho,{duration: 0.1,opacity:"0"},"<")

  .to(starts,{opacity:"0"},"<")
.addLabel("leaveEnd")



// 托住nav的menu动画
const menuNavHoverTL = gsap.timeline({ paused: true });


menuNavHoverTL.addLabel("navHoverstart");

menuNavHoverTL
  .addLabel("navHoverstart")
  .to([menuho,menufo],{
    duration: 0.1,
    opacity:"0"
  },"<")
  .to(menunavhv,{
    duration: 0.1,
    opacity:"1"
  },"<")
  .to([menube,menufo,menuho,menunavhv], {
    duration:0.5,
    scaleX: 1.05,
    scaleY: 1.05,
    ease: "elastic.out(2,0.6)"
  })
  .addLabel("navHoverenterEnd");
menuNavHoverTL
  .to(menuho,{
    duration: 0.1,
    opacity:"1"
  },"<")
  .to(menunavhv,{
    duration: 0.1,
    opacity:"0"
  },"<")
  .to([menube,menufo,menuho,menunavhv], {
    duration:0.5,
    scaleX: 1,
    scaleY: 1,
    ease: "power1.out"
  })
  .addLabel("navHoverleaveEnd");
// nav-animation

const nav = document.querySelector('nav');
const menuha = document.querySelector('#menuhand')
const navTL = gsap.timeline({
    paused: true,
    // onStart: () => (navAnimating = true),
    // onComplete: () => {
    //   navAnimating = false;
    //   navOpen = true;
    // },
    // onReverseComplete: () => {
    //   navAnimating = false;
    //   navOpen = false;

    //   master.seek("start").pause();
    //   menuNavHoverTL.seek("navHoverstart").pause();
    // }
  });
gsap.set(nav, { yPercent: -100 });


// menuClick-Animation
navTL
  .addLabel("navOpenStart")
  .set(menu, { zIndex: 2000, })
  .set([menube,menufo,menuho,menunavhv], { scaleX: 1,scaleY: 1 })
  .set([menuho,], { opacity: 1 })
  .set([menufo,menunavhv], { opacity: 0 })
  .set(menuha,{opacity:1})
  .to(menuha,{
    duration: 0.5,
    y: -15,
    ease:"power3.out"
  },"<")
 
  .to(menu,{
    duration: 0.3,
    y: -20,
    rotation: 30,
    ease:"power1.out"
  },"<")

  // nav 下来
  .to(nav, {
    yPercent: 0,
    background:"#f2668b",
    borderRadius:"0 0 50px 50px",
    duration: 0.8,
  }, )

  // menu 跟着下来
  .to(menu, {
    y: () => nav.offsetHeight - menu.offsetHeight / 2+10,
    duration: 0.8
  }, "<")


  

  // // menu 稍微 Q 一下托住 nav
  // .to(menu, {
  //   scaleY: 1.1,
  //   duration: 0.2
  // }, "-=0.2")
  // .to(menu, {
  //   scaleY: 1,
  //   duration: 0.25,
  //   ease: "elastic.out(1.5,0.6)"
  // })
  .addLabel("navOpenEnd");
navTL
.addLabel("navCloseStart")
  .set(menunavhv, { opacity: 0 })
  .to([menube,menufo,menuho,menunavhv], { scaleX: 1,scaleY: 1 })
  .to(nav, {
    yPercent: -100,
    duration: 0.8,
    borderRadius:"0px",
    background:"#FFE1E8",
  })
  .to([".visitor ul li",".navigation ul li .borderbox"],{
    duration: 0.8,
    backgroundColor:"#FFE1E8",
  },"<")
  .to(menu, {
    y: () => nav.offsetHeight - menu.offsetHeight / 2-10 - nav.offsetHeight + menu.offsetHeight / 2+10,
    duration: 0.8
  }, "<")
  .to(menu,{
    duration: 0.3,
    rotation: 0,
    ease:"power1.out"
  })
  .to([menunavhv,menuho],{
    duration: 0.1,
    opacity:"0"
  },"<")
  .to(menufo,{
    duration: 0.1,
    opacity:"1"
  },"<")
  .to(menuha,{
    duration: 0.5,  
    y: 0,
    opacity:0,
    ease:"power3.out"
  },"<")
  .addLabel("navCloseEnd")
  // .set(menufo, { opacity: 1, immediateRender: false })
  // .set([menuho, menunavhv, starts], { opacity: 0, immediateRender: false });

  
// // menu，nav控制层

// 安全播放 timeline 段落（避免残留 tween 冲突）
function playSegment(tl, fromLabel, toLabel) {
  if (currentTween) {
    try { currentTween.kill(); } catch(e) {}
    currentTween = null;
  }
  currentTween = tl.tweenFromTo(fromLabel, toLabel, {
    onComplete: () => { currentTween = null; }
  });
  return currentTween;
}
// 根据 navOpen 状态恢复/暂停 menu 相关视觉与 timeline
function resetMenuVisual() {
  if (navOpen) {
    // nav 打开时：显示 menunavhv，隐藏其他
    gsap.set([menufo, menuho, starts], { opacity: 0 });
    gsap.set(menunavhv, { opacity: 1 });
    if (master) master.seek("start").pause();
    if (menuNavHoverTL) menuNavHoverTL.seek("navHoverstart").pause();
  } else {
    // nav 关闭时：恢复初始状态（menufo 显示）
    gsap.set(menufo, { opacity: 1 });
    gsap.set([menuho, menunavhv, starts], { opacity: 0 });
    if (master) master.seek("start").pause();
    if (menuNavHoverTL) menuNavHoverTL.seek("navHoverstart").pause();
  }
}
// ===== Hover 控制层 =====

let currentTween = null;
let navOpen = false;

menu.addEventListener("mouseenter", () => {
  // navOpening/navClosing 时完全禁止 hover
  if (navTL.isActive()) return;

  if (navOpen) {
    // navOpen 时先确保状态正确，再做scale动画
    if (currentTween) currentTween.kill();
    gsap.set([menuho, menufo], { opacity: 0 });
    gsap.set(menunavhv, { opacity: 1 });
    currentTween = gsap.to([menube, menufo, menuho, menunavhv], {
      duration: 0.5,
      scaleX: 1.05,
      scaleY: 1.05,
      ease: "elastic.out(2,0.6)",
      onComplete: () => (currentTween = null)
    });
    return;
  }

  // navOpen=false 时才调用 master 的 hover 动画
  if (!master.isActive()) {
    playSegment(master, "start", "enterEnd");
  }
});

menu.addEventListener("mouseleave", () => {
  // navOpening/navClosing 时完全禁止 hover
  if (navTL.isActive()) return;

  if (navOpen) {
    // navOpen 时恢复状态
    if (currentTween) currentTween.kill();
    gsap.set([menuho], { opacity: 0 });
    gsap.set([menufo], { opacity: 1 });
    gsap.set(menunavhv, { opacity: 0 });
    currentTween = gsap.to([menube, menufo, menuho, menunavhv], {
      duration: 0.5,
      scaleX: 1,
      scaleY: 1,
      ease: "power1.out",
      onComplete: () => (currentTween = null)
    });
    return;
  }

  // navOpen=false 时才调用 master 的 hover 动画
  if (!master.isActive()) {
    playSegment(master, "enterEnd", "leaveEnd");
  }
});


// ===== Click 控制层（关键修复）=====
menu.addEventListener("click", () => {
  // 用 timeline 的状态检查代替 navAnimating flag
  const isAnimating = navTL.isActive();
  if (isAnimating) return;

  if (!navOpen) {
    navTL.tweenFromTo("navOpenStart", "navOpenEnd", {
      onComplete: () => {
        navOpen = true;
        // resetMenuVisual();
      }
    });
  } else {
    navTL.tweenFromTo("navCloseStart", "navCloseEnd", {
      onComplete: () => {
        navOpen = false;
        resetMenuVisual();
      }
    });
  }
});

// 初始状态设置
resetMenuVisual(); 






// navAnimation
// navigationsAnimation
document.querySelectorAll('.navigation ul li ').forEach(li => {
  const ngtlibox = li.querySelectorAll('.borderbox');
  const ngtlicon = li.querySelectorAll('.borderbox .material-symbols-outlined');

  li.addEventListener('mouseenter',()=>{
    gsap.to(ngtlibox,{
      duration: 1,
      scale:0.95,
      ease: "elastic.out(1, 0.4)",
    })
    gsap.to(ngtlibox,{
      duration: 0.3,
      backgroundColor:"#f68da9",
    },"<");
    gsap.to(ngtlicon,{
      duration: 0.1,
       "--fill": 1,
      ease: "power1.out",
    })
  });
  li.addEventListener('mouseleave',()=>{
    gsap.to(ngtlibox,{
      duration: 1,
      scale:1,
      ease: "elastic.out(1, 0.4)",
    });
    gsap.to(ngtlibox,{
      duration: 0.3,
      backgroundColor:"#f2668b",
    },"<");
    gsap.to(ngtlicon,{
      duration: 0.1,
       "--fill": 0,
      ease: "power1.out",
    })
  });
});

// requestsAnimation
document.querySelectorAll('.nav-button-innter').forEach(button => {

  const heiqiu = button.querySelector('.nav-yajirusi-front');
  const baiqiu = button.querySelector('.nav-yajirusi-hover');
  const textbox = button.querySelector('.nav-text');
  const p1 = button.querySelector('.nav-text p:first-child');
  const p2 = button.querySelector('.nav-text p:last-child');

  const baijiantou = button.querySelector('.nav-yajirusi-front .material-symbols-outlined');
  const heijiantou = button.querySelector('.nav-yajirusi-hover .material-symbols-outlined');


    // 先把初始状态设置
    gsap.set([heiqiu, baiqiu, textbox, p1, p2, baijiantou, heijiantou], {
      clearProps: "all"
    });
    gsap.set(heiqiu, { x: 0, scale: 1 });
    gsap.set(baiqiu, { x: 40, scale: 0.6 });
    gsap.set(textbox, { x: 0 });
    gsap.set(p1, { y: 0 });
    gsap.set(p2, { y: 20 });
    gsap.set(baijiantou, { x: 0 });
    gsap.set(heijiantou, { scale:0.1});

    // 每个按钮都有自己的 timeline
    const master = gsap.timeline({ paused: true, defaults: { overwrite: "auto" } });

    master.addLabel("start");

    // enter 段
    master
      .to(heiqiu, { duration: 0.5, x: -40, ease: "power4.out" }, "start")
      // .to(heiqiu, { duration: 0.4, scale: 0.4 }, "start")  
      .to(baiqiu, { duration: 1, x: -5, ease: "elastic.out(1.2,1)" }, "start")
      .fromTo(baiqiu, { scale: 0.1 }, { duration: 0.5, scale: 1, ease: "elastic.out(1,1)" }, "<0.15")
      .to(heijiantou, { duration: 0.7, scale:1, ease: "elastic.out(1.5,0.9)" }, "-=0.79")
      // .to(baijiantou, { duration: 0.7, x: 1, ease: "elastic.out(1.5,0.9)" }, "-=0.79")
      .to(textbox, { duration: 1, x: -35, ease: "elastic.out(1.2,1)" }, "start")
      .to(p1, { duration: 1, y: -20, ease: "elastic.out(1,1)" }, "-=1")
      .to(p2, { duration: 0.8, y: -20, ease: "elastic.out(1,0.9)" },"<")
      .addLabel("enterEnd");

    // leave 段
    master
      .to(heiqiu, { duration: 1, x: 0, ease: "elastic.out(1,1)" }, "enterEnd")
      .to(heiqiu, { duration: 0.4, scale: 1, ease: "elastic.out(1,1)" }, "enterEnd")
      .to(baiqiu, { duration: 1, x: 40, ease: "elastic.out(1,1)" }, "enterEnd")
      .to(baiqiu, { duration: 1, scale: 0.4, ease: "elastic.out(1,1)" }, "enterEnd")
      .to(heijiantou, { duration: 0.15, x: 0, ease: "power2.in" }, "-=0.8")
      .to(baijiantou, { duration: 0.7, x: 0, ease: "elastic.out(2,0.9)" }, "-=0.85")
      .to(textbox, { duration: 1, x: 0, ease: "elastic.out(1,1)" }, "enterEnd")
      .to(p1, { duration: 0.2, y: 0, ease: "power1.inOut" }, "-=1")
      .to(p2, { duration: 0.2, y: 20, ease: "power1.inOut" }, "<")
      .addLabel("leaveEnd");

    let currentTween = null;

    // hover 事件（绑定到每个 button）
    button.addEventListener("mouseenter", () => {
      if (currentTween) currentTween.kill();
      currentTween = master.tweenFromTo("start", "enterEnd", {
        onComplete: () => (currentTween = null)
      });
    });
    button.addEventListener("mouseleave", () => {
      if (currentTween) currentTween.kill();
      currentTween = master.tweenFromTo("enterEnd", "leaveEnd", {
        onComplete: () => (currentTween = null)
      });
    });

  });

  //visitor-animation 
  document.querySelectorAll('.visitor ul li').forEach(button => {
    button.addEventListener('mouseenter',()=>{
      gsap.to(button,{
        duration: 0.2,
        backgroundColor:"#f9a4bb",
        ease: "none",
      })
    });
    button.addEventListener('mouseleave',()=>{
      gsap.to(button,{
        duration: 0.5,
        backgroundColor:"#f2668b",
        ease: "none",
      })
    });
  });

  //SNSnav-animation
  document.querySelectorAll('.SNSnav ul li').forEach(button => {
    button.addEventListener('mouseenter',()=>{
      gsap.to(button,{
      duration: 0.8,
      scale: 1.2,
      ease: "elastic.out(1.5, 0.4)"
      })
    });
    button.addEventListener('mouseleave',()=>{
      gsap.to(button,{
      duration: 0.8,
      scale: 1,
      ease: "elastic.out(1.5, 0.4)"
      })
    });
  });

  //SUBnav-animation
  document.querySelectorAll('.SUBnav a').forEach(button => {
    button.addEventListener('mouseenter',()=>{
      gsap.to(button,{
      duration: 0.3,
      scale: 1.05,
      textDecoration:"none",
      ease: "power1.out",
      })
    });
    button.addEventListener('mouseleave',()=>{
      gsap.to(button,{
      duration: 0.3,
      scale: 1,
      textDecoration:"underline",
      ease: "power1.out",
      })
    });
  });
//滚动消除ui
gsap.registerPlugin(ScrollTrigger, SplitText);


gsap.to(".frame",{
    scale: 0,
    opacity: 0.5,
    ease: "none",
    scrollTrigger: {
      trigger: ".first-main",
      start: "top top",
      end: "bottom top",
      scrub: true,//跟随滚动条
      pin:".frame",
      // markers: true,
    }
  }
);

const uiOutTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".header",
    start: "top+=10 top",
    end: "top+=11 top",   // 👈 仍然是“轻轻一滚”
    pin: true,
    pinSpacing: false,
    toggleActions: "play none none reverse",
    // markers: true
  }
});
uiOutTL
  .to(".opennewscircle", {
    scale: 0,
    opacity: 0,
    transformOrigin: "center",
    ease: "elastic.in(1,1)",
    duration: 0.8
  }, 0)

  .to([".ffleftbox", ".ffrightbox"], {
    scale: 0,
    opacity: 0,
    transformOrigin: "center",
    ease: "elastic.in(1,1)",
    duration: 0.9
  }, 0)

  .to("#schoolname", {
    scale: 0,
    opacity: 0,
    transformOrigin: "center",
    ease: "elastic.in(1,1)",
    duration: 1
  }, 0)

  .to("#header-button-box", {
    scale: 0,
    opacity: 0,
    transformOrigin: "center",
    ease: "elastic.in(1,1)",
    duration: 0.7
  }, 0);



  