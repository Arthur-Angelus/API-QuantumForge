'use strict'

async function buscarInfo () {
    const url = `https://superheroapi.com/api/80d3cd296a43e183ee58c1b39137b106`
    const response = await fetch(url)
    const imagens = await response.json()
    return imagens.message
}

function criarCard(url){
    const div = document.getElementById('div')
    
}