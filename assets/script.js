const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


document.addEventListener('DOMContentLoaded', function() {
    // Déclarer les flèches
    var arrowLeft = document.querySelector('.arrow_left');
    var arrowRight = document.querySelector('.arrow_right');

    // Déclarer l'image et le texte de la bannière
    var bannerImg = document.querySelector('.banner-img');
    var bannerText = document.querySelector('#banner p');

    // Déclarer les bullet points
    var dotsContainer = document.querySelector('.dots');

    // Déclarer l'index de la slide
    var currentSlideIndex = 0;

    // Créer un "bullet point"
    slides.forEach(function(slide, index) {
        var dot = document.createElement('div');
        dot.classList.add('dot');

        if (index === 0) {
            dot.classList.add('dot_selected');
            bannerImg.src = "./assets/images/slideshow/" + slide.image;
            bannerText.innerHTML = slide.tagLine;
        }

        dotsContainer.appendChild(dot);
    });

    // Fonction slide suivante
    function nextSlide() {
		console.log('Clic sur la flèche droite');
        dotsContainer.children[currentSlideIndex].classList.remove('dot_selected');

        // Incrémenter l'index de la slide actuelle, ou revenir à 0 si nous sommes à la dernière slide
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;

        dotsContainer.children[currentSlideIndex].classList.add('dot_selected');

        bannerImg.src = "./assets/images/slideshow/" + slides[currentSlideIndex].image;
        bannerText.innerHTML = slides[currentSlideIndex].tagLine;
    }

    // Fonction pour changer à la slide précédente
    function previousSlide() {
		console.log('Clic sur la flèche gauche');
        dotsContainer.children[currentSlideIndex].classList.remove('dot_selected');

        // Décrémenter l'index de la slide actuelle, ou aller à la dernière slide si nous sommes à la première slide
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;

        dotsContainer.children[currentSlideIndex].classList.add('dot_selected');

        bannerImg.src = "./assets/images/slideshow/" + slides[currentSlideIndex].image;
        bannerText.innerHTML = slides[currentSlideIndex].tagLine;
    }

    // Ajouter des event listeners aux flèches
    arrowLeft.addEventListener('click', previousSlide);
    arrowRight.addEventListener('click', nextSlide);
});



