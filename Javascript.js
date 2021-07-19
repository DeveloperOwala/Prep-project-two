
function validateUser() {
    var dates = parseInt(document.getElementById("date").value);
    var years = parseInt(document.getElementById("year").value);
    var months = parseInt(document.getElementById("month").value);

    // validating user input on dates

    if (dates <= 0 || dates > 31) {
        alert("Enter correct date ! ");

        if (months <= 0 || months > 12) {
            alert("Enter correct month ! ");
        }
    
    }
    // Arrray for storing Akan Names

    var maleNaming = ["Kwasi", "Kwadwo", "Twabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNaming = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    //males Gender//
    var gender = document.querySelector('input[name="gender"]:checked');
    if (gender == null) {
        alert("Choose Your Gender ! ")
    }

    // Displaying gender
    var dayOfTheWeek = new Date(years + "/" + months + "/" + dates);
    var days = dayOfTheWeek.getDay();
    if (gender.value == "male") {
        alert(`Your akan name is: ${maleNaming[days]}`)
    } else if (gender.value == "female") {
        alert(`Your akan name is: ${femaleNaming[days]}`)
    }
}


