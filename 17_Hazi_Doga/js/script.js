const galeria = document.getElementById("gallery");
const movieList = document.getElementById("movie-list");

window.addEventListener("DOMContentLoaded", betoltes);

async function betoltes() {
    try {
        const URL = "https://nodejs111.dszcbaross.edu.hu/api/movie";
        const res = await fetch(URL);
        const tomb = await res.json();

        loadImages(tomb);
        loadSidebar(tomb);
    } catch (error) {
        console.log("ERROR", error);
    }
}

function loadImages(tomb) {
    galeria.innerHTML = "";

    tomb.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        const img = document.createElement("img");
        img.src = movie.image;
        img.alt = movie.title;

        const movieInfo = document.createElement("div");
        movieInfo.classList.add("movie-info");

        const title = document.createElement("h3");
        title.textContent = movie.title;

        const badgeWrap = document.createElement("div");
        badgeWrap.classList.add("badge-wrap");

        const badgeCategory = document.createElement("span");
        badgeCategory.classList.add("badge");
        badgeCategory.textContent = movie.genre;

        const badgeAge = document.createElement("span");
        badgeAge.classList.add("badge");
        badgeAge.textContent = movie.age_rating + "+";

        badgeWrap.append(badgeCategory, badgeAge);
        movieInfo.append(title, badgeWrap);
        movieCard.append(img, movieInfo);
        galeria.append(movieCard);
    });
}

function loadSidebar(tomb) {
    movieList.innerHTML = "";

    tomb.forEach((movie) => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = "#gallery";
        a.textContent = movie.title;

        li.append(a);
        movieList.append(li);
    });
}