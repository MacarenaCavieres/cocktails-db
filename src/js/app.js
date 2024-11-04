import { initRandomCocktail } from "./random.js";
import { initModal } from "./modal.js";
import { initFilters } from "./filter.js";
import "../css/style.css";

document.addEventListener("DOMContentLoaded", () => {
    initRandomCocktail();
    initModal();
    initFilters();
});
