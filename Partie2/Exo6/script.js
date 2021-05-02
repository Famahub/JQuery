
    // $('#green').mouseover(function(){
    //     $('#texte').css('color','green');
    // });
    
    // $('#red').mouseover(function(){
    //     $('#texte').css('color','red');
    // });
    
    // $('#blue').mouseover(function(){
    //     $('#texte').css('color','blue');
    // });

    // $('#texte').mouseout(function(){
    //     $('#texte').css('color','blue');
    // });

    $('#red, #blue, #green').mouseenter(function(){
        var couleur = $(this).attr('id');
        $('#texte').css('color', couleur)
    });

    $('#red, #blue, #green').mouseout(function(){
        $('#texte').css('color', 'black')
    });
//  // J'applique à la fois 2 évènements à mes div qui ont le ID (#red, #blue, #green)
//     $('#red, #blue, #green').on ('mouseenter mouseout', function(){
// // La méthode on () me permet d'appliquer les 2 évènements à la fois
//         var couleur = $(this).attr('id');
// // J'applique les valeurs récupérés a mon texte
//         $('#texte').toggleClass(couleur)
//     });
// // La méthode .toggleClass()ajoute une classe déja déclarer dans mon .css à mon texte
    
    
    