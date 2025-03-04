
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
        alert(`O nome ${nomeAmigo}já está na lista);
        return;
    }


}
