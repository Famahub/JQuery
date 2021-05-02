$(document).ready(function(){
    var colors = $(this).attr ('id');
    $('#blue').css('background-color' ,colors)
    console.log('#texte');
    });
    $('#button-addon1').click(function(){
        $('#blue').width('+=10');
    });
    $('#button-addon3').click(function(){
        $('#texte').hide();
    });
    $('#button-addon4').click(function(){
        $('#texte').show();
    });
    $('#button-addon5').click(function(){
        $('.colors').css('background-color','');
    });
    