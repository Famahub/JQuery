(document).ready(function(){
$('input').focus(function(){
$(this).css('border','1px solid green');
    });
});

(document).ready(function(){
$('input').focusout(function(){
$(this).css('border','1px solid red');
    });
});

