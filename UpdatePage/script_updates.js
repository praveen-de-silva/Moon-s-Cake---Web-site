function addUpdate() {
    let inputField = document.getElementById("update-text");
    let updateText = inputField.value.trim();

    if (updateText === "") {
        alert("Please enter an update.");
        return;
    }

    let listItem = document.createElement("li");
    let date = new Date().toLocaleDateString();
    listItem.innerHTML = `<strong>${date}:</strong> ${updateText}`;

    document.getElementById("updates-list").prepend(listItem);
    inputField.value = ""; // Clear input field
}
