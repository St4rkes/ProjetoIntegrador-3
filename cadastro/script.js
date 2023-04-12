document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('.formulario');
    const produtos = [];

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.querySelector('#name').value.trim();
        const descricao = document.querySelector('#description').value.trim();
        const preco = parseFloat(document.querySelector('#price').value);
        const imagem = document.querySelector('#image').value.trim();
        const estoque = parseInt(document.querySelector('#stock').value);

        // Verifica se o nome não está vazio
        if (nome === '') {
            alert('Por favor, informe o nome do produto.');
            return;
        }

        // Verifica se a descrição não está vazia
        if (descricao === '') {
            alert('Por favor, informe a descrição do produto.');
            return;
        }

        // Verifica se o preço é um número válido e maior que zero
        if (isNaN(preco) || preco <= 0) {
            alert('Por favor, informe um preço válido para o produto.');
            return;
        }

        // Verifica se uma imagem foi selecionada
        if (imagem === '') {
            alert('Por favor, selecione uma imagem para o produto.');
            return;
        }

        // Verifica se o estoque é um número válido e maior ou igual a zero
        if (isNaN(estoque) || estoque < 0) {
            alert('Por favor, informe uma quantidade válida de estoque para o produto.');
            return;
        }

        const produto = {
            nome: nome,
            descricao: descricao,
            preco: preco,
            imagem: imagem,
            estoque: estoque
        };

        produtos.push(produto);
        // Salva o array produtos no localStorage
        localStorage.setItem('produtos', JSON.stringify(produtos));


        console.log(produtos);

                // Obtém o array de produtos do localStorage
        const produtosSalvos = localStorage.getItem('produtos');
        if (produtosSalvos) {
        const produtosGravados = JSON.parse(produtosSalvos);
        console.log(produtosGravados);
        }


        // Limpa os campos do formulário
        formulario.reset();
    });
});
