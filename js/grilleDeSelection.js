function initialiserGrilleDeSelection(){
    $('#grille').html('');
    for(var i = 1; i <= 49 ; i++){
        $('#grille').append('<button type="button" class="'+bouton+'" id="numero'+i+'">'+i+'</button>');                                
    }
    $('#grille').append('<br><br>Le numéro complémentaire :<br>');
    for(var i = 1; i <= 10 ; i++){
        $('#grille').append('<button type="button" class="'+boutonComplementaire+'" id="numero'+i+'">'+i+'</button>');                                
    }
    $('#grille').append('<br><br><button type="button" class="btn btn-default" id="enregistrerUneGrille">Ajouter</button>');
}