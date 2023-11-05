const menu = document.querySelector("#menu");
const openMenuButton = document.querySelector("#open-menu-button");
const openMenuButtonIcon = document.querySelector("#open-menu-button i");

document.addEventListener("astro:page-load", () => {
  openMenuButton.addEventListener("click", () => {
    menu.classList.toggle("w-2/3");
    menu.classList.toggle("w-0");
    menu.classList.toggle("-left-full");
    menu.classList.toggle("left-0");

    const isChecked = openMenuButton.getAttribute("data-checked") === "true";
    openMenuButton.setAttribute("data-checked", !isChecked);
  });
});
