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

const selectionContainter = document.getElementById("#product-choice")

products.forEach(function makeList(products, arrayCount)
{
    for (let i = 0; i > arrayCount; i++)
    {
        let product = products[i];
        const option = document.createElement("option");
        option.textContent = product.name;
        option.value = product.id;
        selectionContainer.appendChild(option);
    }
});

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);