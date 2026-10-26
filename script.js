
/* =====================================
   ARORA AB — WEBSITE JAVASCRIPT
   ===================================== */

// 1. MOBILE NAVIGATION

const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {

  // Open and close the mobile menu
  menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );

  });


  // Close menu after clicking a navigation link
  const navLinks = mainNav.querySelectorAll("a");

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("is-open");

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

    });

  });


  // Close menu with the Escape key
  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      mainNav.classList.remove("is-open");

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

      menuToggle.focus();

    }

  });


  // Close mobile menu when switching to desktop width
  window.addEventListener("resize", () => {

    if (window.innerWidth > 700) {

      mainNav.classList.remove("is-open");

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

    }

  });

}


// 2. COPYRIGHT YEAR

const copyrightText = document.querySelector(".footer-bottom p");

if (copyrightText) {

  copyrightText.textContent =
    `© ${new Date().getFullYear()} Arora AB. All rights reserved.`;

}


// 3. WEBSITE READY

console.log("Arora AB website JavaScript loaded successfully!");
