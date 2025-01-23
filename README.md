
# Desafio Amigo Secreto - Sorteio Online

Este projeto permite realizar sorteios de "Desafio Amigo Secreto" online. O objetivo é possibilitar que os usuários insiram os nomes de seus amigos, sorteiem aleatoriamente os amigos secretos e visualizem os resultados em tempo real, sem a necessidade de papel e caneta.

### Funcionalidades

- **Adicionar amigo(s)**: O usuário pode inserir os nomes dos amigos em um campo de entrada, e esses nomes serão armazenados em uma lista exibida na tela.
- **Exibir lista de amigo(s)**: A lista de amigos inseridos será mostrada em tempo real, facilitando o acompanhamento.
- **Sorteio do amigo secreto**: Ao clicar no botão "Sortear amigo", o sistema realiza o sorteio aleatório e exibe o resultado na tela.

### Tecnologias Utilizadas

- **HTML**: Usado para estruturar a página e os elementos do formulário.
- **CSS**: Usado para o estilo e layout da página, tornando a interface mais amigável.
- **JavaScript**: Responsável pela lógica de captura das entradas do usuário, validação de dados e sorteio dos amigos secretos.

### Como usar

1. **Clonar o repositório**:
   Para começar a usar este projeto, clone o repositório para sua máquina local utilizando o comando:

   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git
   ```

2. **Abrir o projeto**:
   - Abra o projeto no seu editor de código favorito.
   - Abra o arquivo `index.html` no seu navegador para visualizar o projeto em funcionamento.

### Funcionalidades Futuras

- **Persistência de dados**: Adicionar um mecanismo para salvar os dados dos amigos (ex: no `localStorage` ou em um banco de dados), permitindo que as informações não se percam quando a página for recarregada.
- **Personalização de sorteio**: Permitir que os usuários personalizem mensagens de sorteio (ex: incluir uma mensagem de boas festas ou algo mais pessoal).
- **Melhorias na validação de entrada**: Aperfeiçoar a validação para garantir que os nomes dos amigos não sejam duplicados ou estejam vazios.

### Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes. Ao utilizar ou modificar o código, por favor, faça referência a esta licença.

### Código JavaScript para Sorteio

O código abaixo mostra duas opções de sorteio: individual e em grupo.

#### Lógica para Sorteio Individual

```javascript
// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputNome = document.getElementById('inputNome').value;

    if (inputNome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(inputNome);
    document.getElementById('inputNome').value = "";
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (let amigo of amigos) {
        const novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigo;
        listaAmigos.appendChild(novoAmigo);
    }
}

// Função para remover um amigo da lista
function removerAmigo(nome) {
    const index = amigos.indexOf(nome);
    if (index !== -1) {
        amigos.splice(index, 1);
        atualizarListaAmigos();
    }
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Por favor, adicione pelo menos 2 amigos para sortear.");
        return;
    }

    // Embaralhar a lista de amigos
    let amigosEmbaralhados = amigos.slice(); // Copiar o array
    for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]]; // Troca de posição
    }

    // Armazenar o amigo sorteado em uma variável
    const amigoSorteado = amigosEmbaralhados[0];

    // Exibir o amigo sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
```

#### Lógica para Sorteio para o Grupo de Amigos

**Este código sorteia todos os amigos de uma vez, exibindo os sorteios de todos ao mesmo tempo.**

```javascript
// Função para sortear o amigo secreto (todos ao mesmo tempo)
function sortearAmigos() {
    if (amigos.length < 2) {
        alert("Por favor, adicione pelo menos 2 amigos para sortear.");
        return;
    }

    // Embaralhar a lista de amigos
    let amigosEmbaralhados = amigos.slice(); // Copiar o array
    for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]]; // Troca de posição
    }

    // Exibir o resultado no HTML
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpa qualquer resultado anterior
    
    amigosEmbaralhados.forEach(function(amigo, index) {
        var li = document.createElement('li');
        li.textContent = `${amigo} foi sorteado para o amigo secreto!`;
        resultado.appendChild(li);
    });
}
```

### Estrutura do Projeto

```bash
├── assets/                # Imagens do projeto
│   ├── amigo-secreto.png  # Imagem ilustrativa
│   └── play_circle_outline.png  # Ícone do botão de sorteio
├── index.html             # Arquivo principal HTML
├── app.js                 # Arquivo de lógica JavaScript
├── style.css              # Arquivo de estilos CSS
└── README.md              # Este arquivo
```

```
