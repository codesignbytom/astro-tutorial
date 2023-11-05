const menu = document.querySelector("#menu");
const menuToggle = document.querySelector("#menu-toggle");
const menuToggleIcon = document.querySelector("#menu-toggle i");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("w-2/3");
  menu.classList.toggle("md:w-1/3");
  menu.classList.toggle("lg:w-1/4");
  menu.classList.toggle("w-0");
  menu.classList.toggle("-left-full");
  menu.classList.toggle("left-0");

  const isChecked = menuToggle.getAttribute("data-checked") === "true";
  menuToggle.setAttribute("data-checked", String(!isChecked));
});
