let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);
    document.getElementById('amigo').value = ''; // Limpar o campo de entrada
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpar a lista antes de adicionar os novos itens

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearIndividual() {
    if (amigos.length === 0) {
        alert('Não há amigos para sortear.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    document.getElementById('resultado').innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
    fecharModal();
}

function sortearGrupo() {
    if (amigos.length === 0) {
        alert('Não há amigos para sortear.');
        return;
    }

    let sorteados = [...amigos];
    let resultado = 'Sorteio em Grupo:\n';
    while (sorteados.length > 0) {
        let indiceSorteado = Math.floor(Math.random() * sorteados.length);
        let amigoSorteado = sorteados.splice(indiceSorteado, 1);
        resultado += `${amigoSorteado}\n`;
    }

    document.getElementById('resultado').innerText = resultado;
    fecharModal();
}

function mostrarModal() {
    document.getElementById('modal').style.display = 'block';
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}
