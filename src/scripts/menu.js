const menu = document.querySelector("#menu");
const openMenuButton = document.querySelector("#open-menu-button");

openMenuButton.addEventListener("click", () => {
  menu.classList.toggle("w-2/3");
  menu.classList.toggle("w-0");
  menu.classList.toggle("-left-full");
  menu.classList.toggle("left-0");
});
