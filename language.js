var languages = new Map();
languages.set("en", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png");
languages.set("it", "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg");

const getCookieValue = (name) => (
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)

// funzione che cambia la lingua
function language(change=false) {
  let langIcon = document.getElementById("lang-icon");
  let lang;
  if (change) {
    lang = langIcon.getAttribute('lang') == "en" ? "it" : "en";
  } else {
    lang = getCookieValue("lang");
  }
  document.cookie = "lang="+lang+";";
  langIcon.setAttribute('lang', lang);
  langIcon.style.setProperty('background-image', "url("+languages.get(lang)+")");
  let langElements = Array.from(document.getElementsByClassName("lang"));
  langElements.forEach((element) => {
    element.innerText = element.getAttribute(lang);
    element.lang = lang;
  });
}

language(!document.cookie.includes("lang"));

