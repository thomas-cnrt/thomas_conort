
document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("checkbox");

    checkbox.addEventListener("change", function () {
        showErrorDialog("Why changing for a light theme ? 🤨");
    });

    function showErrorDialog(message) {
        alert(message);
    }
});