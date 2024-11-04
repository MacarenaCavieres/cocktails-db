const btnRandom = document.querySelector("#btnRandom");
const imageRandom = document.querySelector(".imageRandom");
const nameRandom = document.querySelector(".nameRandom");
const ingrRandom = document.querySelector(".ingrRandom");
const instRandom = document.querySelector(".instRandom");
const glassRandom = document.querySelector(".glassRandom");

export async function initRandomCocktail() {
    try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const data = await response.json();
        console.log(data);
        // pintarCocktail(data);
    } catch (error) {
        console.error("Error ====> ", error);
    }

    btnRandom.addEventListener("click", () => {
        connectApi();
    });
}
