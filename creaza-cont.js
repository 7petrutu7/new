document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const errorMessageElement = document.getElementById("error-message");

    fetch("register.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(text => {
        if (text === "Contul a fost creat cu succes!") {
            errorMessageElement.style.color = "green";
        } else {
            errorMessageElement.style.color = "red";
        }
        errorMessageElement.innerText = text;
    })
    .catch(error => {
        console.error("Error:", error);
    });
});