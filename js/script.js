// Example: Modal functionality
const menuButton = document.getElementById("menuButton");
const menuModal = document.getElementById("menuModal");
const closeModal = document.getElementById("closeModal");
const modalOverlay = document.getElementById("modalOverlay");

if (menuButton && menuModal && closeModal && modalOverlay) {
  // Open the modal
  menuButton.addEventListener("click", () => {
    menuModal.classList.add("active");
    modalOverlay.classList.add("active");
  });

  // Close the modal when clicking the close button
  closeModal.addEventListener("click", () => {
    menuModal.classList.remove("active");
    modalOverlay.classList.remove("active");
  });

  // Close the modal when clicking the overlay
  modalOverlay.addEventListener("click", () => {
    menuModal.classList.remove("active");
    modalOverlay.classList.remove("active");
  });
}
