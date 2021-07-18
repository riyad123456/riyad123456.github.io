var error = {
    "creditcardError":"Credit card number must start with a 4 and contain 16 digits.",
    "emptycreditcardError":"Credit card number must contain at least one character.",
    "phonenumberError":"Phone number must contain between 10 and 16 digits. It can only contain + as a special character.",
    "firstnameError":"First name must contain at least one character.",
    "lastnameError":"Last name must contain at least one character.",
    "emailError":"Wrong email formatting.",
    "emptyphonenumberError":"Phone number must contain at least one character.",
    "emptyemailError":"Email must contain at least one character.",
    "emptydate":"Date field empty."
}
var currentUser = {}
var selectedService;
var servicePrice;
var availabilityMessage = {
    "Caroline Tanner":["Please note that Dr. Caroline is only available on mondays and thursdays.", 1,4],
    "Max Willer":["Please note that Dr. Max is only available on tuesdays and wednesdays.",2,3],
    "Anna Stocking":["Please note that Dr. Anna is only available on wednesday and fridays.",3,5]
}

$('#inputerror').toggle('show')
$('#inputerror1').toggle('show')
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";
var toggled;
toggled = false;
$(document).ready(function(){
    $('#PaymentModal').modal({
        backdrop: 'static',
        keyboard: false
    })
    var selectedExpert = $("#expert-select option:selected" ).text();
    document.querySelector("#expert-availability-alert").innerHTML = availabilityMessage[selectedExpert][0]
    document.querySelector("#expert-select").onchange = () => {
        var selectedExpert = $("#expert-select option:selected" ).text();
        document.querySelector("#expert-availability-alert").innerHTML = availabilityMessage[selectedExpert][0]
        $("#datepicker").datepicker("destroy");
        document.querySelector("#datepicker").value="";
        $('#datepicker').datepicker({
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: disableDates,
            beforeShowDay: function(day) {
                var day = day.getDay();
                if (day == availabilityMessage[selectedExpert][1] || day == availabilityMessage[selectedExpert][2]) {
                    return [true, "somecssclass"]
                } else {
                    return [false, "someothercssclass"]
                }
             }
          });
    }
    $('#datepicker').datepicker({
        dateFormat: setDateFormat,
        // no calendar before June 1rst 2020
        minDate: new Date('06/01/2020'),
        maxDate: '+4M',
        // used to disable some dates
        beforeShowDay: disableDates,
        beforeShowDay: function(day) {
            var day = day.getDay();
            if (day == 1 || day == 4) {
                return [true, "somecssclass"]
            } else {
                return [false, "someothercssclass"]
            }
         }
      });
    $('a').click(function(){
        console.log($( $(this).attr('href') ).offset().top)
          $('html, body').animate({
              scrollTop: $( $(this).attr('href') ).offset().top - 10
          },10);
          return false;
      });
    $('#datepicker').datepicker({
        dateFormat: setDateFormat,
        // no calendar before June 1rst 2020
        minDate: new Date('06/01/2020'),
        maxDate: '+4M',
        // used to disable some dates
        beforeShowDay: disableDates
      });
    $('#datepicker').css('font-size','15px')
    window.onscroll = function() {scrollListen()};
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#CreditCardName").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#Expiry").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#CVV").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#firstname").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#lastname").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#email").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#phonenumber").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#datepicker").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#time").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#expert-select").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#phonenumber").on("change", function(){
        if (!validatePhone("phonenumber")){
            $("#phonenumber").addClass("error");
        }
        else {
            $("#phonenumber").removeClass("error");
        }
    });


});



function validateInputs(elem){
    var  errorMessage = "";
    if(document.querySelector("#firstname").value === ""){ errorMessage += `* ${error['firstnameError']}<br/>`}
    if(document.querySelector("#lastname").value === ""){ errorMessage += `* ${error['lastnameError']}<br/>`}
    if(document.querySelector("#datepicker").value === ""){ errorMessage += `* ${error['emptydate']}<br/>`}
    if($("#email").val === ""){ errorMessage += `* ${error['emptyemailError']}<br/>`}
    else if (!validateEmail("email")){ errorMessage += `* ${error['emailError']}<br/>`}
    if($("#phonenumber").val === ""){ errorMessage += `* ${error['emptyphonenumberError']}<br/>`}
    else if (!validatePhone("phonenumber")){ errorMessage += `* ${error['phonenumberError']}<br/>`}
    if (errorMessage === "") {
        $(elem).attr("data-bs-dismiss","modal")
        $(elem).attr("data-bs-toggle","modal")
        $(elem).attr("data-bs-target","#PaymentModal")
        elem.click()
        $(elem).attr("data-bs-dismiss","")
        $(elem).attr("data-bs-toggle","")
        $(elem).attr("data-bs-target","")
        if(toggled){
            $('#inputerror').toggle('show')
            toggled = !toggled;
        }
        currentUser['firstname'] = document.querySelector('#firstname').value
        currentUser['lastname'] = document.querySelector('#lastname').value
        currentUser['email'] = document.querySelector('#email').value
        currentUser['phonenumber'] = document.querySelector('#phonenumber').value
        currentUser['date'] = document.querySelector('#datepicker').value
        currentUser['time'] = $("#time option:selected" ).text()
        currentUser['expert'] = $("#expert-select option:selected" ).text()
        currentUser['service'] = selectedService
        currentUser['price'] = servicePrice
    } else {
        if(!toggled){
            $('#inputerror').toggle('show')
            toggled = !toggled;
        }
        document.querySelector('#errorContent').innerHTML = errorMessage;
        document.querySelector('#inputerror').scrollIntoView(false)
    }
}
function validatePayment(elem){
    //TODO:
    var  errorMessage = "";
    if($("#debit").val === ""){ errorMessage += `* ${error['emptycreditcardError']}<br/>`}
    else if(!validateCreditCardNumber("debit")){errorMessage += `* ${error['creditcardError']}<br/>`}
    if (errorMessage === "") {
        $(elem).attr("data-bs-dismiss","modal")
        $(elem).attr("data-bs-toggle","modal")
        $(elem).attr("data-bs-target","#succesModal")
        document.querySelector("#table-name").innerHTML = `${currentUser['firstname']} ${currentUser['lastname']}`
        document.querySelector("#table-email").innerHTML = (currentUser['email'])
        document.querySelector("#table-phonenumber").innerHTML = (currentUser['phonenumber'])
        document.querySelector("#table-date").innerHTML = (`${currentUser['time']}, ${currentUser['date']}`)
        document.querySelector("#table-service").innerHTML = (currentUser['service'])
        document.querySelector("#table-expert").innerHTML = (currentUser['expert'])
        document.querySelector("#table-price").innerHTML = (currentUser['price'])
        elem.click()
        $(elem).attr("data-bs-dismiss","")
        $(elem).attr("data-bs-toggle","")
        $(elem).attr("data-bs-target","")
        if(toggled){
            $('#inputerror1').toggle('show')
            toggled = !toggled;
        }
    } else {
        if(toggled){
            $('#inputerror1').toggle('show')
            $('#inputerror1').toggle('show')
        }
        else {
            $('#inputerror1').toggle('show')
            toggled = !toggled;
        }
        document.querySelector('#errorContent1').innerHTML = errorMessage;
        document.querySelector('#inputerror1').scrollIntoView(false)
    }
}



function scrollListen() {
    var navbar = document.getElementById("home-button-2");
    var sticky = navbar.offsetTop;
    var about = document.getElementById("about");
    var accordion = document.getElementById("accordion");
    var expert = document.getElementById("expert");
    var aboutoffst = about.offsetTop;
    var accordionoffst = accordion.offsetTop;
    var expertoffst = expert.offsetTop;
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbar.classList.remove("p-4");
        navbar.classList.add("p-2");

    } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("p-4");
        navbar.classList.remove("p-2");
    } if (window.pageYOffset >= expertoffst-300){
        tgg(document.querySelectorAll("#mynavitem")[2]);
    } else if (window.pageYOffset >= accordionoffst-250){
        tgg(document.querySelectorAll("#mynavitem")[1]);
    } else if (window.pageYOffset >= aboutoffst-250){
        tgg(document.querySelectorAll("#mynavitem")[0]);
    }
}


function changeSelectedService(elem){

}
