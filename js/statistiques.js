function statistiques(){
    initialiserStats();
    $('.resultats').html('');
    for(var i = 0; i < parseInt($('#nbStats').val()); i++){
        var nombres = getLoto();
        caclulerReussite(stats, nombres);                        
    }
    afficherResultats(nombres);
    afficherResultatsStats();
}

function afficherResultatsStats(){
    for(var i = 0; i < stats.length; i++){
        $('#grille'+i).append(' <button type="button" class="btn btn-warning btn-xs statsBouton">'+stats[i]+ "</button> bons numeros");
    }
    identifierMeilleurScore();
}

function identifierMeilleurScore(){
    var depart = 0;
    $('.statsBouton').each(function(){
        var score = parseInt($(this).text());
        if(score > depart){
            depart = score;
        }
    });
    $('.statsBouton').each(function(){
        var score = parseInt($(this).text());
        if(depart == score)
            $(this).attr('class', 'btn btn-success btn-xs statsBouton');
    });
}

function initialiserStats(){
    for(var i = 0; i < grilles.length ; i++)
        stats[i] = 0;
}

function caclulerReussite(stats, nombres){
    for(var i = 0; i < grilles.length; i++){                    
        var choix = grilles[i];
        for(var j = 0; j < choix.length; j++){
            for(var k = 0; k < nombres.length; k++){                            
                if(choix[j] == nombres[k]){
                    stats[i]++;
                }
            }
        }
    }
}