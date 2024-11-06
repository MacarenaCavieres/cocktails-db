import { modalPrep } from "./modalPrep";
const sectDin = document.querySelector("#sectDin");
const template = document.querySelector("#template").content;
const fragment = document.createDocumentFragment();
const modalDin = document.querySelector(".modalDin");

export const artDinam = ({ drinks }) => {
    sectDin.textContent = "";

    drinks.forEach((item) => {
        const clone = template.cloneNode(true);
        clone.querySelector(".imgDin").src = item.strDrinkThumb;
        clone.querySelector(".imgDin").alt = item.strDrink;
        clone.querySelector(".nameDin").textContent = item.strDrink;
        clone.querySelector(".categoryDin").textContent = `Category: ${item.strCategory}`;
        const btnPrep = clone.querySelector(".btnPrepDin");
        btnPrep.textContent = "Recipe";
        btnPrep.dataset.idDrink = item.idDrink;

        fragment.appendChild(clone);
    });

    sectDin.appendChild(fragment);

    sectDin.addEventListener("click", (e) => {
        if (e.target.classList.contains("btnPrepDin")) {
            const drinkID = e.target.dataset.idDrink;

            const item = drinks.find((drink) => drink.idDrink === drinkID);
            if (item) {
                modalDin.classList.remove("invisible", "-z-10");
                modalDin.classList.add("visible", "z-10");

                modalPrep(item);
            }
        }
    });
};
