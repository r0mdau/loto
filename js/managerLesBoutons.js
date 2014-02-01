function managerLesBoutons(){
    $('button').click(function(){
        if($(this).attr('class') == boutonActif){
            $(this).attr('class', bouton);
            nombresChoisis--;
        }else if(nombresChoisis <= 4 && $(this).attr('class') == bouton){
            $(this).attr('class', boutonActif);
            nombresChoisis++;
        }
        
        if($(this).attr('class') == boutonComplementaire){
            $(this).attr('class', boutonComplementaireActif);
            numeroComplementaire = parseInt($(this).text());
        }else if($(this).attr('class') == boutonComplementaireActif){
            $(this).attr('class', boutonComplementaire);
            numeroComplementaire = 0;
        }
    });
}

function initButtons(){
    $('button').each(function(){
        if($(this).attr('class') == boutonActif){
            $(this).attr('class', bouton);
        }else if($(this).attr('class') == boutonComplementaireActif){
            $(this).attr('class', boutonComplementaire);
        }
    });                
}