// TODO VAR
const Navtoggle = document.getElementById("nav-toggle");
const getChildClass = Navtoggle.querySelector("i");
const NavMenu = document.querySelector(".nav_menu");

// TODO SHOW MENU
function ShowAndHideMenu() {
  if (getChildClass.classList.contains("bx-menu")) {
    getChildClass.classList.replace("bx-menu", "bx-x");
    NavMenu.classList.add("show_menu");
  } else {
    getChildClass.classList.replace("bx-x", "bx-menu");
    NavMenu.classList.remove("show_menu");
  }
}

Navtoggle.addEventListener("click", ShowAndHideMenu);

// TODO ACTIVE LINK
const NavLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav_link, we remove the show-menu class
  navMenu.classList.remove("show_menu");
  getChildClass.classList.replace("bx-x", "bx-menu");
}

NavLink.forEach((n) => n.addEventListener("click", linkAction));

// SCROLL SECTION LINK ACTIVE
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    // ? sectionHeight = mengambil ukuran tinggi dari content section
    const sectionHeight = current.offsetHeight;
    // ? sectionHeight = mengambil titik tinggi dari content section
    const sectionTop = current.offsetTop - 50;
    const sectionID = current.getAttribute("id");
    const getSection = document.querySelector(
      ".nav_menu a[href*=" + sectionID + "]"
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      getSection.classList.add("active_link");
    } else {
      getSection.classList.remove("active_link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// TODO SHOW SCROLL TOP ICON

function scrollTopShow() {
  const scrollTop = document.getElementById("scrollTop");

  if (this.scrollY >= 400) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollTopShow);

// TODO dark theme
const themeBtn = document.getElementById("theme-btn");
const iconTheme = themeBtn.querySelector(".bx-moon");
const titleTheme = themeBtn.querySelector(".mode_theme");

const darkTheme = "dark-theme";
const icTheme = "bx-sun";

// TODO get data theme
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// TODO get current Class Theme And Icon
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "light" : "dark";
const getCurrentIcon = () =>
  iconTheme.classList.contains(icTheme) ? "bx-moon" : icTheme;

// ? VALIDATING THEME
if (selectedTheme) {
  // ? if selectedTheme value is light, add class darktheme,and not remove that class.
  document.body.classList[selectedTheme === "light" ? "add" : "remove"](
    darkTheme
  );
  // ? if selectedItem value is bx-moon, add it ,and not remove icTheme.
  iconTheme.classList[selectedIcon === "bx-moon" ? "add" : "remove"](icTheme);
  if (document.body.classList.contains(darkTheme)) {
    titleTheme.innerHTML = "light";
  } else {
    titleTheme.innerHTML = "dark";
  }
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  if (document.body.classList.contains(darkTheme)) {
    titleTheme.innerHTML = "light";
    iconTheme.classList.replace("bx-moon", icTheme);
  } else {
    titleTheme.innerHTML = "dark";
    iconTheme.classList.replace(icTheme, "bx-moon");
  }

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// TODO REDUCE TO PDF
function scaleCV() {
  document.body.classList.add("scale-cv");
}

function removeScaleCV() {
  document.body.classList.remove("scale-cv");
}

// * GENERATE PDF
let areaCV = document.getElementById("area-cv");

const resumeBtn = document.getElementById("resume-btn");

resumeBtn.onclick = () => {
  window.open("assets/CV/resume.pdf");
};

// * HTML2PDF OPTION
// let opt = {
//   margin: -3,
//   filename: "resumeCV.pdf",
//   image: { type: "jpeg", quality: 0.98 },
//   html2canvas: { scale: 4, width: 836, height: 1172 },
//   jsPDF: { format: "a4", orientation: "portrait" },
// };

// // * call areaCV and html2PDF options
// function generateResume() {
//   html2pdf(areaCV, opt);
// }

// // ? CLICK TO resize CV
// resumeBtn.addEventListener("click", () => {
//   // ? add class .scale-cv to body tag
//   scaleCV();

//   // ? the PDF is generated
//   generateResume();

//   // ? setTimeOut to remove scale
//   setTimeout(removeScaleCV, 5000);
// });
