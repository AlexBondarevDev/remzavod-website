document.getElementById("mail-button").addEventListener('click', function() {
    var mailload = document.getElementById("sendMailSpin");
    mailload.style.visibility = 'visible';
});

$(document).ready(function(){
    
    (function($) {
        "use strict";

        jQuery.validator.addMethod('answercheck', function (value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, укажите Ваше имя",
                    minlength: "Ваше имя должно состоять не менее чем из 2 символов"
                },
                email: {
                    required: "Пожалуйста, укажите Ваш email"
                },
                message: {
                    required: "Вы не рассказали нам о сути Вашего обращения",
                    minlength: "Пожалуйста, распишите тему сообщения подробнее"
                }
            },
            submitHandler: function(form) {
                $('.button-contactForm').prop('disabled', true);

                var formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    message: document.getElementById('message').value
                };
            
                $(form).ajaxSubmit({
                    type: "POST",
                    data: formData,
                    url: "php/mail.php",
                    success: function(response) {
                        $('.button-contactForm').prop('disabled', false);
                        var mailload = document.getElementById("sendMailSpin");
                        mailload.style.visibility = 'hidden';
                        if (response === "success") {
                            $('#name').val('');
                            $('#email').val('');
                            $('#message').val('');
                            window.location.href = "thank-you.html";
                        } else {
                            window.location.href = "error.html";
                        }
                    },
                    error: function() {
                        $('.button-contactForm').prop('disabled', false);
                        var mailload = document.getElementById("sendMailSpin");
                        mailload.style.visibility = 'hidden';
                        window.location.href = "error.html";
                    }
                });
            }
            
        })
    })
        
 })(jQuery)
 
})