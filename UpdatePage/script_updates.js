document.addEventListener("DOMContentLoaded", loadUpdates);

function addUpdate() {
    let dateInput = document.getElementById("update-date").value;
    let topicInput = document.getElementById("update-topic").value.trim();
    let descriptionInput = document.getElementById("update-description").value.trim();

    if (dateInput === "" || topicInput === "" || descriptionInput === "") {
        alert("Please fill all fields before adding an update.");
        return;
    }

    let update = { date: dateInput, topic: topicInput, description: descriptionInput };
    let updates = JSON.parse(localStorage.getItem("updates")) || [];
    updates.unshift(update); // Add new update at the beginning
    localStorage.setItem("updates", JSON.stringify(updates));

    renderUpdates();
    document.getElementById("update-date").value = "";
    document.getElementById("update-topic").value = "";
    document.getElementById("update-description").value = "";
}

function loadUpdates() {
    renderUpdates();
}

function renderUpdates() {
    let updatesList = document.getElementById("updates-list");
    updatesList.innerHTML = ""; // Clear list

    let updates = JSON.parse(localStorage.getItem("updates")) || [];

    updates.forEach((update, index) => {
        let listItem = document.createElement("li");
        listItem.classList.add("update-item");
        listItem.innerHTML = `<strong>${update.topic} [${update.date}]</strong><br>${update.description} 
                              <button class="delete-btn" onclick="deleteUpdate(${index})">×</button>`;
        updatesList.appendChild(listItem);
    });
}

function deleteUpdate(index) {
    let updates = JSON.parse(localStorage.getItem("updates")) || [];
    updates.splice(index, 1);
    localStorage.setItem("updates", JSON.stringify(updates));
    renderUpdates();
}
