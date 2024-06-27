let input = document.getElementById("campo-texto");
let botao = document.getElementById("btn-add");
let main = document.getElementById("area-lista");
let contador = 0;

//Adicionar uma nova tarefa
function addItem(){
    let valorInput = input.value;
    
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        ++contador;

        let novoItem = `<div class="item" id="${contador}">
            <div class="item-icone" onclick="marcarTarefa(${contador})">
                <i 
               id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div>

            <div class="item-nome">
                ${valorInput}                
            </div>

            <div class="favoritar" onclick="favoritar(${contador})">
                <i id="icone__${contador}" class="mdi mdi-star-outline"></i>
            </div>

            <div class="item-botao" >
                <button class="deletar" onclick="deletarItem(${contador})">✘</button>
            </div>
        </div>`

        main.innerHTML += novoItem;

        input.value = "";
        input.focus();
    }
}

//Usar tecla enter para adicionar uma nova tarefa
input.addEventListener("keyup", function (event){
    if (event.key === "Enter"){
        event.preventDefault;
        botao.click();
    }
})

//Marcar uma tarefa
function marcarTarefa(id){
    var marcado = document.getElementById(id);

    //Para saber a classe do item
    var classe = marcado.getAttribute("class");

    if (classe == "item"){
        marcado.classList.add("clicado");

        //Mudar o item quando for marcado
        var icone = document.getElementById("icone_" + id);

        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");

        //Fazer com que o item marcado vá para o fim da lista
        marcado.parentNode.appendChild(marcado);
    }
    else{
        marcado.classList.remove("clicado");

        //Mudar o icone quando for desmarcado
        var icone = document.getElementById("icone_" + id);

        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");
    }
}

//Favoritar uma tarefa
function favoritar(id){
    var fav = document.getElementById(id);
    var favorito = fav.getAttribute("class");

    if (favorito == "item"){
        fav.classList.add("favoritado");

        var star = document.getElementById("icone__" + id);

        star.classList.remove("mdi-star-outline");
        star.classList.add("mdi-star");      
    }
    else{
        fav.classList.remove("favoritado");

        var star = document.getElementById("icone__" + id);

        star.classList.remove("mdi-star");
        star.classList.add("mdi-star-outline");
    }
}

//Excluir uma tarefa
function deletarItem(id){
    var delet = document.getElementById(id);
    delet.remove();
}