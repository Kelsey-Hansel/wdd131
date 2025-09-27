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

const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Winter Quarters Nebraska",
            location: "Omaha, Nebraska, United States",
            dedicated: "2001, April, 22",
            area: 16000,
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/winter-quarters-nebraska-temple/winter-quarters-nebraska-temple-317-main.jpg"
        },
        {
            templeName: "Pocatello Idaho",
            location: "Pocatello, Idaho, United States",
            dedicated: "2021, November, 7",
            area: 71125,
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/pocatello-idaho-temple/pocatello-idaho-temple-23276-main.jpg"
        },
        {
            templeName: "Gilbert Arizona",
            location: "Gilbert, Arizona, United States",
            dedicated: "2014, March, 2",
            area: 85326,
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802-main.jpg"
        }
    
];

const cardContainer = document.getElementById("card-container");

temples.foreach((temple) => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("card");

        const templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;
        templeCard.appendChild(templeName);

        const templeLocation = document.createElement("p");
        templeLocation.textContent = `Location: ${temple.location}`;
        templeCard.appendChild(templeLocation);

        const templeDedicated = document.createElement("p");
        templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
        templeCard.appendChild(templeDedicated);

        const templeSize = document.createElement("p");
        templeSize.textContent = `Size: ${temple.area} sq ft`;
        templeCard.appendChild(templeSize);

        const templeImg = document.createElement("img");
        templeImg.src(temple.imageUrl);
        templeImg.alt(temple.templeName);
        templeImg.loading(lazy);
        templeCard.appendChild(templeImg);

        cardContainer.appendChild(templeCard);
});

function getDateOld(value) {
    let dateString = value.dedicated.split(",");
    let dateInt = parseInt(dateString[0]);
    return dateInt < 1900;
}

function getDateNew(value) {
    let dateString = value.dedicated.split(",");
    let dateInt = parseInt(dateString[0]);
    return dateInt > 2000;
}

function getSizeLarge(value) {
    let size = value.area;
    return size > 90000;
}

function getSizeSmall(value) {
    let size = value.area;
    return size < 10000;
}

const oldTemples = temples.filter(getDateOld);
const newTemples = temples.filter(getDateNew);
const largeTemples = temples.filter(getSizeLarge);
const smallTemples = temples.filter(getSizeSmall);

oldTemples.foreach((temple) => {
    const templeCard = document.createElement("div");
    templeCard.classList.add("card");

    const templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;
    templeCard.appendChild(templeName);

    const templeLocation = document.createElement("p");
    templeLocation.textContent = `Location: ${temple.location}`;
    templeCard.appendChild(templeLocation);

    const templeDedicated = document.createElement("p");
    templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
    templeCard.appendChild(templeDedicated);

    const templeSize = document.createElement("p");
    templeSize.textContent = `Size: ${temple.area} sq ft`;
    templeCard.appendChild(templeSize);

    const templeImg = document.createElement("img");
    templeImg.src(temple.imageUrl);
    templeImg.alt(temple.templeName);
    templeImg.loading(lazy);
    templeCard.appendChild(templeImg);

    cardContainer.appendChild(templeCard);
});

newTemples.foreach((temple) => {
    const templeCard = document.createElement("div");
    templeCard.classList.add("card");

    const templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;
    templeCard.appendChild(templeName);

    const templeLocation = document.createElement("p");
    templeLocation.textContent = `Location: ${temple.location}`;
    templeCard.appendChild(templeLocation);

    const templeDedicated = document.createElement("p");
    templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
    templeCard.appendChild(templeDedicated);

    const templeSize = document.createElement("p");
    templeSize.textContent = `Size: ${temple.area} sq ft`;
    templeCard.appendChild(templeSize);

    const templeImg = document.createElement("img");
    templeImg.src(temple.imageUrl);
    templeImg.alt(temple.templeName);
    templeImg.loading(lazy);
    templeCard.appendChild(templeImg);

    cardContainer.appendChild(templeCard);
});

largeTemples.foreach((temple) => {
    const templeCard = document.createElement("div");
    templeCard.classList.add("card");

    const templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;
    templeCard.appendChild(templeName);

    const templeLocation = document.createElement("p");
    templeLocation.textContent = `Location: ${temple.location}`;
    templeCard.appendChild(templeLocation);

    const templeDedicated = document.createElement("p");
    templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
    templeCard.appendChild(templeDedicated);

    const templeSize = document.createElement("p");
    templeSize.textContent = `Size: ${temple.area} sq ft`;
    templeCard.appendChild(templeSize);

    const templeImg = document.createElement("img");
    templeImg.src(temple.imageUrl);
    templeImg.alt(temple.templeName);
    templeImg.loading(lazy);
    templeCard.appendChild(templeImg);

    cardContainer.appendChild(templeCard);
});

smallTemples.foreach((temple) => {
    const templeCard = document.createElement("div");
    templeCard.classList.add("card");

    const templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;
    templeCard.appendChild(templeName);

    const templeLocation = document.createElement("p");
    templeLocation.textContent = `Location: ${temple.location}`;
    templeCard.appendChild(templeLocation);

    const templeDedicated = document.createElement("p");
    templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
    templeCard.appendChild(templeDedicated);

    const templeSize = document.createElement("p");
    templeSize.textContent = `Size: ${temple.area} sq ft`;
    templeCard.appendChild(templeSize);

    const templeImg = document.createElement("img");
    templeImg.src(temple.imageUrl);
    templeImg.alt(temple.templeName);
    templeImg.loading(lazy);
    templeCard.appendChild(templeImg);

    cardContainer.appendChild(templeCard);
});