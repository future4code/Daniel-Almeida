let arrayTotal = []
function salvar(){
    let titulo = document.getElementById('titulo-post').value
    
    let autor = document.getElementById('autor-post').value
    
    let conteudo = document.getElementById('conteudo-post').value
   
    let img = document.getElementById('img-post').value
    
    let post = {
        titulo: titulo,
        autor: autor,
        imagem: img,
        conteudo: conteudo
    }
    arrayTotal.push(post)
    console.log(arrayTotal)
    const posts = document.getElementById('container-de-posts')
    posts.innerHTML += `<h1>${post.titulo}</h1>` + `<h3>${post.autor}</h3>` + `<img style="width: 200px" src="${img}"></img>` + `<p>${conteudo}</p>`
    document.getElementById('titulo-post').value = ''
    document.getElementById('autor-post').value = ''
    document.getElementById('conteudo-post').value = ''
    document.getElementById('img-post').value = ''

}