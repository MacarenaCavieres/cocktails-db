import { initRandomCocktail } from "./random.js";
import { initFilters } from "./filter.js";
import { resultForm } from "./form.js";
import "../css/style.css";

document.addEventListener("DOMContentLoaded", () => {
    initRandomCocktail();
    initFilters();
    resultForm();
});
