const year = document.querySelector("#currentyear");
const lastMod = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = `<span class="year">${today.getFullYear()}</span>`;

lastMod.innerHTML = `<span class="last-mod">${document.lastModified}</span>`;

const mainNav = document.querySelector(".navigation");
const hamMenu = document.querySelector("#menu");

hamMenu.addEventListener("click", () => {
    mainNav.classList.toggle("show");
    hamMenu.classList.toggle("show");
});

