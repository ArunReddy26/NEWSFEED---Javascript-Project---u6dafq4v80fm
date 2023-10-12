// var loadsavednews = document.getElementById("loadsavednews");
var card = document.getElementById("card");




function getFavoriteMoviesFromLS() {
    let favoritenews;


    if (localStorage.getItem('news') === null) {
        localStorage.setItem('news', JSON.stringify([]))
    }

    else {
        favoritenews = JSON.parse(localStorage.getItem('news'));
    }

    return favoritenews;
}


function displaynewscard(newsarray) {
    card.innerHTML = "";
    newsarray.map(({ category, author, content, url }) => {

        card.innerHTML += `
        <div class="cards">
        <div class=leftright>
        <p>BY <span class="name">${author}</span></p> 
        <p>CATEGORY  <span class="category">${category}</span></p>
        </div>
        <p class="content">${content} <span> <a href=${url}}>read more.</a></span></p>
        <div class="heart1">
        <span><i class="fa fa-heart heart"></i></span>
        </div>   
           
        </div>`
    })
}
displaynewscard(getFavoriteMoviesFromLS());

card.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa') & e.target.classList.contains('fa-heart')) {
        e.target.classList.remove('fa-heart');
        e.target.classList.add('fa-heart-o');
        // removeFromLS(e.target.parentElement.parentElement.parentElement.querySelector('.name').textContent);
        console.log(e.target.parentElement.parentElement.parentElement.querySelector('.name').textContent);


    }
})

function removeFromLS(name) {
    console.log(name);
    let favoritenews = getFavoriteMoviesFromLS();
    favoritenews.forEach((element, index) => {
        if (element.name == name) {
            favoritenews.splice(index, 1);
        }
    });
    localStorage.setItem('news', JSON.stringify(favoritenews));
}