const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `<span class="year">${today.getFullYear()}</span>`;

const mainNav = document.querySelector(".navigation");
const hamMenu = document.querySelector("#menu");

hamMenu.addEventListener("click", () => {
    mainNav.classList.toggle("show");
    hamMenu.classList.toggle("show");
});

const characters = [
    {
        type: "Mage",
        weapon: "Staff",
        mainSkill: "Fireball",
        imageSRC: "images/mage.jpg"
    },
    {
        type: "Barbarian",
        weapon: "Battle-Axe",
        mainSkill: "Slash Smash",
        imageSRC: "images/barbarian.jpg"
    },
    {
        type: "Paladin",
        weapon: "Greatsword",
        mainSkill: "Final Strike",
        imageSRC: "images/paladin.jpg"
    },
    {
        type: "Rogue",
        weapon: "Double Daggers",
        mainSkill: "Hidden Slice",
        imageSRC: "images/rogue.jpg"
    },
    {
        type: "Ranger",
        weapon: "Bow and Arrows",
        mainSkill: "Iron Rain",
        imageSRC: "images/ranger.jpg"
    }
];

const textInput = document.getElementById("name");
const characterName = document.getElementById("character-name");

let userCharacterName = "";

const names = ["Merlin", "Helga", "Arthur", "Darin", "Auriel"]
const characterTypes = ["Mage", "Barbarian", "Paladin", "Rogue", "Ranger"]

let userCharacterType = "";

const buttonGame = document.getElementById("play-game");

let gameCharacterName = "";
let gameCharacterType = "";

window.onload = function () {
    if (window.location.pathname.endsWith("/character.html")) {
        const cardContainer = document.getElementById("card-container");

        characters.forEach(createcharacterCard);

        function createcharacterCard(character, index) {
            const characterCard = document.createElement("div");
            characterCard.classList.add("card");

            const characterType = document.createElement("h3");
            characterType.textContent = character.type;
            characterCard.appendChild(characterType);

            const characterWeapon = document.createElement("p");
            characterWeapon.textContent = `Weapon: ${character.weapon}`;
            characterCard.appendChild(characterWeapon);

            const characterMainSkill = document.createElement("p");
            characterMainSkill.textContent = `Main Skill: ${character.mainSkill}`;
            characterCard.appendChild(characterMainSkill);

            const characterImg = document.createElement("img");
            characterImg.src = character.imageSRC;
            characterImg.alt = character.type;
            characterImg.loading = "lazy";
            characterCard.appendChild(characterImg);

            cardContainer.appendChild(characterCard);
        }

        textInput.addEventListener("keydown", (event) => {

            if (event.key === "Enter") {
                event.preventDefault();

                userCharacterName = textInput.value;

                characterName.textContent = userCharacterName;

                localStorage.setItem("cname", userCharacterName);

                textInput.value = "";
            }

        });

        const selectionContainer = document.getElementById("character-choice")

        const optionOne = document.createElement("option");
        optionOne.textContent = `Choose a Character Type ...`;
        optionOne.selected = true;
        optionOne.disabled = true;
        optionOne.hidden = true;
        selectionContainer.appendChild(optionOne);

        characters.forEach(makeOptionList);

        function makeOptionList(character, index) {
            const optionList = document.createElement("option");
            optionList.textContent = `${character.type}`;
            optionList.value = `${character.type}`;
            selectionContainer.appendChild(optionList);
        }

        buttonGame.addEventListener("click", function (event) {
            event.preventDefault();

            userCharacterType = selectionContainer.value;

            if (userCharacterType === "Choose a Character Type ...") {
                const randomIndex = Math.floor(Math.random() * characterTypes.length);

                const type = characterTypes[randomIndex];

                userCharacterType = type;
            }
            if (userCharacterName === "") {
                const randomIndex = Math.floor(Math.random() * names.length);
                const name = names[randomIndex];
                userCharacterName = name;
            }
            localStorage.setItem("cname", userCharacterName);
            localStorage.setItem("ctype", userCharacterType);

            window.location = "game.html";
        });
    }

    if (window.location.pathname.endsWith("/game.html")) {
        gameCharacterName = localStorage.getItem("cname");
        gameCharacterType = localStorage.getItem("ctype");

        const fillNameHeading = document.getElementById("c-name");
        const fillTypeHeading = document.getElementById("c-type");

        fillNameHeading.textContent = gameCharacterName;
        fillTypeHeading.textContent = gameCharacterType;
    }

    if (window.location.pathname.endsWith("/submit.html")) {
        userCharacterName = "";
        userCharacterType = "";
        localStorage.clear();
    }
};