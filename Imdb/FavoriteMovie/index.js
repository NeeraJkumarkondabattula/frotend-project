
const favs = localStorage.getItem("favs")
fetch(`https://www.omdbapi.com/?i=${favs}&page=1&apikey=ac0f14a0`).then(res => {
            return res.json()
        }).then(res => {
            // console.log(res)
            fav(res)
})
const container = document.querySelector(".container")
function fav(res){
    if(res.Poster!="N/A"){
        const div = document.createElement("div")
        div.classList.add("card")
        const img = document.createElement("img")
        img.src=res.Poster
        div.appendChild(img)
        const button = document.createElement("button")
        button.innerHTML="Delete"
        div.appendChild(button)
        container.appendChild(div)
        document.querySelector("button").onclick=()=>{
            localStorage.removeItem("favs")
            // window.location.reload()
            container.removeChild(div)
            // console.log("delete")
        }
    }else{
        container.innerHTML=""
    }
    
}


