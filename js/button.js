
document.querySelectorAll('.button-innter').forEach(button => {

  const heiqiu = button.querySelector('.yajirusi-front');
  const baiqiu = button.querySelector('.yajirusi-hover');
  const textbox = button.querySelector('.text');
  const p1 = button.querySelector('.text p:first-child');
  const p2 = button.querySelector('.text p:last-child');

  const baijiantou = button.querySelector('.yajirusi-front .material-symbols-outlined');
  const heijiantou = button.querySelector('.yajirusi-hover .material-symbols-outlined');


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
      .to(button, { duration: 0.1, backgroundColor: "#ed7c9b", borderColor: "#fff" }, "start")
      .to(heiqiu, { duration: 0.5, x: -40, ease: "power4.out" }, "start")
      .to(heiqiu, { duration: 0.4, scale: 0.4 }, "start")  
      .to(baiqiu, { duration: 1, x: -5, ease: "elastic.out(1.2,1)" }, "start")
      .fromTo(baiqiu, { scale: 0.1 }, { duration: 0.5, scale: 1, ease: "elastic.out(1,1)" }, "<0.15")
      .to(heijiantou, { duration: 0.7, scale:1, ease: "elastic.out(1.5,0.9)" }, "-=0.79")
      .to(baijiantou, { duration: 0.7, x: 1, ease: "elastic.out(1.5,0.9)" }, "-=0.79")
      .to(textbox, { duration: 1, x: -35, ease: "elastic.out(1.2,1)" }, "start")
      .to(p1, { duration: 1, y: -20, ease: "elastic.out(1,1)" }, "-=1")
      .to(p2, { duration: 0.8, y: -20, ease: "elastic.out(1,0.9)" },"<")
      .addLabel("enterEnd");

    // leave 段
    master
      .to(button, { duration: 0.1, backgroundColor: "#ffffff", borderColor: "#ed7c9b" }, "enterEnd")
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












  
  

  // 找到所有按钮
  const headerButtons = document.querySelectorAll('.header-button-innter');

  // 遍历每一个按钮，做成独立的动画模块
  headerButtons.forEach(button => {

    // header页按钮
    // 选择器（与你现有的一致）
    const heiqiu = button.querySelector('.header-yajirusi-front');   // 右黑球
    const baiqiu = button.querySelector('.header-yajirusi-hover');   // 左白球
    const textbox = button.querySelector('.header-text');
    const p1 = button.querySelector('.header-text p:first-child');
    const p2 = button.querySelector('.header-text p:last-child');
    const baijiantou = button.querySelector('.header-yajirusi-front .material-symbols-outlined');
    const heijiantou = button.querySelector('.header-yajirusi-hover .material-symbols-outlined');


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






  const opcircle = document.querySelector('.opennewscircle')
  const opcontent = document.querySelector('.content')
  const pobtn = document.querySelector('.opbutton')

  gsap.set(opcontent, { scale: 1 });

  opcontent.addEventListener("mouseenter", () => {
    gsap.to(opcontent, {
      duration: 0.8,
      scale: 1.05,
      ease: "elastic.out(1.5, 0.4)"
    });
  });

  opcontent.addEventListener("mouseleave", () => {
    gsap.to(opcontent, {
      duration: 0.8,
      scale: 1,
      ease: "elastic.out(1.5, 0.4)"
    });
  });


  

  // const tlopEnter =gsap.timeline({paused :true});

  
  // opcontent.addEventListener("mouseenter",() =>{

  //   tlopEnter.clear();

  //   tlopEnter.to(opcontent, {
  //     duration: 0.6,
  //     scale: 1.05,
  //     ease: "elastic.out(1.5, 0.4)"
  //   });
  
  //   tlopEnter.play();
  // })
  // const tlopLeave =gsap.timeline({paused :true});

  // opcontent.addEventListener("mouseleave", () => {

  //   tlopLeave.clear();


  //   tlopLeave.to(opcontent,{
  //     duration:0.6,
  //     scale: 1,
  //     ease: "elastic.out(1.5, 0.4)"
  //   })

  //   tlopLeave.play();
  // })

