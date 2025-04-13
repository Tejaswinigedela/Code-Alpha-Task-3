function sayHello() {
    alert("Hello! Welcome to my portfolio.");
}


function submitForm(event) {
    event.preventDefault(); 
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").innerText = "Thank you, " + name + "! Your message has been sent.";
    } else {
        document.getElementById("responseMessage").innerText = "Please fill in all fields.";
    }
}

