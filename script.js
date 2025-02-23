document.addEventListener("DOMContentLoaded", () => {
    // Check if loading screen exists
    const loadingScreen = document.getElementById("loading-screen");

    if (loadingScreen) {
        // Disable scrolling while loading screen is visible
        document.body.style.overflow = "hidden";

        // Hide loading screen after 3 seconds
        setTimeout(() => {
            loadingScreen.style.opacity = "0"; // Smooth fade-out effect
            setTimeout(() => {
                loadingScreen.remove(); // Remove after fade-out
                document.body.style.overflow = "auto"; // Re-enable scrolling
            }, 500);
        }, 3000);
    }

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});

// Function to open image preview with description
function openPreview(imageSrc, description) {
    document.getElementById("previewImg").src = imageSrc;
    document.getElementById("previewDescription").innerText = description; // Set description
    document.getElementById("imagePreview").style.display = "block";
}

// Function to close image preview
function closePreview() {
    document.getElementById("imagePreview").style.display = "none";
}