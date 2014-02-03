/* Variables globales définissant les styles des boutons */
var bouton = 'btn btn-default btn-xs';
var boutonActif = 'btn btn-info btn-xs active';
var boutonComplementaire = 'btn btn-danger btn-xs'
var boutonComplementaireActif = 'btn btn-success btn-xs active'

function managerLesBoutons(){
    $('button').click(function(){
        if($(this).attr('class') == boutonActif){
            $(this).attr('class', bouton);
            nombresChoisis--;
        }else if(nombresChoisis <= 4 && $(this).attr('class') == bouton){
            $(this).attr('class', boutonActif);
            nombresChoisis++;
        }
        
        if(numeroComplementaire == 0 && $(this).attr('class') == boutonComplementaire){
            $(this).attr('class', boutonComplementaireActif);
            numeroComplementaire = parseInt($(this).text());
        }else if($(this).attr('class') == boutonComplementaireActif){
            $(this).attr('class', boutonComplementaire);
            numeroComplementaire = 0;
        }
    });
}

function desactiverLesBoutons(){
    $('button').each(function(){
        if($(this).attr('class') == boutonActif){
            $(this).attr('class', bouton);
        }else if($(this).attr('class') == boutonComplementaireActif){
            $(this).attr('class', boutonComplementaire);
        }
    });                
}