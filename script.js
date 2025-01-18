// Form Validation
const gameForm = document.getElementById("gameForm");
const formMessage = document.getElementById("formMessage");

gameForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const playerName = document.getElementById("playerName").value;
    const email = document.getElementById("email").value;

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formMessage.textContent = "Please enter a valid email.";
        formMessage.classList.remove("hidden");
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = `Player ${playerName} registered successfully!`;
        formMessage.classList.remove("hidden");
        formMessage.style.color = "green";
        gameForm.reset();
    }
});

// Dynamic Image Gallery
const addImageButton = document.getElementById("addImageButton");
const imageUrlInput = document.getElementById("imageUrl");
const galleryGrid = document.getElementById("galleryGrid");

addImageButton.addEventListener("click", function () {
    const imageUrl = imageUrlInput.value;

    if (imageUrl) {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Dynamic Image";
        galleryGrid.appendChild(img);
        imageUrlInput.value = "";
    }
});
