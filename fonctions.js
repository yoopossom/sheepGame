
 
 function recup(iDdiv){
	var donnees= Number($('#'+iDdiv).html());
	
	return donnees;
}

function afficher(idDiv, texte){
	$('#'+idDiv).html(texte);
}

//Verifie si le joueur est encore en vie
function verifieVieJoueur(){
	var pv=recup('pv');
	if(pv<0){
		$('#wrapper').css('display', 'none');
		$('#mort').css('display', 'block');
	}
}


//entite = p pour les stat du perso et m pour les stats des monstres
function stats(entite){
	var stat= new Object();
	if (entite=='p'){
	stat.agi= recup('agi');
	stat.force= recup('force');
	stat.endu= recup('endu');
	stat.chari= recup('chari');
	stat.inte= recup('inte');
	stat.pv=recup('pv');
	stat.ptsA=recup('ptsAction');
	}
	else if (entite=='m'){
	stat.agi= recup('magi');
	stat.force= recup('mforce');
	stat.endu= recup('mendu');
	stat.chari= recup('mchari');
	stat.inte= recup('minte');
	stat.pv=recup('mpv');
	}
	return stat;
}

//fonction qui verifie si le joueur a assez de pts d'action pour lancer sa competence
function verifPtsAction(cout){
		var ptsAction = recup('ptsAction');	
		var assez = true;
		if(ptsAction<cout){
			assez=false;
		}
		return assez;
		};

// fonction qui gère les effets de fin de tour

function effetFinDeTour(tab){
	var statp= stats('p');
	var statm= stats('m');
	
	for (var stat in tab) {
		
		if((tab[stat])!=0){
			var lastat=recup(stat);
			
			var pts=tab[stat];
			
			var resultat = (lastat - pts);
			
			afficher(stat, resultat);
			tabEffet[stat] = 0;
		};
	};
	
};

// fonction qui gère la durée des effets.

function dureeEffet(tab){
	for (var capa in tab) {
		var statp= stats('p');
		var statm= stats('m');
		
		var lastat = tab[capa].statDeEffet;
		var valeur = tab[capa].valeur;
		var ctp = tab[capa].ctp;
		console.log(ctp);
		if(ctp>0){
			tab[capa].ctp = ctp-1;
			
		}
		else{
			
			
			statp[lastat] -= valeur;
			afficher(lastat, statp[lastat]);
			tab[capa].valeur = 0;
			
		}
	};
};




	














