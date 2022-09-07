const HTMLelements = document.querySelectorAll('.nav-link.html');
HTMLelements.forEach(HTMLelement => {
    HTMLelement.addEventListener('click', function handleClick(event) {

    const active = document.querySelector('.nav-link.html.active');
    active.classList.remove('active');
    HTMLelement.classList.add('active');

    const noDisplay = document.querySelector(`.card-body.${active.innerHTML}`)
    const Display = document.querySelector(`.card-body.${HTMLelement.innerHTML}`)

    noDisplay.classList.remove('display-true');
    Display.classList.remove('display-false');
    Display.classList.add('display-true');
    noDisplay.classList.add('display-false');


  });
});

const CSSelements = document.querySelectorAll('.nav-link.css');
CSSelements.forEach(CSSelement => {
    CSSelement.addEventListener('click', function handleClick(event) {

    const active = document.querySelector('.nav-link.css.active');
    active.classList.remove('active');
    CSSelement.classList.add('active');

    const noDisplay = document.querySelector(`.card-body.${active.innerHTML}`)
    const Display = document.querySelector(`.card-body.${CSSelement.innerHTML}`)

    noDisplay.classList.remove('display-true');
    Display.classList.remove('display-false');
    Display.classList.add('display-true');
    noDisplay.classList.add('display-false');


  });
});
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml13 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.ml13 .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 10000 + 30 * i
  });

function toggleOff() {
  document.getElementById("visibility-hidden").style.visibility = "hidden";
  document.getElementById("display-none").style.display = "none";

}
/*
const delay = async (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms))
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const animateTitle = document.querySelector('.title');
const animationClass = ['titleAnimationTop','titleAnimationBottom','titleAnimationLeft','titleAnimationRight']

async function typeAnimation() {
  var chars = [...animateTitle.innerHTML];
  animateTitle.innerHTML = "";
  i = 0;
  while( i < chars.length ) {
    number = getRandomInt(3);
    animation = animationClass[number];
    animateTitle.innerHTML =  animateTitle.innerHTML + `<div class="align-text ${animation}">${chars[i]}</div>`;
    await delay(100);
    i++
  }
  
}

typeAnimation();


*/