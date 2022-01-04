var toggleBtn = document.getElementById("darkmode")
var body = document.getElementsByTagName("body")
var h1 = document.getElementsByTagName('h1')
var h2 = document.getElementsByTagName('h2')
var h3 = document.getElementsByTagName('h3')
var h4 = document.getElementsByTagName('h4')
var socialCard = document.getElementsByClassName("social-card")
var smallCard = document.getElementsByClassName("small-card")
var attribution = document.getElementsByClassName("attribution")

console.log(h2);


function darkMode(){
    if(toggleBtn.className === "fas fa-toggle-off"){
        toggleBtn.className = "fas fa-toggle-on"

        body[0].style.backgroundColor = " hsl(230, 17%, 14%)"

        for(var i=0 ; i<socialCard.length ; i++){
            socialCard[i].classList.add("darkcard")
        }

        for(var i=0 ; i<smallCard.length ; i++){
            smallCard[i].classList.add("darkcard")
        }

        for(var i=0 ; i<h1.length ; i++){
            h1[i].style.color = "white"
        }

        for(var i=0 ; i<h2.length ; i++){
            h2[i].style.color = "white"
        }

        for(var i=0 ; i<h3.length ; i++){
            h3[i].style.color = "white"
        }

        for(var i=0 ; i<h4.length ; i++){
            h4[i].style.color = "white"
        }

        for(var i=0 ; i<attribution.length; i++){
            attribution[i].classList.add("attribution-dark")
        }


    }else if(toggleBtn.className ==="fas fa-toggle-on"){
        toggleBtn.className = "fas fa-toggle-off"


        body[0].style.backgroundColor = "white"

        for(var i=0 ; i<socialCard.length ; i++){
            socialCard[i].classList.remove("darkcard")
        }

        for(var i=0 ; i<smallCard.length ; i++){
            smallCard[i].classList.remove("darkcard")
        }

        for(var i=0 ; i<h1.length ; i++){
            h1[i].style.color = "black"
        }

        for(var i=0 ; i<h2.length ; i++){
            h2[i].style.color = "black"
        }

        for(var i=0 ; i<h3.length ; i++){
            h3[i].style.color = "black"
        }

        for(var i=0 ; i<h4.length ; i++){
            h4[i].style.color = "hsl(228, 12%, 44%)"
        }

        for(var i=0 ; i<attribution.length; i++){
            attribution[i].classList.remove("attribution-dark")
        }

    }
}