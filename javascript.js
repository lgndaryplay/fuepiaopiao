
// function to welcome the user when they click the button
function welcomeHooper() {
    // ask for the user's name
    let person = prompt("Welcome to the court! What's your name?");

    // logic to check if they entered a name
    if (person != null && person != "") {
        alert("Nice to meet you, " + person + "! Grab a ball and let's get to work.");
        console.log("New team member added: " + person);
    } else {
        alert("Welcome, Anonymous Baller!");
    }
}
