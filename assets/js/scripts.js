bandas = ["Artic Monkeys", "Blink-182","Florence + The Machine", "Fleetwood Mac", "Foo Fighters", "Guns N'Roses", "Kings of Leon", "Linkin Park", "My Chemical Romance", "Of Monsters and Men", "OneRepublic", "Panic! at the Disco", "Pearl Jam", "Queen", "Radioheand", "Red Hot Chili Peppers", "The Beatles", "The Cure", "The Doors", "The Killers", "The Neighbourhood", "The Police","The Smashing Pumpkins", "U2", "Vampire Weekend", "Yeah Yeah Yeah"];

listaBandas = ""

for(indice in bandas){
    listaBandas += "<li>" + bandas[indice]+"</li>"
    bandas[indice] = bandas[indice].toLowerCase()
}
    lista.innerHTML = listaBandas

    pesquisa.onkeyup = function(e){
        listaBandas = this.value

        r = new RegExp(listaBandas, "g")

        for(indice in bandas){
            if(bandas[indice].match(r) ){
                lista.children[indice].removeAttribute("style")
            }else{
                lista.children[indice].style.display="none"
            }
        }
    }