
let amigos = [];

let sorteados = []

function adicionarAmigo(){
    const inputAmigo = document.getElementById('amigo')
    const nomeAmigo = inputAmigo.ariaValueMax.trim();

    if (nome=== ""){
        alert("por favor,insira um nome;");
        return;
    }
    if(amigos.includes(nomeAmigo)){
        alert(`O nome ${nomeAmigo}`já está na lista);
        return;
    }
    amigos.push(nomeAmigo);

    inputAmigo.ariaValu = "";

    atualizarLista();

}

function atualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "";

    for(let i = 0; i<amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

        


