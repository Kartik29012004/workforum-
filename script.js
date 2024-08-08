function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;

    if (name.length < 3 || name.length > 50) {
        alert("Name must be between 3 and 50 characters");
        return false;
    }
    
    if (!email.includes("@")) {
        alert("Please enter a valid email address");
        return false;
    }
    
    if (phone.length < 10 || phone.length > 14) {
        alert("Phone number must be between 10 and 14 characters");
        return false;
    }

    if (age < 18 || age > 120) {
        alert("Age must be between 18 and 120");
        return false;
    }

    if (gender.length < 4 || gender.length > 15) {
        alert("Gender must be between 4 and 15 characters");
        return false;
    }

    alert("Form submitted successfully!");
}