// a faire : A chaque tour recuperer la capa que le monstre va jouer et l'appliquer + Modifier les capa du joueur sur le modèle de "bouclier"


var ctpEffet = {
 ctpGlace : {
	statDeEffet : 'endu',
	valeur : 0,
	ctp : 0
},
 ctpBouclier : {
	statDeEffet : 'endu',
	valeur : 0,
	ctp : 0
}
};



/*Pour créer le jeu: 
Créez des monstres comme suis :

var statMouton = {
	nom : 'Mouton',
	classe : 'berger\'s killer',
	force : 1,
	endu : 1,
	agi : 1,
	chari: 2,
	inte : 1,
	pv: 5,
	capacite : 'rumination'
}

 // puis le mettre à la suite dans le tableau.
 
mobs.push(statMouton);

*/



/////////////////////////////////////Mes Fonctions qui claquent
////// compétences


 
 
/* rappel sur la façon d'appeller une fonction venant de l'objet "capas"

var fct = "helloWorld";
mesFonctions[fct]();
var fct2 = "helloardeche";
mesFonctions[fct2]();
*/
// initialisation 
$('#mort').css('display', 'none');

// affiche un monstre et ses stats dans la zone de jeu en fonction du lvl.
function affichermobs(lvl){
	var monstre = Object.create(Perso);
monstre.initPerso(mobs[lvl].nom, mobs[lvl].classe, mobs[lvl].force, mobs[lvl].endu, mobs[lvl].agi, mobs[lvl].chari, mobs[lvl].inte, mobs[lvl].pv, mobs[lvl].capacite, mobs[lvl].img);
$('#mnom').html(monstre.nom);
$('#mclasse').html(monstre.classe);
$('#mforce').html(monstre.force);
$('#mendu').html(monstre.endu);
$('#magi').html(monstre.agi);
$('#mchari').html(monstre.chari);
$('#minte').html(monstre.inte);
$('#mpv').html(monstre.pv);
$('#mcapacite').html(monstre.capacite);

$('#imgmonstre').css("backgroundImage", "url(img/"+ monstre.img +")");
}





/// création de l'objet perso
var Perso = {
	 initPerso: function(nom, classe, force, endu, agi, chari, inte, pv, capacite, img){
		this.classe = classe;
		this.nom = nom;
		this.force = force;
		this.endu = endu;
		this.agi = agi;
		this.chari = chari;
		this.inte = inte;
		this.pv = pv;
		this.capacité = capacite 
		this.img = img;
	},
};

var ptsAction = "";




/// gestion des lvl.
var lvl = 0;
var numMontsre = 0;

 



/////////////////////// initialisation : déclaration perso et du premier monstre.

var monPerso = "";
var capaDeBase = ['coupDeBase'];


$('#validation').click(function(){
	var force = Number($('#force').html());
	var endu =Number($('#endu').html());
	var agi =Number($('#agi').html());
	var chari =Number($('#chari').html());
	var inte =Number($('#inte').html());
	var pv =Number($('#pv').html());
	var nom= $('#nom').val();
	var classe= $('input[name=classe]:checked').val();
	var capacite= $('input[name=capaClass]:checked').attr('value');
	capaDeBase.push(capacite);	
	var monPerso = Object.create(Perso);
	monPerso.initPerso(nom, classe, force, endu, agi, chari, inte, pv, capacite);
	$("#formulaire").hide('slow');
	$("#moins").hide('slow');
	for(i=0; i<capaDeBase.length; i++){
	$("#capa").append('<button class=mesCapas id="'+capaDeBase[i]+'">'+capaDeBase[i]+'</p>');
	}
	$('#votrenom').html(monPerso.nom);
	$('#validation').hide('slow');
	affichermobs(lvl);	
	var ptsAction =recup('agi');
	afficher('ptsAction' , ptsAction);
	$('#choixJeu').css('display' , 'block');
	$('#ptsRestant').css('display', 'block');
	$('#choisissezVosStats').hide('slow');
	$('#zonePerso').css("position", "absolute");
	$('#zonePerso').css("top", "400px");
	$('#zonePerso').css("left", "35px");
	
	
});



	
/*function plusmoins(iddiv){
	var nom = iddiv.slice(0, 4);
	var operateur = iddiv.slice(4,5);
	var idreserve = $('#'+nom+'reserve');
	var idstat = $('#'+nom+'stat');
	var div = $('#'+stat+'reserve');
	var madiv = div.html();
	var Nmadiv= Number(madiv);
	
	if (operateur == 'p')
		{
			madiv = Nmadiv+1;
		}
	else
		{
		madiv = Nmadiv-1;		
		}
	
	if (madiv >10)
	{
		madiv=10;
	}
	else if (madiv <0)
	{
		madiv =0;
	}
	
	div.html(madiv);
	madiv=div.html();
}

function ajout(id, classDiv, idReserve ){
	var ptsReserve = $('idReserve').html();
	var ptsStat = $('#'+'
	if (id=='plus')
	{
		
	}
	
	
}
*/
////////////////////////////////////// Debut du code.//////////////////////////////////////////////////////////////


var statActive = "force";

// au click sur les capa crées avec javascript
$('#capa').on('click','.mesCapas',function(e){
	var mesPtsAction= recup('ptsAction');
	var id= this.id;
	var cout = (id+'_cout');
	
	if(Capas[cout] > mesPtsAction)
		{ console.log("  pas assez de pts d'action");
		}
	else
		{
			Capas[id]();
			var mpv = recup('mpv');
			if(mpv<1)
			{
				console.log('Bravo! Encore une belle victoire');
				lvl++;
				ptsAction = recup('agi');
				alert('Bravo, vous passez au lvl' + lvl);
				affichermobs(lvl);
			}
		}
});
	
////Gestion du choix de la classe et affichage des sorts///
	$(".capa").css("display" , "none");
	$('.classes').click(function(){
		var laClasse = this.id;
		$(".capa").css("display" , "none");
		$("#"+laClasse+"Classe" ).css("display" , "block");
		
	});
	
	
	
	////// gestion du choix de la stat à modifier.
	$('.stat').click(function(){
		$('.stat').css('background-color', '#b3bd21');
		var stat = this.id;	
		$("#"+ stat).css('background-color' , '#d04709');
		statActive = stat;				
	});
	////// Gestion des pts de personnages
		
		
	$('.gestionPerso').click(function(){
		var operateur = this.id;
		var reserve = Number($('#reservePerso').html());
		var ptsStat= Number($('#'+statActive).html());
		if(operateur == 'plus')
		{
			 reserve <1  ? reserve = 0 : (reserve = reserve-1 , ptsStat = ptsStat +1);			
		}
		else
		{
			reserve > 9 || ptsStat <1 ? (reserve= reserve, ptsStat = ptsStat) : (reserve = reserve+1 , ptsStat = ptsStat -1);			
		}
		$('#reservePerso').html(reserve);
		$('#'+statActive).html(ptsStat);	
		 pv = Number($('#pv').html());
		 endu =Number($('#endu').html());
		
	});


//////////////////////////////////tour de jeu///////////////////////////:
$("#finDeTour").click(function(){
	mCapas['rumination']();
	
	pv = Number($('#pv').html());
	verifieVieJoueur();
	afficher('ptsAction', (recup('ptsAction')+2));
	var mpv= recup('mpv');
	if(mpv<1)
	{console.log("monstre mort")};
	dureeEffet(ctpEffet);
	
	 
});



