const namDin = document.querySelector(".namDin");
const ingrDin = document.querySelector(".ingrDin");
const instDin = document.querySelector(".instDin");
const glassDin = document.querySelector(".glassDin");
const catDin = document.querySelector(".catDin");
const closeModalDin = document.querySelector(".closeModalDin");
const modalDin = document.querySelector(".modalDin");

export const modalPrep = (target) => {
    namDin.textContent = "";
    instDin.textContent = "";
    glassDin.textContent = "";
    catDin.textContent = "";
    ingrDin.textContent = "Ingredients: ";

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

    closeModalDin.addEventListener("click", () => {
        modalDin.classList.remove("visible", "z-10");
        modalDin.classList.add("invisible", "-z-10");
    });
};
