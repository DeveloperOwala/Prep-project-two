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
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;

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

    var genderForm = document.getElementsByName("gender");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    
    
    //  if(genderForm[0].value.checked){
    //     // genderForm = male.value;
    //     // return genderForm;
    //     alert("male! ");
    //  } else if(genderForm[1].value.checked){
    //     // genderForm = female.value;
    //     // return genderForm;
    //     alert("female! ");
    //  }else{
    //     alert("Please check gender! ");
    // }
    
    // if (genderForm[0].checked || genderForm[1].checked) {
    //     return true;
    // } else if (document.getElementById("male").checked) {
    //     genderForm = male.value;
    //     return genderForm;
    // } else if (document.getElementById("female").checked) {
    //     genderForm = female.value;
    //     return genderForm;
    // }else{
    //     // alert("Please check gender! ");
    // }
}

function cultureName() {
    var maleNaming = ["Kwasi", "Kwadwo", "Twabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNaming = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var akanDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (identifyGender() === "male") {
        alert("My Akan : " + maleNaming[validateUser()]);
    } else if (identifyGender() === "female") {
        alert("My Akan : " + femaleNaming[validateUser()]);
    }else{
        alert("Please fill in the details! ");
    }
} 
// if(identifyGender()==="male"){
//     document.querySelector(".display").innerHTML="Your Akan name is "+maleNaming[validateUser()];
//     document.querySelector(".text").innerHTML="Born on "+akanDays[validateUser()];
// }else if(identifyGender()==="female"){
//     document.querySelector(".display").innerHTML="Your Akan name is "+femaleNaming[validateUser()];
//     document.querySelector(".text").innerHTML="Born on "+akanDays[validateUser()];
// }
// }