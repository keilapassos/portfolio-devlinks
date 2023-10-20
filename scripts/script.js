function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
}

function handleModal() {
  const button = document.querySelector("#skills");
  const modalController = document.querySelector("#modal-controller");

  button.addEventListener("click", () => {
    modalController.showModal();

    closeModal();
  });
}

function closeModal() {
  const button = document.querySelector("#close-modal");
  const modalController = document.querySelector("#modal-controller");

  button.addEventListener("click", () => {
    modalController.close();
  });
}

handleModal();
