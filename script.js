// Get the modal
var lightbox = document.getElementById('lightbox');

// Get the image and insert it inside the modal
var lightboxImg = document.getElementById("lightbox-img");
var images = document.querySelectorAll('.portfolio-grid img');
var pageContent = document.getElementById('page-content');
var scrollPosition = 0;

images.forEach(image => {
    image.addEventListener('click', function() {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
        scrollPosition = window.pageYOffset; // Salva a posição de rolagem
        pageContent.classList.add('blur'); // Adiciona a classe 'blur' ao conteúdo da página
        document.body.classList.add('fixed-position'); // Adiciona a classe 'fixed-position' ao body
        document.body.style.top = `-${scrollPosition}px`;
    });
});

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    lightbox.style.display = "none";
    pageContent.classList.remove('blur'); // Remove a classe 'blur' do conteúdo da página
    document.body.classList.remove('fixed-position'); // Remove a classe 'fixed-position' do body
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition); // Retorna à posição de rolagem original
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == lightbox) {
        lightbox.style.display = "none";
        pageContent.classList.remove('blur'); // Remove a classe 'blur' do conteúdo da página
        document.body.classList.remove('fixed-position'); // Remove a classe 'fixed-position' do body
        document.body.style.top = '';
        window.scrollTo(0, scrollPosition); // Retorna à posição de rolagem original
    }
}
