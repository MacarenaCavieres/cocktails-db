const form = document.querySelector("#form");
const searchName = document.querySelector("#searchName");
const error = document.querySelector(".alert");

export function resultForm() {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(searchName.value);
        const inputName = searchName.value.trim().toLowerCase();
        findOne(inputName);
        searchName.value = "";
    });

    const findOne = async (inputName) => {
        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputName}`
            );
            const data = await response.json();

            if (!data.drinks) {
                return (error.textContent = "Cocktail not found");
            } else {
                error.textContent = "";
            }
            console.log(data);
            artDinam(data);
        } catch (error) {
            console.error("Error ===> ", error);
        }
    };
}
