const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".closeModal");

export function initModal() {
    closeModal.addEventListener("click", () => {
        modal.classList.remove("openModal");
    });

    // Puedes añadir más eventos o lógica para abrir el modal aquí
}
