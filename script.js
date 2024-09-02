const navLinks = document.querySelectorAll(".navLink");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    navLink.classList.add("active");
  });
});
