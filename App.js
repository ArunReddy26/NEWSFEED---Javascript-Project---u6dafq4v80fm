var card = document.getElementById("card");
// var india = document.getElementById("india");
// var sports = document.getElementById("sports");
// var technology = document.getElementById("technology");
// var politics = document.getElementById("politics");
// var hatke = document.getElementById("hatke");
// var automobile = document.getElementById("automobile");
// var startups = document.getElementById("startups");
// var business = document.getElementById("business");
// var entertainment = document.getElementById("entertainment");
// var international = document.getElementById("international");
var loadnewnews = document.getElementById("loadnewnews");
var loadsavednews = document.getElementById("loadsavednews");

let newsarray = [];
let categories = document.getElementById("categories");

async function NewsApi() {
    const response = await fetch("https://content.newtonschool.co/v1/pr/64e3d1b73321338e9f18e1a1/inshortsnews");
    var output = await response.json();
    newsarray = output;
    displaynewscard(newsarray);
}
NewsApi();



// categories.addEventListener("click", (e) => {
//     card.innerHTML = "";
//     if (e.target.id != "categories") {
//         newsarray= newsarray.filter((value) => {
//             // console.log(value.category);
//             // console.log(e.target.id);

//             return value.category === e.target.id
//         })
//     }


//     displaynewscard(newsarray);
// })

categories.addEventListener("click", (e) => {
    card.innerHTML = "";
    let filteredArray;
    if (e.target.id != "categories") {
        filteredArray = newsarray.filter((value) => {
            return value.category === e.target.id;
        })
        // console.log(newsarray);
    }
    displaynewscard(filteredArray);
    filteredArray = newsarray;
})


function displaynewscard(newsarray) {
    card.innerHTML = "";
    newsarray.map(({ category, author, content, url }) => {

        card.innerHTML += `<div class="cards">
        <div class=leftright>
        <p>BY <span class="name">${author}</span></p> 
        <p>CATEGORY  <span class="category">${category}</span></p>
        </div>
        <p class="content">${content} <span> <a href=${url}}>read more.</a></span></p>
        <div class="heart1">
        <span><i class="fa fa-heart-o heart"></i></span>
        </div>   
           
        </div>`
    })
}







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
getFavoriteMoviesFromLS();


card.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa') & e.target.classList.contains('fa-heart-o')) {
        e.target.classList.remove('fa-heart-o');
        e.target.classList.add('fa-heart');
        addToLocalStorage(e.target.parentElement.parentElement.parentElement);
    }
    else if (e.target.classList.contains('fa') & e.target.classList.contains('fa-heart')) {
        e.target.classList.remove('fa-heart');
        e.target.classList.add('fa-heart-o');
        removeFromLS(e.target.parentElement.parentElement.parentElement.querySelector('.name').textContent);
    }
})





function addToLocalStorage(newscards) {

    let newsobject = {
        name: newscards.querySelector('.name').textContent,
        category: newscards.querySelector('.category').textContent,
        content: newscards.querySelector('.content').textContent,
        // release_year: movieCard.querySelector('.releaseyear').textContent
    };

    let favoritenews = getFavoriteMoviesFromLS();
    favoritenews.push(newsobject);
    localStorage.setItem('news', JSON.stringify(favoritenews));
}

function removeFromLS(name) {
    console.log(name);
    let favoritenews = getFavoriteMoviesFromLS();
    favoritenews.forEach((element, index) => {
        if (element.name === name) {
            favoritenews.splice(index, 1);
        }
    });
    localStorage.setItem('news', JSON.stringify(favoritenews));
}













// favouriteButton.addEventListener("click", () => {
//   allButton.classList.remove("active-tab");
//   favouriteButton.classList.add("active-tab");
//   movies = [...favouriteData];
//   displayMovies(movies);
//   previous.disabled = true;
//   next.disabled=true;

// });


// allButton.addEventListener("click", () => {
//   favouriteButton.classList.remove("active-tab");
//   allButton.classList.add("active-tab");
//   FetchAPI(pageNumber);
//   previous.disabled = false;
//   next.disabled=false;
// });
