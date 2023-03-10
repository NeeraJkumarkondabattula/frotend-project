
window.onload = function () {
    const container = document.querySelector(".container")

    document.querySelector("#Search").onclick = (e) => {
        const input = document.querySelector("#input").value.trim()
        fetch(`https://www.omdbapi.com/?s=${input}&page=1&apikey=ac0f14a0`).then(res => {
            return res.json()
        }).then(res => {
            // console.log(res.Search)
            container.innerHTML = ""
            // console.log(container.innerHTML)
            data(res.Search)
        })
    }
    document.addEventListener("keyup", (ev) => {
        if (ev.keyCode == 13) {
            const input = document.querySelector("#input").value.trim()
            fetch(`https://www.omdbapi.com/?s=${input}&page=1&apikey=ac0f14a0`).then(res => {
                return res.json()
            }).then(res => {
                // console.log(res.Search)
                container.innerHTML = ""
                // console.log(container.innerHTML)
                data(res.Search)
            })
        }
    })
    function data(c) {
        if (container.innerHTML == "") {
            for (let i = 0; i < c.length; i++) {
                if (c[i].Type == "movie" && c[i].Poster != "N/A") {
                    const link = document.createElement("a")
                    link.href="MoviePage/index.html"
                    const div = document.createElement("div")
                    div.classList.add("card")
                    const img = document.createElement("img")
                    img.src = c[i].Poster
                    const id = document.createElement("p")
                    id.innerHTML=c[i].imdbID+"   "
                    div.appendChild(id)
                    div.appendChild(img)
                    const container = document.querySelector(".container")
                    link.appendChild(div)
                    container.appendChild(link)
                    // console.log(localStorage.getItem("imdbID"))
                    // console.log(container.innerHTML)

                }
            }
        }
        loadMovieDetails()

    }
    const loadMovieDetails = () => {
        const searchListMovies = container.querySelectorAll('.card'); //Select all Matched movies
        //Add all matched movies to autmocomplete box
        searchListMovies.forEach(movie => {
            movie.addEventListener('click', async () => {
                localStorage.setItem('movieID',movie.innerHTML.slice(3,13)); // Set movie id to localstorage for later use
                // console.log(localStorage.getItem("movieID"))
            })
        })
    }
}

