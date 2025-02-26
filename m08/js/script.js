function addItemToList() {
    const newItemText = document.getElementById("new-item").value;
    if (newItemText) {
        const newItem = document.createElement("li");
        newItem.textContent = newItemText;
        document.getElementById("grocery-list").appendChild(newItem);
        document.getElementById("new-item").value = ""; // Clear text box (Extra Credit)
    }
}

document.getElementById("add-button").addEventListener("click", addItemToList);

document.getElementById("new-item").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addItemToList(); // Add item on Enter key (Extra Credit)
    }
});
