var card=document.getElementById("card")
function getFavoriteMoviesFromLS() {
    let favoritenews;

    if(localStorage.getItem('news') === null) {
        favoritenews = [];
    }
    else {
        favoritenews = JSON.parse(localStorage.getItem('news'));
    }

    return favoritenews;
}


card.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa') & e.target.classList.contains('fa-heart-o')) {
        e.target.classList.remove('fa-heart-o');
        e.target.classList.add('fa-heart');
        e.target.dataset.mark = 'added-to-fav';
        addToLocalStorage(e.target.parentElement);
    }
    else if(e.target.classList.contains('fa') & e.target.classList.contains('fa-heart')) {
        e.target.classList.remove('fa-heart');
        e.target.classList.add('fa-heart-o');
        delete e.target.dataset.mark;
        removeFromLS(e.target.id);
    }
})


function addToLocalStorage(cards) {
    let favMovie = {
       
        author: cards.querySelector('.movie-title').textContent,
        category: movieCard.querySelector('.vote').textContent,
        content: movieCard.querySelector('.rating').textContent,
        // release_year: movieCard.querySelector('.releaseyear').textContent
    };
    let favoriteMovie = getFavoriteMoviesFromLS();
    favoriteMovie.push(favMovie);
    localStorage.setItem('favorite', JSON.stringify(favoriteMovie));
}