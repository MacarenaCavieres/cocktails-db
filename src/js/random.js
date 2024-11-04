const btnRandom = document.querySelector("#btnRandom");
const imageRandom = document.querySelector(".imageRandom");
const nameRandom = document.querySelector(".nameRandom");
const ingrRandom = document.querySelector(".ingrRandom");
const instRandom = document.querySelector(".instRandom");
const glassRandom = document.querySelector(".glassRandom");
const catRandom = document.querySelector(".catRandom");
const categoryRandom = document.querySelector(".categoryRandom");
const btnPrep = document.querySelector(".btnPrep");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".closeModal");

export function initRandomCocktail() {
    const connectApi = async () => {
        try {
            const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
            const data = await response.json();
            displayCocktail(data);
        } catch (error) {
            console.error("Error ====> ", error);
        }
    };

    const displayCocktail = ({ drinks }) => {
        const princ = drinks[0];
        imageRandom.src = princ.strDrinkThumb;
        imageRandom.alt = princ.strDrink;
        nameRandom.textContent = princ.strDrink;
        instRandom.textContent += " " + princ.strInstructions;
        glassRandom.textContent += " " + princ.strGlass;
        catRandom.textContent = `Category: ${princ.strCategory}`;
        categoryRandom.textContent = `Category: ${princ.strCategory}`;

        for (let i = 1; i <= 15; i++) {
            const measure = princ["strMeasure" + i];
            const ingredient = princ["strIngredient" + i];

            if (measure || ingredient) {
                ingrRandom.textContent += ` - ${measure || ""} ${ingredient || ""}  `;
            }
        }
    };

    btnRandom.addEventListener("click", () => {
        connectApi();
    });

    btnPrep.addEventListener("click", () => {
        modal.classList.remove("invisible", "z-[-10]");
        modal.classList.add("visible", "z-10");
    });

    closeModal.addEventListener("click", () => {
        modal.classList.remove("visible", "z-10");
        modal.classList.add("invisible", "z-[-10]");
    });

    connectApi();
}
