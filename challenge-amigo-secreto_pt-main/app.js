
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

        
function sortearAmigos(){
    if(amigos.length=== 0){
        alert("Não tem amigos disponiveis para sortear. Adicione ao menos um.");
        return ; 
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}


