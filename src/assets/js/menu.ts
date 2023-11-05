const navigation = document.querySelector("#navigation") as HTMLElement;
const navigationToggle = document.querySelector(
  "#navigation-toggle"
) as HTMLButtonElement;
const navigationToggleIcon = document.querySelector(
  "#navigation-toggle i"
) as HTMLElement;

if (navigation && navigationToggle && navigationToggleIcon) {
  navigationToggle.addEventListener("click", () => {
    navigation.classList.toggle("w-2/3");
    navigation.classList.toggle("md:w-1/3");
    navigation.classList.toggle("lg:w-1/4");
    navigation.classList.toggle("w-0");
    navigation.classList.toggle("-left-full");
    navigation.classList.toggle("left-0");

    const isChecked = navigationToggle.getAttribute("data-checked") === "true";
    navigationToggle.setAttribute("data-checked", String(!isChecked));
  });
} else {
  console.error("Navigation toggle elements not found");
}
