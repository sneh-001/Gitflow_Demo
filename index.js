console.log("Hello JavaScript !")
let firstName;
let lastName;

function showFullName(firstName = "Murtuza", lastName = "Rangwala") {
    console.log(`${firstName} ${lastName}`);
}

showFullName();
showFullName("Murtuza",  "Master");