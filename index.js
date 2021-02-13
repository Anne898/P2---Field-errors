var form = document.getElementById("login_form");
var inputUsername = document.getElementById("username");
var inputPassword = document.getElementById("password");
var formButton = document.getElementById("button_login");

// Simular el login
var correctUsername = "admin";
var correctPassword = "123";

var showErrorMessage = function (message) {
    // console.log(message);
    // alert(message);
    var messageContainer = document.getElementById("message_danger");
    var messageText = document.getElementById("message_danger_text");

    // Mostrar el mensaje (hacer que el contenedor sea visible)
    if (messageContainer.className.indexOf("visible") === -1) {
        messageContainer.className += " visible";
    }
    // Cambiar el texto del mensaje
    messageText.textContent = message;
}

var disableFormButton = function () {
    if (formButton.className.indexOf("disabled") === -1) {
        formButton.className += " disabled";
    }

    formButton.disabled = true;

}

var enableFormButton = function () {
    // Darle estilo de deshabilitado
    formButton.className = formButton.className.replace("disabled", "");
    // Deshabilitar el botón
    formButton.disabled = false;
}

var setFormButtonText = function (text) {
    formButton.textContent = text;
}

var passwordEmpty = function () {
    document.getElementById("passwordLabel").className = "form-label-empty";
    document.getElementById("password").required = true;

}

var usernameEmpty = function () {

    /* document.getElementById("username").className = "form-input-empty";*/
    document.getElementById("usernameLabel").className = "form-label-empty";
    document.getElementById("username").required = true;

}

function focusUsername() {
    document.getElementById("username").focus();
}

function focusPassword() {
    document.getElementById("password").focus();
}

var validateAndSend = function (e) {
    console.log('e', e);
    // Prevenir la funcionalidad default del submit de un form
    // (Nosotros daremos submit manualmente)
    e.preventDefault();
    console.log("validateAndSend");
    var username = inputUsername.value;
    var password = inputPassword.value;
    
    if (username === "" && password === "") {
        passwordEmpty();
        usernameEmpty();
        focusUsername();
        showErrorMessage("Por favor introduce los datos requeridos.");

        return;
    }

    if (username === "") {
        usernameEmpty();
        focusUsername();
        showErrorMessage("Por favor introduce los datos requeridos.");

        return;
    }

    if (password === "") {
        passwordEmpty();
        focusPassword();
        showErrorMessage("Por favor introduce los datos requeridos.");

        return;
    }



    disableFormButton();
    setFormButtonText("Loggin in...")
    setTimeout(function () {

        if (username !== correctUsername || password !== correctPassword) {
            showErrorMessage("Datos incorrectos, inténtalo de nuevo");
            enableFormButton();
            setFormButtonText("Login");
            return;
        }

        else {
            window.location = "https://www.google.com/"
        }

    }, 1500);


    // > Por favor introduce los datos requeridos
    // > Por favor llena los campos requeridos
    // 1 Indicar cuáles son los datos requeridos
    // 2 Mostrar el mensaje
}

form.addEventListener("submit", validateAndSend);