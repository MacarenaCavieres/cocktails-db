import { artDinam } from "./artDinam";
const letters = document.querySelector("#letters");

export function initFilters() {
    const displayLetters = () => {
        for (let i = 97; i <= 122; i++) {
            const letter = String.fromCharCode(i);
            if (letter === "u" || letter === "x") {
                continue;
            }
            const anchor = document.createElement("a");

            anchor.textContent = letter;
            anchor.classList.add(
                "uppercase",
                "no-underline",
                "text-xl",
                "mr-5",
                "mb-3",
                "cursor-pointer",
                "hover:underline",
                "hover:text-modal"
            );

            anchor.dataset.letter = letter;

            // anchor.addEventListener("click", () => {
            //     filterLetter(letter);
            // });

            letters.appendChild(anchor);
        }
    };

    letters.addEventListener("click", (e) => {
        const letter = e.target.dataset.letter;
        if (letter) {
            filterLetter(letter);
        }
    });

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

    displayLetters();
}
