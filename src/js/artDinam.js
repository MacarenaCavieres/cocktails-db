const sectDin = document.querySelector("#sectDin");
const template = document.querySelector("#template").content;
const fragment = document.createDocumentFragment();
const modalDin = document.querySelector(".modalDin");
import { modalPrep } from "./modalPrep";

export const artDinam = (data) => {
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
