import { initRandomCocktail } from "./random.js";
import { initFilters } from "./filter.js";
import "../css/style.css";

document.addEventListener("DOMContentLoaded", () => {
    initRandomCocktail();
    initFilters();
});
