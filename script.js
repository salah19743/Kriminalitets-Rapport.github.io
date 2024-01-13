function submitCrimeReport() {
    const location = document.getElementById("location").value;
    const crimeType = document.getElementById("crimeType").value;
    const crimeDescription = document.getElementById("crimeDescription").value;

    if (location && crimeType && crimeDescription) {
        const crimeList = document.getElementById("crimeList");
        const currentDate = new Date().toLocaleString();

        const newCrimeItem = document.createElement("li");
        newCrimeItem.innerHTML = `<strong>${currentDate}</strong>: ${crimeType} - ${crimeDescription} (lokation: ${location})`;
        crimeList.insertBefore(newCrimeItem, crimeList.firstChild);

        // Clear form fields
        document.getElementById("location").value = "";
        document.getElementById("crimeType").value = "";
        document.getElementById("crimeDescription").value = "";

        // Show popup
        showPopup();
    } else {
        alert("Udfyld venligst alle felter.");
    }
}

function showPopup() {
    const popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "flex";
}

function closePopup() {
    const popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "none";
}
