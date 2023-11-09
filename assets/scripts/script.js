
document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("checkbox");

    checkbox.addEventListener("change", function () {
        showErrorDialog("Why would you change for a light theme ? 🤨\nOnly dark theme is tolerated here.");
    });

    function showErrorDialog(message) {
        alert(message);
    }
});