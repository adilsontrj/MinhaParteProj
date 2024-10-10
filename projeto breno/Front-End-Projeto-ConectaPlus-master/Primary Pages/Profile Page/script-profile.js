function enableEdit(element) {
    // Armazena o conteúdo original caso precise voltar ao estado original
    const originalContent = element.innerHTML;

    // Cria um campo de input para edição
    
    
    // Substitui o conteúdo pelo campo de input
    element.innerHTML = "";
    element.appendChild(input);
    
    const input = document.createElement("input");
        input.type = "date";
        input.value = element.innerHTML;
        input.className = "editing";
        input.style.width = element.offsetWidth + "px";

        // Substitui o conteúdo pelo campo de input
        element.innerHTML = "";
        element.appendChild(input);

   
    input.focus();

    // Função para salvar a edição ou voltar ao estado original
    input.onblur = function() {
        element.innerHTML = input.value || originalContent; 
    };

    // Captura o Enter para salvar e o Escape para cancelar a edição
    input.onkeydown = function(event) {
        if (event.key === "Enter") {
            input.blur(); // Salva a edição
        } else if (event.key === "Escape") {
            element.innerHTML = originalContent; // Cancela e volta ao original
        }
    };
}