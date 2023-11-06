// Check user's theme preference
const theme = localStorage.getItem("theme");
if (theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Theme toggle button
const themeToggle = document.querySelector(
  "#theme-toggle"
) as HTMLButtonElement;
const themeToggleIconSun = document.querySelector(
  "#theme-toggle-icon-sun"
) as HTMLElement;
const themeToggleIconMoon = document.querySelector(
  "#theme-toggle-icon-moon"
) as HTMLElement;

if (themeToggle && themeToggleIconSun && themeToggleIconMoon) {
  // Switch theme & icon on toggle
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeToggleIconSun.classList.remove("hidden");
      themeToggleIconMoon.classList.add("hidden");
    } else {
      localStorage.setItem("theme", "light");
      themeToggleIconSun.classList.add("hidden");
      themeToggleIconMoon.classList.remove("hidden");
    }
  });
} else {
  console.error("Theme toggle elements not found");
}
