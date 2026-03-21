const busca = document.getElementById("busca");
const itens = document.querySelectorAll(".feedback-list li");

busca.addEventListener("input", () => {
    const texto = busca.value.toLowerCase().trim();

    itens.forEach(item => {
        const conteudo = item.textContent.toLowerCase();

        item.style.display = conteudo.includes(texto) ? "block" : "none";
    });
});
