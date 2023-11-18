// Function to load content dynamically based on the selected section
function loadContent(section) {
  const contentDiv = document.getElementById("content");

  // Fetch content based on the selected section
  fetch(`${section}.html`)
    .then((response) => response.text())
    .then((data) => {
      // Inject the content into the main div
      contentDiv.innerHTML = data;
    })
    .catch((error) => console.error("Error loading content:", error));
}

// Load the 'Home' section by default
document.addEventListener("DOMContentLoaded", function () {
  loadContent("home");
});
