function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /^(\+)?([ 0-9]){10,16}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    var a = document.getElementById(email).value;
    var filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}
function validateCreditCardNumber(number){
    var a = document.getElementById(number).value;
    var filter = /^4[0-9]{12}(?:[0-9]{3})?$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function tgg(elem){
    if (elem.className === "nav-link active"){
      return false;
    } else {
      document.querySelectorAll("#mynavitem").forEach((li) => {
      li.classList.remove("active");
})
    }
    elem.classList.add("active");
} 

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}

function collps(elem, price){
    $("#"+$(elem).attr("aria-controls")).css("transition","1.5s");
    if( $("#"+$(elem).attr("aria-controls")).css("display") == "block") {
        $("#"+$(elem).attr("aria-controls")).css("display","none");
        return 0;
    } 
    var myarray = document.getElementsByClassName("btn");
    for (var i = 0; i < myarray.length; i++) {
        const dt = myarray[i];
        if ($(dt).attr("aria-controls") != $(elem).attr("aria-controls")) {
            $("#"+$(dt).attr("aria-controls")).css("transition","1.5s");
                $("#"+$(dt).attr("aria-controls")).css("display","none");
            }
    }
    $("#"+$(elem).attr("aria-controls")).css("display","block");
    selectedService = $(elem).text()
    servicePrice = price
}