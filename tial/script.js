const noticias = document.querySelectorAll('.noticia');

noticias.forEach(noticia => {
	noticia.addEventListener('click', () => {
		alert('Você clicou na notícia: ' + noticia.querySelector('h2').textContent);
	});
});
