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
                subject: {
                    required: true,
                    minlength: 4
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
                subject: {
                    required: "Пожалуйста, укажите тему Вашего сообщния",
                    minlength: "Тема Вашего сообщения должна состоять не менее чем из 4 символов"
                },
                email: {
                    required: "Пожалуйста, укажите Ваш email"
                },
                message: {
                    required: "Вы не рассказали нам о сути Вашей проблемы",
                    minlength: "Пожалуйста, распишите тему сообщения подробнее"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"mail.php",
                    success: function() {
                        $('form :input').attr('disabled', 'disabled');
                        $('form').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('form').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})