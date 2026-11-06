const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const typedText = document.getElementById("typed-text");
const phrases = [
  "K Satyavamsi",
  "a Data Science Student",
  "an AI/ML Enthusiast",
  "a Table Tennis Player"
];

if (typedText) {
  let phraseIndex = 0;
  let characterIndex = phrases[0].length;
  let deleting = false;
  const typeSpeed = 92;
  const deleteSpeed = 48;
  const holdDuration = 1450;

  function typeLoop() {
    const currentPhrase = phrases[phraseIndex];

    if (!deleting) {
      characterIndex = Math.min(characterIndex + 1, currentPhrase.length);
      typedText.textContent = currentPhrase.slice(0, characterIndex);

      if (characterIndex === currentPhrase.length) {
        deleting = true;
        window.setTimeout(typeLoop, holdDuration);
        return;
      }
      window.setTimeout(typeLoop, typeSpeed);
      return;
    }

    characterIndex = Math.max(characterIndex - 1, 0);
    typedText.textContent = currentPhrase.slice(0, characterIndex);

    if (characterIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      window.setTimeout(typeLoop, 320);
      return;
    }
    window.setTimeout(typeLoop, deleteSpeed);
  }

  window.setTimeout(typeLoop, 1300);
}

document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});


// Shared seven-click mood switch on every portfolio page
(() => {
  const button = document.getElementById("mood-face");
  const counter = document.getElementById("mood-count-number");
  const message = document.getElementById("red-mode-message");
  if (!button || !counter) return;

  const COUNT_KEY = "portfolio-red-mode-clicks";
  const MODE_KEY = "portfolio-red-mode";
  const readCount = () => Math.max(0, Math.min(7, Number(localStorage.getItem(COUNT_KEY) || 0) || 0));
  const isRed = () => localStorage.getItem(MODE_KEY) === "on";

  function render() {
    const active = isRed();
    document.body.classList.toggle("red-mode", active);
    counter.textContent = active || readCount() === 0 ? "" : String(readCount());
    button.setAttribute("aria-label", active ? "Turn red mode off" : "Click seven times to change the face");
    if (message) message.textContent = "YOU ENTERED RED MODE";
  }

  render();
  button.addEventListener("click", () => {
    button.classList.remove("is-clicked");
    void button.offsetWidth;
    button.classList.add("is-clicked");

    if (isRed()) {
      localStorage.setItem(MODE_KEY, "off");
      localStorage.setItem(COUNT_KEY, "0");
    } else {
      const next = Math.min(7, readCount() + 1);
      localStorage.setItem(COUNT_KEY, String(next));
      if (next === 7) localStorage.setItem(MODE_KEY, "on");
    }
    render();
  });

  // Keep an already-open tab in sync if another tab changes the mode.
  window.addEventListener("storage", (event) => {
    if (event.key === COUNT_KEY || event.key === MODE_KEY) render();
  });
})();


/* Original interactive flip ID card */


(function(){
  var c=document.getElementById('flip'); if(!c) return;
  var faces=c.querySelectorAll('.face');
  function sync(){
    var f=c.classList.contains('is-flipped');
    c.setAttribute('aria-pressed',f);
    faces[0].setAttribute('aria-hidden',f);
    faces[1].setAttribute('aria-hidden',!f);
  }
  function toggle(){c.classList.toggle('is-flipped');sync();}
  c.addEventListener('click',toggle);
  c.addEventListener('keydown',function(e){
    if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle();}
  });
  sync();
})();
