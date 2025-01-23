// Inicializando o array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputNome = document.getElementById('amigo').value;

    // Validação: Verificar se o campo está vazio
    if (inputNome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar o amigo ao array
    amigos.push(inputNome);
    
    // Limpar o campo de entrada
    document.getElementById('amigo').value = "";

    // Atualizar a lista de amigos na interface
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";  // Limpar a lista antes de adicionar

    // Criar a lista de amigos
    amigos.forEach(function(amigo) {
        const novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigo;
        listaAmigos.appendChild(novoAmigo);
    });
}

// Função para sortear os amigos (sem auto-sorteio)
function sortearAmigos() {
    if (amigos.length < 2) {
        alert("Por favor, adicione pelo menos 2 amigos para sortear.");
        return;
    }

    let amigosEmbaralhados = amigos.slice();  // Copiar o array para embaralhar

    // Embaralhar os amigos
    for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]];
    }

    // Gerar os sorteios sem auto-sorteio
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpa qualquer resultado anterior

    let sorteados = []; // Array para armazenar os amigos sorteados

    amigos.forEach((amigo) => {
        let amigoSorteado;
        do {
            // Sorteio aleatório de outro amigo, sem permitir auto-sorteio
            amigoSorteado = amigosEmbaralhados[Math.floor(Math.random() * amigosEmbaralhados.length)];
        } while (sorteados.includes(amigoSorteado) || amigoSorteado === amigo);  // Evita auto-sorteio e repetição

        sorteados.push(amigoSorteado); // Adiciona o amigo sorteado ao array

        // Exibir o resultado na tela
        const li = document.createElement('li');
        li.textContent = `${amigo} foi sorteado para o amigo secreto: ${amigoSorteado}!`;
        resultado.appendChild(li);
    });
}
