const letters = document.querySelector("#letters");
const sectDin = document.querySelector("#sectDin");
const template = document.querySelector("#template").content;
const fragment = document.createDocumentFragment();
const namDin = document.querySelector(".namDin");
const ingrDin = document.querySelector(".ingrDin");
const instDin = document.querySelector(".instDin");
const glassDin = document.querySelector(".glassDin");
const catDin = document.querySelector(".catDin");
const closeModalDin = document.querySelector(".closeModalDin");
const modalDin = document.querySelector(".modalDin");

export function initFilters() {
    const displayLetters = () => {
        for (let i = 97; i <= 122; i++) {
            const letter = String.fromCharCode(i);
            if (letter === "u" || letter === "v") {
                continue;
            }
            const anchor = document.createElement("a");

            anchor.textContent = letter;
            anchor.classList.add("uppercase", "no-underline", "text-xl", "mr-5", "mb-3", "cursor-pointer");

            anchor.addEventListener("click", () => {
                filterLetter(letter);
            });

            letters.appendChild(anchor);
        }
    };

    const filterLetter = async (letter) => {
        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
            );
            const data = await response.json();
            artDinam(data);
        } catch (error) {
            console.error("Error ===> ", error);
        }
    };

    const artDinam = (data) => {
        sectDin.textContent = "";
        const result = data.drinks;

        result.forEach((item) => {
            const clone = template.cloneNode(true);
            clone.querySelector(".imgDin").src = item.strDrinkThumb;
            clone.querySelector(".imgDin").alt = item.strDrink;
            clone.querySelector(".nameDin").textContent = item.strDrink;
            clone.querySelector(".categoryDin").textContent = `Category: ${item.strCategory}`;
            clone.querySelector(".btnPrepDin").textContent = "Recipe";
            clone.querySelector(".btnPrepDin").addEventListener("click", () => {
                modalDin.classList.remove("invisible", "-z-10");
                modalDin.classList.add("visible", "z-10");

                modalPrep(item);
            });

            fragment.appendChild(clone);
        });

        sectDin.appendChild(fragment);
    };

    closeModalDin.addEventListener("click", () => {
        modalDin.classList.remove("visible", "z-10");
        modalDin.classList.add("invisible", "-z-10");
    });

    const modalPrep = (target) => {
        namDin.textContent = "";
        instDin.textContent = "";
        glassDin.textContent = "";
        catDin.textContent = "";

        closeModalDin.addEventListener("click", () => {
            modalDin.classList.remove("openModalDin");
        });
        namDin.textContent = "Name: " + target.strDrink;
        instDin.textContent += "Instructions: " + target.strInstructions;
        glassDin.textContent += "Glass: " + target.strGlass;
        catDin.textContent += "Category: " + target.strCategory;

        for (let i = 1; i <= 15; i++) {
            const measure = target["strMeasure" + i];
            const ingredient = target["strIngredient" + i];

            if (measure || ingredient) {
                ingrDin.textContent += ` - ${measure || ""} ${ingredient || ""}  `;
            }
        }
    };

    displayLetters();
}
