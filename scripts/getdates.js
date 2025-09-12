const year = document.querySelector("#currentyear");
const lastMod = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = `<span class="year">${today.getFullYear()}</span>`;

lastMod.innerHTML = `<span class="last-mod">${document.lastModified}</span>`;