document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a:not(.dropdown-toggle)").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // On touch/mobile, tapping "Services" expands the dropdown instead of
  // relying on hover, which doesn't exist on touch devices.
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownParent = document.querySelector(".has-dropdown");
  if (dropdownToggle && dropdownParent) {
    dropdownToggle.addEventListener("click", (event) => {
      if (window.matchMedia("(max-width: 760px)").matches) {
        event.preventDefault();
        dropdownParent.classList.toggle("is-open");
      }
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
