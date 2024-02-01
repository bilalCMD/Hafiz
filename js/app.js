$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        }
        else {
            $('.top').hide();
        }
    });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        );
    });
});


function validate() {
    let name = document.querySelector('.username');
    let email = document.querySelector('.email');
    let message = document.querySelector('.message');
    let sendbtn = document.querySelector('.sendbtn');

    sendbtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || message.value == "") {
            emptyerror();
        }
        else {
            sendmail(name.value, email.value, message.value);
            success();

            document.querySelector('.username').value = "";
            document.querySelector('.email').value = "";
            document.querySelector('.message').value = "";
        }
    });
}

validate();

function sendmail(name, email, message) {
    emailjs.send("service_w0wjyf9", "template_i8ukziq", {
        from_name: email,
        to_name: name,
        message: message,
    });
}

function emptyerror() {
    swal({
        title: "Error!",
        text: "Fields cannot be empty!",
        icon: "error",
    });
}

function success() {
    swal({
        title: "Email Sent Successfully!",
        text: "I'll get back to you soon.",
        icon: "success",
    });
}
