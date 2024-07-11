const passBox = document.getElementById("password");
const length = 24
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
const allChars = upper + lower + numbers + symbols;
const button = document.querySelector(".generate");
const copy = document.querySelector(".copy");
const message = document.querySelector(".message");

function generatePassword() {
    let password = "";
    password += upper.charAt(Math.floor(Math.random() * upper.length));
    password += lower.charAt(Math.floor(Math.random() * lower.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));

    while (password.length < length) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    passBox.value = password;
    copy.src = "../images/copy.png";
}

button.addEventListener("click", () => {
    generatePassword();
})

copy.addEventListener("click", async (e) => {
    try {
        await navigator.clipboard.writeText(passBox.value);
        copy.src = "../images/copied.png";
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
})
