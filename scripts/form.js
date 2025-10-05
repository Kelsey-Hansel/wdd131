const year = document.querySelector("#currentyear");
const lastMod = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = `<span class="year">${today.getFullYear()}</span>`;

lastMod.innerHTML = `<span class="last-mod">${document.lastModified}</span>`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const arrayCount = products.length;

const selectionContainer = document.getElementById("product-choice")

const optionOne = document.createElement("option");
optionOne.textContent = `Choose a Product ...`;
optionOne.selected = true;
optionOne.disabled = true;
optionOne.hidden = true;
selectionContainer.appendChild(optionOne);

products.forEach(makeOptionList);

function makeOptionList(product, index) {
    const optionList = document.createElement("option");
    optionList.textContent = `${product.name}`;
    optionList.value = `${product.id}`;
    selectionContainer.appendChild(optionList);
}

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);