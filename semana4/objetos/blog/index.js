function salvar(){
    var titulo = document.getElementById('titulo-post').value
    console.log(titulo)
    const autor = document.getElementById('autor-post').value
    console.log(autor)
    const conteudo = document.getElementById('conteudo-post').value
    console.log(conteudo)
    const img = document.getElementById('img-post').value
    const posts = document.getElementById('container-de-posts')
    posts.innerHTML = `<h1>${titulo}</h1>` + `<h3>${autor}</h3>` + `<img style="width: 200px" src="${img}"></img>` + `<p>${conteudo}</p>`

}