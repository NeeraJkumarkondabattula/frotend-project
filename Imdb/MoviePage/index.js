const movieID = localStorage.getItem("movieID")
const container = document.querySelector(".container")
console.log(movieID)
fetch(`https://www.omdbapi.com/?i=${movieID}&page=1&apikey=ac0f14a0`).then(res => {
            return res.json()
        }).then(res => {
            // console.log(res)
            movieData(res)
})

function movieData(res){
    const movieblock = document.createElement("div")
    movieblock.classList.add("movie-block")
    const img = document.createElement("img")
    img.src = res.Poster
    const details = document.createElement("div")
    details.classList.add("deatils")
    const h2 = document.createElement("h2")
    h2.innerHTML = res.Title
    const p1 = document.createElement("p")
    const span1 = document.createElement("span")
    span1.innerHTML=res.Year
    const span2 = document.createElement("span")
    span2.innerHTML=res.Rated
    const span3 = document.createElement("span")
    span3.innerHTML=res.Released
    p1.appendChild(span1)
    p1.appendChild(span2)
    p1.appendChild(span3)
    const p2 = document.createElement("p")
    p2.innerHTML ="Writer : "+res.Writer
    const p3 = document.createElement("p")
    p3.innerHTML ="Actors : "+res.Actors
    const p4 = document.createElement("p")
    p4.innerHTML ="Plot : "+res.Plot
    const p5 = document.createElement("p")
    p5.innerHTML ="Awards : "+res.Awards
    details.appendChild(h2)
    details.appendChild(p1)
    details.appendChild(p2)
    details.appendChild(p3)
    details.appendChild(p4)
    details.appendChild(p5)
    movieblock.appendChild(img)
    movieblock.appendChild(details)
    console.log(movieblock)
    container.appendChild(movieblock)
}
document.querySelector("#add").onclick=()=>{
    localStorage.setItem("favs",movieID)
}
