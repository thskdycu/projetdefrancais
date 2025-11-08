function showTab(event, tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

function flipCard(card) {
    card.classList.toggle('flipped');
}

function checkPassword() {
    const correctPassword = "Yaycoolproject123";
    const userPassword = document.getElementById("password").value;
    const message = document.getElementById("message");

    if(userPassword === correctPassword){
        message.textContent = "Mot de passe correct !";
        message.style.color = "green";
    } else {
        message.textContent = "Mot de passe incorrect.";
        message.style.color = "red";
    }
}
