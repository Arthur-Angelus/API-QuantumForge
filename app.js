'use strict'

async function buscarInfo () {
    const url = `https://superheroapi.com/api/80d3cd296a43e183ee58c1b39137b106`
    const response = await fetch(url)
    const imagens = await response.json()
    return imagens.message
}

function criarCard(url){
    const div = document.getElementById('div')
    const search = document.getElementById('search')
    const menu = document.getElementById('menu')
    const heroCard = document.getElementById('hero-card')
    const personagens = document.getElementById('personagens')
    const status = document.getElementById('status')
    const biografia = document.getElementById('biografia')
    const aparencia = document.getElementById('aparencia')
    const trabalhos = document.getElementById('trabalhos')
    const conexoes = document.getElementById('conexoes')
    const imagem = document.getElementById('imagem')

}