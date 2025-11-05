// script.js

initCursor();
initMorphingText(); // Only runs if elements are found

function initCursor() {
  const cursor = document.querySelector('.custom-cursor');
  if (!cursor) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}

function initMorphingText() {
  const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
  };
  if (!elts.text1 || !elts.text2) return;

  // ... your existing morphing animation code here ...
}



const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
  "Hello!",
  "My name is Luis.",
  "I'm a multidisciplinary designer",
  "based in Lisbon, PT.",
  "I design digital, human-centered products.",
  "From simplifying complex interactions",
  "to breaking the rules entirely",
  "I craft experiences that feel intuitive,",
  "and interfaces that actually make sense",
  "No confusion. No chaos.",
  "Unless, of course, that’s the point!",
  "I'm also passionate about accessibility.",
  "Because good design should never leave anyone out.",
  "Currently this website in under work",
  "And yes... like any designer, my website is always a work in progress.",
  "I’ve learned to embrace it as part of the craft.",
  "Because design is never really finished, only paused.",
  "Bit I've got you covered",
  "Click on “work” to see what I’ve been up to.",
  "You can also contact me directly at:",
  "moleirinhoatwork@gmail.com",
  "Even if you just want to chat.",
  "About cinema, for example.",
  "Did you know Danny Boyle directed a sci-fi movie?",
  "It’s called Sunshine. ☀️",
  "From 2007.",
  "The plot? The sun is dying, Earth is freezing,",
  "and a crew flies into space with a giant bomb to reignite it.",
  "They discover a missing spaceship,",
  "everything starts falling apart,",
  "and humanity’s fate hangs by a thread.",
  "Epic, right?",
  "Anyway...",
  "This text is on a loop.",
  "Which means we’re kind of stuck together for now.",
  "And honestly?",
  "I’m okay with that.",
  "I feel like we’re bonding.",
  "You, reading. Me, typing (in the past).",
  "Feels nice.",
  "But since you’re still here,",
  "let me tell you about my side quest:",
  "I’m trying to find the perfect Croquete in Lisbon.",
  "I’ve tested... a lot.",
  "Some amazing, some tragic.",
  "I keep notes.",
  "It’s basically a UX research project at this point.",
  "So if you have recommendations let’s talk.",
  "Croquetes, design, movies... all fair game.",
  "Anyway, back to the website...",
  "You’re still here.",
  "Still reading.",
  "Still sliding from sentence to sentence.",
  "At this stage, I feel like we should get coffee.",
  "Or write a sci-fi screenplay together.",
  "You don’t have to say yes.",
  "But I’ll take your attention as a soft maybe.",
  "Here’s your heads-up:",
  "The loop is about to start again.",
  "Déjà vu incoming.",
  "Consider yourself warned.",
  "And if you make it through the loop...",
  "Congratulations.",
  "Text-Lingerer Level: Elite.",
  "Thanks for hanging out.",
  "You’re cool.",
  "I like you. ❤️",
  "But really. Click a button.",
  "There are literally only two.",
  "Yes... two.",
  "Two buttons.",
  "Buttons...",
  "Yes..."
];

const morphTime = 1.8;
const cooldownTime = 0.75;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    // Modify blur effect to avoid extreme darkness
    const blurAmount = Math.min(8 / fraction - 8, 100);
    const opacityAmount = Math.pow(fraction, 0.5);  // Adjusted opacity for smoother transition

    elts.text2.style.filter = `blur(${blurAmount}px)`;
    elts.text2.style.opacity = `${opacityAmount * 100}%`;

    fraction = 1 - fraction;

    const inverseBlur = Math.min(8 / fraction - 8, 100);
    const inverseOpacity = Math.pow(fraction, 0.5);

    elts.text1.style.filter = `blur(${inverseBlur}px)`;
    elts.text1.style.opacity = `${inverseOpacity * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();


