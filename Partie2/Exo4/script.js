
// $('#green').click(function(){
//     $('#texte').css('color','green');
// });

// $('#red').click(function(){
//     $('#texte').css('color','red');
// });

// $('#blue').click(function(){
//     $('#texte').css('color','blue');
// });

$('.color').click(function(){
    var id = $(this). attr('id');
    $('texte').css ('color', id);
});


