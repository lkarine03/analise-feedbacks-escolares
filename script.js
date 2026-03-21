const busca = document.getElementById("busca");
const itens = document.querySelectorAll(".feedback-list li");
const mensagem = document.getElementById("mensagem");

busca.addEventListener("input", () => {
    const texto = busca.value.toLowerCase().trim();
    let encontrou = false;

    itens.forEach(item => {
        const conteudo = item.textContent.toLowerCase();

        if (conteudo.includes(texto)) {
            item.style.display = "";
            encontrou = true;
        } else {
            item.style.display = "none";
        }
    });
    mensagem.style.display = encontrou ? "none" : "block";
});
