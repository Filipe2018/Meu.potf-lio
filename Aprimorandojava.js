 <!-- Script para o carrossel e formulário -->
<script>
    // Controle do carrossel de imagens
    let slideIndex = 0;
    showSlides(slideIndex);

    function showSlides(index) {
        const slides = document.querySelectorAll('.carousel-item');
        if (index >= slides.length) slideIndex = 0;
        if (index < 0) slideIndex = slides.length - 1;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[slideIndex].style.display = 'block';
    }

    function moveSlide(n) {
        showSlides(slideIndex += n);
    }

    // Função para mostrar o formulário de orçamento
    function showQuoteForm() {
        document.getElementById('quote-form').style.display = 'block'; // Mostra o formulário
    }

    // Função para esconder o formulário de orçamento
    function hideQuoteForm() {
        document.getElementById('quote-form').style.display = 'none'; // Esconde o formulário
    }

    // Evento para mostrar o formulário quando o botão "Solicite seu Orçamento" for clicado
    document.querySelector('.cta-button').addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        showQuoteForm();
    });

    // Evento para esconder o formulário quando o botão "Voltar" for clicado
    document.querySelector('.cta-button-back').addEventListener('click', function() {
        hideQuoteForm();
    });

    // Evento para resetar o formulário quando o botão "Limpar Tudo" for clicado
    document.querySelector('.cta-button-reset').addEventListener('click', function() {
        document.getElementById('quote-form').reset(); // Limpa o formulário
    });

    // Adicionar ao Carrinho
    let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nomeProduto, precoProduto) {
    carrinho.push({ nome: nomeProduto, preco: precoProduto });
    total += precoProduto;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoList = document.getElementById('itensCarrinho');
    const totalCarrinho = document.getElementById('totalCarrinho');
    const mostrarCarrinho = document.getElementById('mostrarCarrinho');

    // Limpar lista de itens no carrinho
    carrinhoList.innerHTML = '';
    
    // Adicionar itens ao carrinho
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        carrinhoList.appendChild(li);
    });
    
    // Atualizar total
    totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
    
    // Atualizar o botão do carrinho
    mostrarCarrinho.textContent = `Carrinho (${carrinho.length})`;
}

ddocument.getElementById('mostrarCarrinho').addEventListener('click', () => {
    const carrinhoConteudo = document.getElementById('carrinho');
    carrinhoConteudo.style.display = carrinhoConteudo.style.display === 'none' ? 'block' : 'none';
});

</script>