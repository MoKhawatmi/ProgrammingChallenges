let emailInput = document.getElementById("email");
emailInput.addEventListener("keyup", checkEmail)

function checkEmail(e) {
    let enteredValue = e.target.value;
    let emailRegex = new RegExp(/[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]/ig);
    let fieldElement = document.querySelector(".field");
    emailRegex.test(enteredValue) ? fieldElement.classList.add("accepted") : fieldElement.classList.remove("accepted");
}