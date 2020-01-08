//todo      Fonction principale :


var b = document.getElementById("affiche");
b.addEventListener("click", function() { poke() });
var nextlink = " "
var previouslink = " "

function poke() {
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                nextlink = data.next
                previouslink = data.previous
                for (let i = 0; i <= 19; i++) {
                    var p = document.createElement("span")
                    p.innerHTML = data.results[i].name + " Voir les détails ►"
                        //p.innerHTML = '<span onclick="detail(1)"> tetst </span>';
                    document.getElementById("tableau")
                        // document.getElementById("liste").innerHTML += "<p>" + data.results[i].name + "</p>"
                    p.addEventListener("click", function() { detail(data.results[i].name) });
                    document.getElementById("liste").appendChild(p)
                }
            }
        )
}


//todo      Fonction boutton "suivant" :


var page = 1
document.getElementById("sui").addEventListener("click", function() { affichages() });

function affichages() {
    page++
    fetch(nextlink)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                document.getElementById("liste").innerHTML = " "
                nextlink = data.next
                previouslink = data.previous
                for (let i = 0; i <= 19; i++) {
                    var p = document.createElement("span")
                    p.innerHTML = data.results[i].name + " Voir les détails ►"
                        //p.innerHTML = '<span onclick="detail(1)"> tetst </span>';
                    document.getElementById("tableau")
                        // document.getElementById("liste").innerHTML += "<p>" + data.results[i].name + "</p>"
                    p.addEventListener("click", function() { detail(data.results[i].name) });
                    document.getElementById("liste").appendChild(p)
                }
            }
        )
}


//todo      Fonction boutton "précédent" :


var page = 1
document.getElementById("pre").addEventListener("click", function() { affichagep() });

function affichagep() {
    page--
    fetch(previouslink)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                document.getElementById("liste").innerHTML = " "
                nextlink = data.next
                previouslink = data.previous
                for (let i = 0; i <= 19; i++) {
                    var p = document.createElement("span")
                    p.innerHTML = data.results[i].name + " Voir les détails ►"
                        //p.innerHTML = '<span onclick="detail(1)"> tetst </span>';
                    document.getElementById("tableau")
                        // document.getElementById("liste").innerHTML += "<p>" + data.results[i].name + "</p>"
                    p.addEventListener("click", function() { detail(data.results[i].name) });
                    document.getElementById("liste").appendChild(p)
                }
            }
        )
}


//todo      Fonction affichage des détails des Pokémons :


function detail(nom) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + nom)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                document.getElementById("param").innerHTML = " "
                document.getElementById("param").innerHTML += "<h2>ID</h2><p>" + data.id + "</p><br>"
                document.getElementById("param").innerHTML += "<h2>NOM</h2><p>" + data.name + "</p><br>"
                document.getElementById("param").innerHTML += "<h2>HAUTEUR</h2><p>" + data.height + "</p><br>"
                document.getElementById("param").innerHTML += "<h2>IMAGE</h2><img src=" + data.sprites.front_default + ">"

            }
        )
}