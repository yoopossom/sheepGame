// tableau regroupant les stats des differents mobs
var mobs = [];
// stats de chaque mobs (qui est envoyé dans le tableau mobs.)
var statMouton = {
	nom : 'Mouton',
	classe : 'berger\'s killer',
	force : 3,
	endu : 1,
	agi : 1,
	chari: 2,
	inte : 1,
	pv: 5,
	capacite : 'rumination',
	img : 'mouton.png',
	
}

mobs.push(statMouton);

var statTenias = {
	nom : 'Tenias',
	classe : 'Locataire du ventre de mouton',
	force : 1,
	endu : 1,
	agi : 1,
	chari: 2,
	inte : 1,
	pv: 5,
	capacite : 'infestation',
	img : 'tenia.png'
}

mobs.push(statTenias);


// liste des capas des monstre

var mCapas = {
	//inflige la difference entre l'attaque et l'endu en dégat	
	coupDeBase : function() {
	var statp= stats('p');
	var statm= stats('m');	
	
	var att = statm.force;
	var def = statp.endu;
	var pv = statp.pv;
	var dmg =  att - def;
	
	
	afficher('pv', (pv - dmg));
	
	},
	
	rumination : function() {
	var statp= stats('p');
	var statm= stats('m');
	
	var dgt = (statm.force + 3) - statp.endu;
	if(dgt<1){
		dgt=0;
	}
	afficher('pv', (statp.pv - dgt));
	}
	
};


	
	
	// liste des capas du perso
var Capas = {

//inflige la difference entre l'attaque et l'endu en dégat	
  coupDeBase : function() {
	 
	var cout = 1;
	verifPtsAction(cout);
	var statp= stats('p');
	var statm= stats('m');
		
	var att = statp.force;
	var def = statm.endu;
	var pv = statm.pv;
	var dmg =  att - def;
	var ptsAction= recup('ptsAction');
	
	afficher('mpv', (pv - dmg));
	afficher('ptsAction', (ptsAction-cout));	
  },
  
// augmente votre endu de 3 jusqu'au prochain tour 
  bouclier : function() {
	var cout = 1;
	if(verifPtsAction(cout)){
	var statp= stats('p');
	var statm= stats('m');
	afficher('endu', (statp.endu + 3));
	ctpEffet.ctpBouclier.ctp=0;
	ctpEffet.ctpBouclier.valeur+=3;
	statp.ptsA -=cout;
	afficher('ptsAction', statp.ptsA);
	
	}
	else{
		alert('desolé, pas assez de pts d action');
	}
	
  },
  
  // augmente votre endu de 1 jusqu'au prochain tour
  glace : function() {
	  
	var cout = 2;
	verifPtsAction(cout);
	var statp= stats('p');
	var statm= stats('m');
	afficher('endu', (statp.endu + 2));
	tabEffet.endu = 3;
	
	ctpEffet.ctpGlace.ctp=3;
	ctpEffet.ctpGlace.valeur=2;
	
  },
  
  glace : function() {
	  
  },
  bdf : function() {
  },
  ruminer : function() {
  }
};