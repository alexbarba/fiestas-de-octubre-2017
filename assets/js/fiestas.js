// Oculta el elemento del id que le mande
function playJingle() {
	var snd = new Audio("jingleFiestas.mp3");
	document.getElementById("playButton").style.display = "none";
	document.getElementById("stopButton").style.display = "block";
	var stopButton = document.getElementById("stopButton");
	snd.play();
	
	stopButton.onclick= function(){
		snd.pause();
		snd.currentTime = 0;
		document.getElementById("playButton").style.display = "block";
		document.getElementById("stopButton").style.display = "none";
	}
	snd.onended = function(){
	document.getElementById("playButton").style.display = "block";
	document.getElementById("stopButton").style.display = "none";
	}
}

function hide_show(id) {
	var x = document.getElementById(id);
	if (x.style.display === 'none') {
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
}

function hide(id){
	x.style.display === 'none'
	}
	
// Muestra el modal o lo esconde
function modal(mod) {
	var x = document.getElementById(mod);
	if (x.style.display == "none") {
		x.style.display = 'block';
		clickoutsidemodal(x);
	} else {
		x.style.display = 'none';
	}
}


function chooseArtist(id){
	var img = document.getElementById("imgArtist");
	var name = document.getElementById("nameArtist");
	var description = document.getElementById("descriptionArtist");
	var web = document.getElementById("webArtist");
	var day = document.getElementById("dayArtist");
	var hr = document.getElementById("hrArtist");
	switch(id) {
		case 1:
			img.src= "images/artistas/paco-renteria.png";
			name.innerHTML = "Paco Renteria";
			description.innerHTML = "El guitarrista mexicano Paco Rentería volverá a casa para recibir el cariño del público de Fiestas de Octubre. Le sigue el certamen de la Reina de Fiestas de Octubre 2017. Ruedo: $50.00";
			web.href = "http://pacorenteria.com/";
			day.innerHTML = "29 de Septiembre";
			hr.innerHTML = "18:30 hrs";
			break;
		case 2:
			img.src = "images/artistas/astilleros.png";
			name.innerHTML = "Banda Astilleros";
			description.innerHTML = "Este 30 de octubre, El Gran Proyecto, Sonora Vainilla, Sonora Karamelo y Banda Astilleros harán bailar a Fiestas de Octubre. Entrada gratuita al ruedo.";
			web.href = "http://inconteniblebandaastilleros.com/ ";
			day.innerHTML = "30 de septiembre";
			hr.innerHTML = "19:00";
			break;
		case 3:
			img.src = "images/artistas/paw-patrol.png";
			name.innerHTML = "Paw Patrol";
			description.innerHTML = "Ven con tus hijos a disfrutar en vivo del espectáculo más peludito y tierno de la televisión infantil. Ruedo: $50.00";
			web.href = "http://la.nickjr.tv/paw-patrol/";
			day.innerHTML = "01 de octubre"
			hr.innerHTML = "12:00 / 16:00";
			break;
		case 4:
			img.src = "images/artistas/banda-retro.png";
			name.innerHTML = "Bandas Retro";
			description.innerHTML = "Mi Banda El Mexicano, Banda Pequeños y Banda Maguey pondrán a bailar a sus fans de Guadalajara en el Auditorio Benito Juárez. Ruedo: $50.00";
			web.href = "";
			day.innerHTML = "02 de octubre";
			hr.innerHTML = "18:00";
			break;
		case 5:
			img.src = "images/artistas/septima-banda.png";
			name.innerHTML = "Mano a mano";
			description.innerHTML = "Ven a cantar con La Séptima Banda a Fiestas de Octubre. Ruedo: $50.00";
			web.href = "http://www.universalmusica.com/laseptimabanda/";
			day.innerHTML = "03 de octubre";
			hr.innerHTML = "20:00";
			break;
		case 6:
			img.src = "images/artistas/festival-dj.png";
			name.innerHTML = "Madan North Battle";
			description.innerHTML = "Déjate llevar por este festival de DJ’s en Fiestas de Octubre. Ruedo: $50.00";
			web.href = "";
			day.innerHTML = "04 de octubre";
			hr.innerHTML = "20:00";
			break;
		case 7:
			img.src = "images/artistas/amigos-invisibles.png";
			name.innerHTML = "Los Amigos Invisibles";
			description.innerHTML = "Esa noche tú sí andarás ahí. Desde venezuela para tus oídos.  Ruedo: $150.00";
			web.href = "https://www.amigosinvisibles.com/es/";
			day.innerHTML = "05 de octubre";
			hr.innerHTML = "20:00";
			break;
		case 8:
			img.src = "images/artistas/india-yuridia.png";
			name.innerHTML = "India Yuridia";
			description.innerHTML = "Una noche de risas y diversión te esperan a ti y a toda la familia junto a estas dos maestras del entretenimiento: la India Yuridia y Edith Murrieta. Ruedo: $50.00";
			web.href = "http://laindiayuridia.com.mx/";
			day.innerHTML = "06 de octubre";
			hr.innerHTML = "20:00";
			break;
		case 9:
			img.src = "images/artistas/sonora-kaliente.png";
			name.innerHTML = "Sonoras";
			description.innerHTML = "Ve buscando pareja, porque esta noche se vive mejor acompañado del amor y de los sonidos de las Sonoras Kaliente, Palomar y Vainilla. Ruedo: $50.00";
			web.href = "http://www.sonorakaliente.com/";
			day.innerHTML = "07 de octubre";
			hr.innerHTML = "18:00";
			break;
		case 10:
			img.src = "images/artistas/festival-bandas.png";
			name.innerHTML = "Festival de Bandas";
			description.innerHTML = "El domingo se hizo para disfrutar. Y qué mejor que sea al ritmo de La Misma Tierra, Estrellas de Sinaloa y Saucillos. Ruedo: $50.00";
			web.href = "https://www.facebook.com/bandalamismatierra/";
			day.innerHTML = "08 de octubre";
			hr.innerHTML = "16:00";
			break;
		case 11:
			img.src = "images/artistas/grupo-pesado.png";
			name.innerHTML = "Grupo Pesado";
			description.innerHTML = "“El grupo que vale lo que pesa” presenta sus más grandes éxitos en el marco espectacular de nuestras fiestas de orgullo. Ruedo: $100.00";
			web.href = "http://pesado.mx/index.html";
			day.innerHTML = "09 de octubre";
			hr.innerHTML = "20:00";
			break;
		case 12:
			img.src = "images/artistas/piso-21.png";
			name.innerHTML = "Piso 21 / Urband5 / VLBrand";
			description.innerHTML = "Desde Colombia para Guadalajara, te invitamos a conocer esta propuesta que seguro te hará bailar. Ruedo: $100.00";
			web.href = "https://www.facebook.com/Piso21Music/";
			day.innerHTML = "10 de octubre";
			hr.innerHTML = "20:00";
			break;
		case 13:
			img.src = "images/artistas/cd9.png";
			name.innerHTML = "CD9";
			description.innerHTML = "Porque tú lo pediste Jos, Alonso, Freddy, Alan y Bryan llegan a Guadalajara a contagiarnos con su pop pegajoso. Ruedo: $200.00";
			web.href = "https://cd9.mx/";
			day.innerHTML = "11 de octubre";
			hr.innerHTML = "20:00";
			break;
		case 14:
			img.src = "images/artistas/poly-marsh.png";
			name.innerHTML = "Polymarchs";
			description.innerHTML = "SMF X1 te presenta este espectáculo electrónico que no no querrás perder. La entrada al ruedo es gratis.";
			web.href = "";
			day.innerHTML = "12 de octubre";
			hr.innerHTML = "20:00";
			break;
		case 15:
			img.src = "images/artistas/fidel-rueda.png";
			name.innerHTML = "Embajadora del tequila / Fidel Rueda";
			description.innerHTML = "Sé testigo del certamen de la embajadora del tequila a las 18:00. A las 20:00 bailemos todos con la música de Fidel Rueda. Ruedo: $50.00.";
			web.href = "http://www.fidelrueda.com.mx/";
			day.innerHTML = "13 de octubre";
			hr.innerHTML = "18:00 / 20:00";
			break;
		case 16:
			img.src = "images/artistas/memorias-romantica.png";
			name.innerHTML = "Memorias Románticas";
			description.innerHTML = "Agarra pareja y enciende el amor con Baby’s, Freddy’s, Terricolas y Muecas. Ruedo: $100.00";
			web.href = "https://www.facebook.com/freddys.oficial/";
			day.innerHTML = "14 de octubre";
			hr.innerHTML = "18:00";
			break;
		case 17:
			img.src = "images/artistas/lemongrass.png";
			name.innerHTML = "Deylan & Alejandri Millán / LemonGrass";
			description.innerHTML = "Dos pequeños grandes de la música listos para hacerte bailar en las Fiestas de Octubre a las 12:00. Lemoners, ¿están listos para este gran evento a las 16:00? Ruedo: $50.00.";
			web.href = "https://www.facebook.com/GrupoLemonGrass/";
			day.innerHTML = "15 de octubre";
			hr.innerHTML = "12:00 / 16:00";
			break;
		case 18:
			img.src = "images/artistas/agua-de-la-llave.png";
			name.innerHTML = "La inolvidable Agua de la llave";
			description.innerHTML = "Ven a beber de esta agua, te aseguramos que te la vas a pasar muy bien. ¡Pasa una noche inolvidable! Ruedo: $100.00";
			web.href = "http://www.lainolvidableaguadelallave.com/banda-inolvidable-agua-de-la-llave/";
			day.innerHTML = "16 de octubre";
			hr.innerHTML = "18:00";
			break;
		case 19:
			img.src = "images/artistas/mario-bautista.png";
			name.innerHTML = "Señorita México / Mario Bautista";
			description.innerHTML = "Rodéate de belleza y conoce a las participantes por el título de Señorita México a las 18:00. Luego, el fenómeno del pop mexicano Mario Bautista brillará en nuestras Fiestas con su espectáculo sólo para bautisters de verdad a las 20:00. Ruedo: $100.00";
			web.href = "www.mariobautista.mx";
			day.innerHTML = "17 de octubre";
			hr.innerHTML = "18:00 / 20:00";
			break;
		case 20:
			img.src = "images/artistas/gente-de-zona.png";
			name.innerHTML = "Gente de Zona";
			description.innerHTML = "Gente de Zona llega a Fiestas de Octubre para hacerte vibrar con sus ritmos de reggaeton y sonido latino. Ruedo: $300.00";
			web.href = "http://gdzoficial.com/";
			day.innerHTML = "18 de octubre";
			hr.innerHTML = "20:00";
			break;
		case 21:
			img.src = "images/artistas/sebastian-yatra.png";
			name.innerHTML = "Sebastián Yatra";
			description.innerHTML = "Sebastián viene con su pop melódico a endulzar los oídos tapatíos con sus más dulces canciones. Ruedo: $100.00";
			web.href = "https://www.facebook.com/OficialSebastianYatra/?fref=ts ";
			day.innerHTML = "19 de octubre";
			hr.innerHTML = "20:00";
			break;
		case 22:
			img.src = "images/artistas/teo-gonzalez.png";
			name.innerHTML = "Teo González";
			description.innerHTML = "Teo viene con todo. Su mejor repertorio de chistes es la mejor medicina para aligerar tu semana y pasar un buen rato. Ruedo: $100.00";
			web.href = "https://www.facebook.com/TeoGonzalezComedia/?fref=ts ";
			day.innerHTML = "20 de octubre";
			hr.innerHTML = "20:00";
			break;
		case 23:
			img.src = "images/artistas/funcion-box.png";
			name.innerHTML = "Función de Box";
			description.innerHTML = "Por si te hacía falta, sé testigo en el enfrentamiento de estos titanes que traen para ti lo más extremo del box. Armero y Televisa deportes presentan. Ruedo: $150.00";
			web.href = "";
			day.innerHTML = "21 de octubre";
			hr.innerHTML = "19:00";
			break;
		case 24:
			img.src = "images/artistas/trolls.png";
			name.innerHTML = "Trolls";
			description.innerHTML = "Sé parte de la magia de los Trolls en este espectáculo familiar. Ruedo: $50.00";
			web.href = "http://www.dreamworks.com/trolls/";
			day.innerHTML = "22 de octubre";
			hr.innerHTML = "12:00 / 16:00";
			break;
		case 25:
			img.src = "images/artistas/cuisillos.png";
			name.innerHTML = "Cuisillos";
			description.innerHTML = "¿Y ahora qué hago? Pues cancelar planes que el lunes se vive al ritmo de Cuisillos y Banda San Miguel. Ruedo: $50.00";
			web.href = "http://www.cuisillos.com/ ";
			day.innerHTML = "23 de octubre";
			hr.innerHTML = "19:00";
			break;
		case 26:
			img.src = "images/artistas/imponente-vientos-de-jalisco.png";
			name.innerHTML = "ESP. Videorola";
			description.innerHTML = "Se va a acordar de mí… si lo llevo a ver a la Imponente Vientos de Jalisco el martes en Fiestas de Octubre. ¡No puedes faltar! Ruedo: $50.00";
			web.href = "https://www.facebook.com/ImponenteVientosDeJalisco/ ";
			day.innerHTML = "24 de octubre";
			hr.innerHTML = "18:00";
			break;
		case 27:
			img.src = "images/artistas/artista-sorpresa.png";
			name.innerHTML = "Remmy Valenzuela";
			description.innerHTML = "Acompañemos a este Loco Enamorado al ritmo de los éxitos de Remmy Valenzuela en Fiestas de Octubre. Ruedo: $300";
			web.href = "https://www.facebook.com/RemmyValenzuela/ ";
			day.innerHTML = "25 de octubre";
			hr.innerHTML = "20:00";
			break;
		case 28:
			img.src = "images/artistas/tom-collins.png";
			name.innerHTML = "Tom & Collins";
			description.innerHTML = "El dúo mexicano que está sonando por el mundo en Fiestas de Octubre junto con Jorge Nava. Ruedo: $150.00";
			web.href = "http://www.tomandcollins.com/home.php";
			day.innerHTML = "26 de octubre";
			hr.innerHTML = "20:00";
			break;
		case 29:
			img.src = "images/artistas/raul-di-blasio.png";
			name.innerHTML = "Raúl Di Blassio";
			description.innerHTML = "El piano de américa llega a Fiestas de Octubre para deleitarnos con sus mejores éxitos junto con la filarmónica de Jalisco. Ruedo: $100.00";
			web.href = "https://twitter.com/raul_di_blasio?lang=es";
			day.innerHTML = "27 de octubre";
			hr.innerHTML = "20:00";
			break;
		case 30:
			img.src = "images/artistas/sonora-santanera.png";
			name.innerHTML = "La internacional Sonora Santanera";
			description.innerHTML = "La noche con más sabor de todo octubre estará sazonada por las sonoras con más ritmo de todo México: la internacional Sonora Santanera, Tropicana y Mermelada. Ruedo: $100.00";
			web.href = "http://www.launicainternacionalsonorasantanera.com.mx/";
			day.innerHTML = "28 de octubre";
			hr.innerHTML = "18:00";
			break;
		case 31:
			img.src = "images/artistas/my-little-pony.png";
			name.innerHTML = "My Little Pony";
			description.innerHTML = "El espectacular show de “My Little Pony” regresa a Guadalajara para vivir una gran aventura musical. Ruedo: $50.00";
			web.href = "https://mylittlepony.hasbro.com/es-mx";
			day.innerHTML = "29 de octubre";
			hr.innerHTML = "12:00 / 16:00";
			break;
		case 32:
			img.src = "images/artistas/galanes-de-la-banda.png";
			name.innerHTML = "Galanes de la Banda";
			description.innerHTML = "Joss Favela, Luis Coronel, León Rodríguez y Cuitla Vega listos para hacerte vivir una noche inolvidable. Ruedo: $100.00";
			web.href = "https://www.facebook.com/luiscoronelmusic/";
			day.innerHTML = "30 de octubre";
			hr.innerHTML = "18:00";
			break;
		case 33:
			img.src = "images/artistas/lucha-libre.png";
			name.innerHTML = "Lucha Libre";
			description.innerHTML = "Te esperamos de dos a tres caídas sin lìmite de tiempo a la lucha estelar de Blue Demon Jr, Rayo de Jalisco, Huracán Ramírez, 100 Caras, Espectro, Máscara año 3000. Ruedo: $150.00";
			web.href = "http://www.luchalibreaaa.com/";
			day.innerHTML = "31 de octubre";
			hr.innerHTML = "20:00";
			break;
		case 34:
			img.src = "images/artistas/yuri.png";
			name.innerHTML = "Yuri";
			description.innerHTML = "El carisma y la voz de “La Jarocha” llegan a Guadalajara con todos sus éxitos de sus casi 40 años de carrera musical en este gran cierre pop. Ruedo: $300.00";
			web.href = "https://www.facebook.com/YuriOficial/ ";
			day.innerHTML = "01 de noviembre";
			hr.innerHTML = "20:00";
			break;
		case 35:
			img.src = "images/artistas/artista-sorpresa.png";
			name.innerHTML = "Banda MS";
			description.innerHTML = "Luego de la recuperación de Alan Ramírez, la banda MS se presenta en el día de todos los muertos para deleitarnos con sus canciones";
			web.href = "http://www.bandams.com.mx/";
			day.innerHTML = "02 de noviembre";
			hr.innerHTML = "20:00";
			break;
		case 36:
			img.src = "images/artistas/mariachi-sol-mexico.png";
			name.innerHTML = "Jalisco Canta con José Hernández";
			description.innerHTML = "Acompáñanos junto con José Hernández a vivir los ritmos mexicanos que llevamos en la piel. Ruedo: $100.00";
			web.href = "https://www.facebook.com/JaliscoCanta/";
			day.innerHTML = "03 de noviembre";
			hr.innerHTML = "18:00";
			break;
		case 37:
			img.src = "images/artistas/gala-de-mexico.png";
			name.innerHTML = "Ballet Folklórico Gala de México";
			description.innerHTML = "Con todo el corazón y la tradición, te esperamos en Fiestas de Octubre.";
			web.href = "https://www.facebook.com/grupofolkloricogalademexico/";
			day.innerHTML = "04 de noviembre";
			hr.innerHTML = "18:00";
			break;
		default:
			break;
	}
	modal('artist'); 
	
} 

function clickoutsidemodal(x){
	window.onclick = function(event) {
		if (event.target == x) {
			x.style.display = "none";
		}
	}
}

document.getElementById("stopButton").style.display = "none";


// Get the modal
var cartelera = document.getElementById('cartelera');
var canica = document.getElementById('canica');
var reina = document.getElementById('reina');
var atracciones = document.getElementById('atracciones');
var faq = document.getElementById('FAQ');
var ruta = document.getElementById('ruta');
var licitaciones = document.getElementById('licitaciones');

// Get the img that opens the modal
var imgcartelera = document.getElementById("imgcartelera");
var imgcanica = document.getElementById("imgcanica");
var imgreina = document.getElementById("imgreina");
var imgatracciones = document.getElementById('imgatracciones');
var imgfaq = document.getElementById('imgfaq');
var imgruta = document.getElementById('imgruta');
var licitacionesbtn = document.getElementById('licitacionesbtn');

// When the user clicks on the button, open the modal 
imgcartelera.onclick = function() {
    cartelera.style.display = "block";
    clickoutsidemodal(cartelera);
}
imgcanica.onclick = function() {
    canica.style.display = "block";
    clickoutsidemodal(canica);
}

imgreina.onclick = function() {
    reina.style.display = "block";
    clickoutsidemodal(reina);
}

imgatracciones.onclick = function() {
    atracciones.style.display = "block";
    clickoutsidemodal(atracciones);
}

imgsalon.onclick = function() {
    window.open( "http://salondeoctubre.com/", '_blank').focus();
}
imgfaq.onclick = function() {
    faq.style.display = "block";
    clickoutsidemodal(faq);
}
imgruta.onclick = function() {
    ruta.style.display = "block";
    clickoutsidemodal(ruta);
}
licitacionesbtn.onclick = function() {
	licitaciones.style.display = "block";
	clickoutsidemodal(licitaciones);
}

function addRow() {
         var table = document.getElementById('tablaArtistas');
         var tabBody = table.getElementsByTagName('tbody').item(0);
         var row = document.createElement("tr");
         cell1 = document.createElement("td");
         cell2 = document.createElement("td");
         textnode1=document.createTextNode("Alexis Barba");
         textnode2=document.createTextNode("3 Enero");
         cell1.appendChild(textnode1);
         cell2.appendChild(textnode2);
         row.appendChild(cell1);
         row.appendChild(cell2);
         tabBody.appendChild(row);
        }

		function popupshow() {
			var popup = document.getElementById("promociones");
			popup.classList.toggle("show");
		}
		
		var slideIndex = 0;
		showSlides();
		
		function showSlides() {
			var i;
			var slides = document.getElementsByClassName("mySlides");
			var dots = document.getElementsByClassName("dot");
			for (i = 0; i < slides.length; i++) {
			   slides[i].style.display = "none";  
			}
			slideIndex++;
			if (slideIndex > slides.length) {slideIndex = 1}    
			
			slides[slideIndex-1].style.display = "block";  
			setTimeout(showSlides, 5000); // Change image every 5 seconds
		}

		function plusSlides(n) {
			moveSlides(slideIndex += n);
		  }
		  
		  function currentSlide(n) {
			moveSlides(slideIndex = n);
		  }

		  function moveSlides(n) {
			var i;
			var slides = document.getElementsByClassName("mySlides");
			var dots = document.getElementsByClassName("dot");
			if (n > slides.length) {slideIndex = 1}    
			if (n < 1) {slideIndex = slides.length}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";  
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			slides[slideIndex-1].style.display = "block";  
			dots[slideIndex-1].className += " active";
		  }