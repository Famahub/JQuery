// On charge le Dom avant d'effectuer l'action via JQuery
  $(document).ready(function(){
//On créer un objet Jquery auquelle on applique l'èvenement dblclick
    $('#image').dblclick(function(){
        // J'applique le méthode .css à mon objet #image à laquelle je passe les paramètres
    $('#image').width(500);
    // Le mots clé This fait référence à l'objet déja déclaré.
    });
  });