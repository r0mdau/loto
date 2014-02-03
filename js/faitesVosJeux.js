function faitesVosJeux(){    
    var choix = recupererNumerosSelectionnes(choix);
    choix[choix.length] = numeroComplementaire;
    
    if(grilleComplete(choix)){
        $('#grilleDesChoix').append('<span class="well well-sm">'+afficherLaGrilleDeChoix(choix) + '<span class="resultats" id="grille'+grilles.length+'"></span></span><br><br>');
        grilles[grilles.length] = choix;
        desactiverLesBoutons();
        nombresChoisis = 0;
        numeroComplementaire = 0;
    }else{
        alert('Votre sélection de numéros n\'est pas terminée !');
    }
}

function recupererNumerosSelectionnes(){
    var choix = [];
    for(var i = 1; i <= 49 ; i++){
        if($('#numero'+i).attr('class') == boutonActif){
            choix[choix.length] = i;
        }                        
    }
    return choix;
}

function grilleComplete(choix){
    return choix.length == 6 && choix[choix.length - 1] != 0;
}

function afficherLaGrilleDeChoix(choix){
    var str = "";
    for(var i = 0; i < choix.length ; i++){
        str += " "+choix[i];
    }
    return str;
}

function afficherMontantsGagnes(nombres){
    for(var i = 0; i < grilles.length; i++){
        var choix = grilles[i];   
        var cagnotte = 1;
        var bonsNumeros = 0;
        for(var j = 0; j < choix.length - 1; j++){
            for(var k = 0; k < nombres.length - 1; k++){                            
                if(choix[j] == nombres[k]){
                    bonsNumeros++;
                }
            }
        }
        if(choix[choix.length - 1] == nombres[nombres.length - 1]){
            bonsNumeros++;
        }
        $('#grille'+i).append(' <button type="button" class="btn btn-warning btn-xs">'+calculerGains(bonsNumeros)+ " €</button>");
    }
}

function calculerGains(numeros){
    var cagnotte = 0;
    switch(numeros){
        case 2: cagnotte = 6; break;
        case 3: cagnotte = 11; break;
        case 4: cagnotte = 1034; break;
        case 5: cagnotte = 103156; break;
        case 6: cagnotte = 2849969; break;
    }
    return cagnotte;
}