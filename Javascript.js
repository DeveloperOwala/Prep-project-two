// var maleNaming = ["Kwasi", "Kwadwo", "Twabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// var femaleNaming = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
// var akanDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     function validate(){
//         var date = document.getElementById("date");
//         var month= document.getElementById("month");
//         var year = document.getElementById("year");
//         var gender=document.getElementById("genda");

//     }
function validateUser() {
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    if (date == "" || month == "" || year == "") {
        return false;
    } else {
        var Cc = year.slice(0, 1);
        var Yy = year.slice(2, 3);
        var dayOfTheWeek = Math.floor((((Cc / 4) - 2 * Cc - 1) + ((5 * Yy / 4)) + ((26 * (month + 1) / 10)) + date) % 7);

        return dayOfTheWeek;
    }
}

function identifyGender() {

    var genderForm = document.getElementByName("gender");
    var male = document.getElementById("male");
    var female = document.getElementById("female");

    if (!(genderForm[0].checked || genderForm[1].checked)) {
        return false;
    } else if (male.checked) {
        genderForm = male.value;
        return genderForm;
    } else if (female.checked) {
        genderForm = female.value;
        return genderForm;
    }
}

function akanNames(){
    var maleNaming = ["Kwasi", "Kwadwo", "Twabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNaming = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var akanDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if(identifyGender()){

    }
}