// header
const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.getElementById("header");

function openMenu() {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");
  document.body.style.overflow = "hidden"; // disable background scroll
}

function closeMenu() {
  mobileMenu.classList.add("translate-x-full");
  mobileMenu.classList.remove("translate-x-0");
  document.body.style.overflow = ""; // enable scroll
}

menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

// Optional: Close menu clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    if (!mobileMenu.classList.contains("translate-x-full")) {
      closeMenu();
    }
  }
});
let lastScrollY = window.scrollY;
// Scroll background white on header
window.addEventListener("scroll", (e) => {
  // console.log(window.scrollY);
  const currentScrollY = window.scrollY;
  if (currentScrollY > 10) {
    header.classList.add("bg-white", "shadow-md");
    header.classList.remove("bg-transparent");
    header.style.borderWidth = "0px";
    header.style.borderBottomColor = "#FFFF";
    console.log('scroll down');
    
  } else if(currentScrollY < lastScrollY){
    header.classList.remove("bg-white", "shadow-md");
    header.classList.add("bg-transparent");
    header.style.borderBottomWidth = "2px";
    header.style.borderBottomColor = "#a8a8a8";
    console.log('scroll up');
    
  }
});

// FORM
function openForm() {
  document.getElementById("popupForm").classList.remove("hidden");
}

function closeForm() {
  document.getElementById("popupForm").classList.add("hidden");
  document.getElementById("form").reset();
  document.getElementById("responseMessage").classList.add("hidden");
}

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  fetch("YOUR_GOOGLE_APPS_SCRIPT_URL_HERE", {
    method: "POST",
    body: data,
  })
    .then((response) => {
      if (response.ok) {
        document.getElementById("responseMessage").classList.remove("hidden");
        setTimeout(closeForm, 2000); // auto close after 2 seconds
      } else {
        alert("Submission failed. Try again.");
      }
    })
    .catch((error) => {
      console.error("Error!", error.message);
      alert("Error submitting form.");
    });
});
