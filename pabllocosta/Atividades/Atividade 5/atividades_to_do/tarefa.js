window.onload = function () {
    const input = this.document.getElementById("tarefaInput");
    const btnAdicionar = this.document.getElementById("btnAdicionar");
    const lista = this.document.getElementById("listaTarefas");
  
    btnAdicionar.addEventListener("click", () => {
      const texto = input.value.trim();
  
      const li = this.document.createElement("li");
      li.textContent = texto;

      li.addEventListener("click", () =>{
        li.classList.toggle("Concluida");
      })

      //Criar botão de excluir
      const btnRemover = this.document.createElement("button");
      btnRemover.textContent = "❌";
      btnRemover.style.marginLeft = "10px";
      btnRemover.classList.add("fechar");
      btnRemover.addEventListener("click", (event) =>{
      //Deletar o item
      li.remove();
      }) 
      lista.appendChild(li);

      li.appendChild(btnRemover);

      input.value = "";
    });
  };