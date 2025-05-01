// Gérer du bouton "Se connecter"
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-form form");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Empêche l'envoi du formulaire pour l'instant
            alert("Connexion en cours... (fonctionnalité à implémenter)");
        });
    }
});





// Vérification du formulaire d'inscription
document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.querySelector(".register-form form");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const submitButton = registerForm.querySelector(".btn");
    const errorMessage = document.createElement("p");

    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "14px";
    errorMessage.style.marginTop = "-10px";
    confirmPasswordInput.insertAdjacentElement("afterend", errorMessage);

    // Vérification en temps réel
    confirmPasswordInput.addEventListener("input", function() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            errorMessage.textContent = "Les mots de passe ne correspondent pas.";
            submitButton.disabled = true;
            submitButton.style.backgroundColor = "#ccc"; // Griser le bouton
        } else {
            errorMessage.textContent = "";
            submitButton.disabled = false;
            submitButton.style.backgroundColor = "#27ae60"; // Remettre la couleur d'origine
        }
    });

    // Vérification avant soumission
    registerForm.addEventListener("submit", function(event) {
        if (passwordInput.value !== confirmPasswordInput.value) {
            event.preventDefault();
            alert("Les mots de passe ne correspondent pas !");
        } else {
            alert("Inscription réussie ! (fonctionnalité à implémenter)");
        }
    });
});
    

//Gestion des bouton plus et moins de quantité
document.addEventListener('DOMContentLoaded', () => {
    const moinsBtn = document.querySelector('.moins');
    const plusBtn = document.querySelector('.plus');
    const input = document.getElementById('quantite');

    moinsBtn.addEventListener('click', () => {
      let valeur = parseInt(input.value);
      if (valeur > 0) {
        input.value = valeur - 1;
      }
    });

    plusBtn.addEventListener('click', () => {
      let valeur = parseInt(input.value);
      input.value = valeur + 1;
    });
  });
