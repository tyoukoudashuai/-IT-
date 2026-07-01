const gakkaData = [
  {
    bg: "#f1b1c5",
    textColor: "#E95383",
    image: "images/merodis/jingdian1.png",
    name: "医療秘書・医師事務コース",
    text: "病院実習や資格取得を通して、<br>医療秘書・医療事務の専門知識と技術を2年間で学びます。",
    marqueeText: "医療秘書・医師事務"
  },
  {
    bg: "#f0aa4e",
    textColor: "#ED6C00",
    image: "images/merodis/kodomo.png",
    name: "こども保育コース",
    text: "子どもの成長に寄り添い、保育の専門性を実践的に学びます。",
    marqueeText: "こども保育"
  },
  {
    bg: "#61d4c7",
    textColor: "#00AC97",
    image: "images/merodis/kusuri-adviser.png",
    name: "薬剤アドバイザーコース",
    text: "薬剤の知識とアドバイス力を身につけ、医療現場で活躍します。",
    marqueeText: "薬剤アドバイザー"
  },
  {
    bg: "#a78bfa",
    textColor: "#7c3aed",
    image: "images/merodis/sika-eisei.png",
    name: "歯科衛生コース",
    text: "歯科衛生の専門知識と技術を学び、口腔健康をサポートします。",
    marqueeText: "歯科衛生"
  },
  {
    bg: "#4f92cd",
    textColor: "#005BAC",
    image: "images/merodis/sinryou-jouhou.png",
    name: "診療情報コース",
    text: "医療情報の管理と活用を学び、効率的な医療システムを構築します。",
    marqueeText: "診療情報"
  },
  {
    bg: "rgb(129, 200, 247)",
    textColor: "#00B9EF",
    image: "images/merodis/web-it.png",
    name: "WEB・ITコース",
    text: "WEB制作とITスキルを身につけ、デジタル分野で活躍します。",
    marqueeText: "WEB・IT"
  }
];


const section = document.querySelector(".gakkasyoukai");
const theme = document.querySelector(".gakkateima");
const nameEl = document.querySelector(".imagebox .name");
const textEl = document.querySelector(".imagebox .text");
const imgEl = document.querySelector(".merodiimages img");
const marqueeSpans = document.querySelectorAll(".marquee-track span");

const buttons = document.querySelectorAll(
  ".gakkasyoukai .bottons .back, .gakkasyoukai .bottons .next"
);

const items = document.querySelectorAll(".gakkasyoukai ul li");

let currentIndex = 0;


const contentTL = gsap.timeline({ paused: true });

contentTL
  .to(".imagebox", {
    opacity: 0,
    y: 20,
    duration: 0.25,
    ease: "power2.out"
  })
  .add(() => {
    // 这里“中途换内容”
  })
  .to(".imagebox", {
    opacity: 1,
    y: 0,
    duration: 0.35,
    ease: "power2.out"
  });


  items.forEach((li, index) => {
  li.addEventListener("click", () => {
    currentIndex = index;
    const data = gakkaData[index];

    contentTL.clear();

    contentTL
      .to(".imagebox", {
        opacity: 0,
        y: -20,
        duration: 0.25,
        ease: "power2.out"
      })
      .add(() => {
        // 内容切换
        imgEl.src = data.image;
        nameEl.innerHTML = data.name;
        textEl.innerHTML = data.text;

        // 背景滚动文字切换
        marqueeSpans.forEach(span => {
          span.textContent = data.marqueeText;
        });

        // 颜色切换
        section.style.backgroundColor = data.bg;
        theme.style.color = data.textColor;

        buttons.forEach(btn => {
          gsap.to(buttons, {
            backgroundColor: data.textColor,
            duration: 0.3,
            ease: "power2.out"
          });

        });
      })
      .to(".imagebox", {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out"
      });

    contentTL.play();
  });
});

// Back和Next按钮功能
const backBtn = document.querySelector(".gakkasyoukai .bottons .back");
const nextBtn = document.querySelector(".gakkasyoukai .bottons .next");

backBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + gakkaData.length) % gakkaData.length;
  items[currentIndex].click();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % gakkaData.length;
  items[currentIndex].click();
});

// 页面加载时设置初始状态为第一个学科
window.addEventListener('load', () => {
  const initialData = gakkaData[0];
  imgEl.src = initialData.image;
  nameEl.innerHTML = initialData.name;
  textEl.innerHTML = initialData.text;
  marqueeSpans.forEach(span => {
    span.textContent = initialData.marqueeText;
  });
  section.style.backgroundColor = initialData.bg;
  theme.style.color = initialData.textColor;
  buttons.forEach(btn => {
    gsap.set(btn, { backgroundColor: initialData.textColor });
  });
});

gsap.to(".marquee-track", {
  xPercent: -50,
  ease: "none",
  duration: 20,
  repeat: -1
});
// gsap.to(".marquee-track", {
//   xPercent: -50,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".gakkasyoukai",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: 1
//   }
// });
