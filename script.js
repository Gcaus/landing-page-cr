document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const menuItems = document.querySelectorAll(".menu li a");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
      menu.classList.remove("show");
    }
  });

  // Adiciona efeito de scroll no header
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
