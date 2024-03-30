// JavaScript source code

//let userName = prompt("What's your name?");

////To make a cookie
//let expiryDate = new Date();

//alert(expiryDate.getDate());

//expiryDate.setDate(expiryDate.getDate() + 7);

//alert(expiryDate.getDate());

//document.cookie = "username=" + userName + "; path=/";

//All is well... except it won't work unless we running it from another place on a server

//So local storage it is

// Check if a username already exists in local storage
if (!localStorage.getItem('username')) {
    // If not, ask the user for their name
    let userName = prompt("What's your name?");

    // Store the name in local storage
    localStorage.setItem('username', userName);
} else {
    // If a username already exists, use it
    let userName = localStorage.getItem('username');
    alert("Welcome back, " + userName);
}

//Make a Cart
//Create Cart if it doesn't exist
if (localStorage.getItem("cart") == false) {
    localStorage.setItem("cart", "");
    localStorage.setIem("Chair", 0);
    localStorage.setItem("Desk", 0);
    localStorage.setItem("Pencil", 0);
}

//Add Purchase each time you open page
let purchase = prompt("What would you like to purchase this time?\n1.Chair\n2.Desk\n3.Pencil");

if (purchase == "Chair") {
    let currentAmount = Number(localStorage.getItem("Chair"));
    currentAmount += 1;
    localStorage.setItem("Chair", currentAmount);
}
else if (purchase == "Desk") {
    let currentAmount = Number(localStorage.getItem("Desk"));
    currentAmount += 1;
    localStorage.setItem("Desk", currentAmount);
}
else if (purchase == "Pencil") {
    let currentAmount = Number(localStorage.getItem("Pencil"));
    currentAmount += 1;
    localStorage.setItem("Pencil", currentAmount);
}

//Write out Cart
let printOut = "Cart:\n";
let total = 0;

if (localStorage.getItem("Chair") > 0) {
    let quantity = Number(localStorage.getItem("Chair"));
    total += quantity * 10;

    printOut += "Chair: " + localStorage.getItem("Chair") + "\n";

}

if (localStorage.getItem("Desk") > 0) {
    let quantity = Number(localStorage.getItem("Desk"));
    total += quantity * 10;

    printOut += "Desk: " + localStorage.getItem("Desk") + "\n";

}

if (localStorage.getItem("Pencil") > 0) {
    let quantity = Number(localStorage.getItem("Pencil"));
    total += quantity * 10;

    printOut += "Pencil: " + localStorage.getItem("Pencil") + "\n";

}

printOut += "Total: " + total;
alert(printOut);


//Clear Storage
let deleteButton = document.getElementById("deleteData");
deleteButton.addEventListener("click", deleteAllData);

function deleteAllData() {
    localStorage.clear();
    alert("Locat storage cleared.");
}


//Use Inspector to see local storage and show that it can be seen and altered (so it is NOT safe!!!)