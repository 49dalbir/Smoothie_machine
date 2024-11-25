// Smoothie Class
class Smoothie {
    constructor(name, size, ingredients, extra) {
        this.name = name;
        this.size = size;
        this.ingredients = ingredients;
        this.extra = extra;
    }

    getDescription() {
        return `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Size:</strong> ${this.size}<br>
            <strong>Ingredients:</strong> ${this.ingredients.join(", ")}<br>
            <strong>Extra:</strong> ${this.extra}
        `;
    }
}

// Helper: Smooth animation for element visibility
function fadeInElement(element) {
    element.style.opacity = 0;
    element.style.display = "block";
    let opacity = 0;
    const interval = setInterval(() => {
        opacity += 0.05;
        element.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(interval);
        }
    }, 30);
}

// Event Listener for Order Button
document.getElementById("order-btn").addEventListener("click", () => {
    // Get form values
    const name = document.getElementById("name").value;
    const size = document.getElementById("size").value;
    const ingredients = Array.from(document.querySelectorAll('input[name="ingredient"]:checked')).map(input => input.value);
    const extra = document.querySelector('input[name="extra"]:checked').value;

    // Validate input
    if (!name || !size || ingredients.length === 0) {
        alert("Please complete all fields!");
        return;
    }

    // Create Smoothie Object
    const smoothie = new Smoothie(name, size, ingredients, extra);

    // Display Smoothie Details
    const detailsDiv = document.getElementById("smoothie-details");
    detailsDiv.innerHTML = smoothie.getDescription();

    // Animate the order summary section
    const orderSummary = document.getElementById("order-summary");
    fadeInElement(orderSummary);
});
