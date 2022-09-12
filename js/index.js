// UL DOS ELEMENTOS DO CARRINHO
let ul2 = document.querySelector(".products-car-list")
ul2.style.visibility = "hidden"
// UL DOS CARDS NA VITRINE
const ul = document.querySelector(".products-list")

// BOTOES DO MENU NAV 
let buttonTodos = document.getElementsByClassName("botao-todos")
let buttonShounen = document.getElementsByClassName("botao-shounen")
let buttonSliceOfLife = document.getElementsByClassName("botao-sliceoflife")
let buttonIsekai = document.getElementsByClassName("botao-isekai")

// CARRINHO VAZIO
let vazio = document.querySelector(".carrinho-vazio")
let aside = document.querySelector(".carrinho")
let carrinhoCompras = document.querySelector(".carrinho-compras")

//CONTAR A QUANTIDADE DE ELEMENTOS QUE SAO ADICIONADOS AO CARRINHO
let elementCount = 0;
//SOMAR OS VALORES PARA RETORNAR O TOTAL DA COMPRA
let soma = 0;

// CRIAR ELEMENTOS E CARDS DA UL NA VITRINE
function listProducts (list) {
    for (let i = 0; i < list.length; i++){

        const li = document.createElement("li")
              li.classList.add("products-manga")
        const div = document.createElement("div")
              div.classList.add("info-img")
            let img = document.createElement("img")
                img.src = list[i].img
        const div2 = document.createElement("div")  
              div2.classList.add("info")
            let h3 = document.createElement("h3")
                h3.classList.add("sfl")
                h3.innerText = list[i].tag
            let h2 = document.createElement("h2")
                h2.innerText = list[i].nameItem
            let p = document.createElement("p")
                p.innerText = list[i].description
            let span = document.createElement("span")
                span.innerText = `R$ ${list[i].value}`
            let botao = document.createElement("button")
                botao.id = list[i].id
                botao.classList.add("botao-produto")
                botao.innerHTML = "Adicionar ao carrinho"

    
    div.appendChild(img)
    div2.appendChild(h3)
    div2.appendChild(h2)
    div2.appendChild(p)
    div2.appendChild(span)
    div2.appendChild(botao)

    li.appendChild(div)
    li.appendChild(div2)

    ul.appendChild(li)
    
    const totalQuant = document.querySelector(".foother")
    totalQuant.style.visibility = "hidden"


    // BOTAO DE ADICIONAR AO CARRINHO - INTERAÇOES 
    botao.addEventListener("click", function(event){
        if(elementCount >= 0){
            ul2.style.display = "block"
            const foother = document.querySelector(".foother")
            foother.style.display = "block"
        }
        totalQuant.style.visibility = "visible"
        ul2.style.visibility = "visible"
        vazio.style.display = "none"


        console.log(elementCount)

        // BOTAO DE ADICIONAR AO CARRINHO VERIFICAR ID E CRIAR UM DOM ESPECIFICO DO ID CLICADO
        if(list[i].id == event.target.id){
        
        //CONTAGEM QUANTIDADE DE ITENS
        elementCount++;
        document.querySelector("#countElement").innerHTML = `${elementCount}`

        //SOMA - DEVOLVE TOTAL
        soma += list[i].value
        document.querySelector("#countValue").innerHTML = `R$ ${soma},00`

            //ELEMENTOS CRIADOS PARA O CARRINHO
            let li = document.createElement("li")
                li.classList.add("products-car-list-li")
            let div = document.createElement("div")
                div.classList.add("products-in-car-img")
                let img = document.createElement("img")
                    img.src = list[i].img
            let div2 = document.createElement("div")
                div2.classList.add("products-in-car")
                let h2 = document.createElement("h2")
                    h2.innerText = list[i].nameItem
                let p = document.createElement("p")
                    p.innerText = `R$ ${list[i].value}`
                let botaoRemover = document.createElement("button")
                    botaoRemover.innerHTML = "Remover Produto"
                    botaoRemover.id = "botao-final"

            div.appendChild(img)
            div2.appendChild(h2)
            div2.appendChild(p)
            div2.appendChild(botaoRemover)

            li.appendChild(div)
            li.appendChild(div2)

            ul2.appendChild(li)

            // BOTAO DE REMOVER DO CARRINHO
            botaoRemover.addEventListener("click", function(event){
                li.remove()
                elementCount--;
                document.querySelector("#countElement").innerHTML = `${elementCount}`
                soma -= list[i].value
                document.querySelector("#countValue").innerHTML = `R$ ${soma},00`

                if(elementCount == 0){
                    vazio.style.display = "block"
                    ul2.style.display = "none"
                    const foother = document.querySelector(".foother")
                    foother.style.display = "none"
                }
            })
        }
    })


    // LISTAR E MOSTRAR OS ITENS CONFORME O QUE FOR CLICADO NO MENU DE NAVEGAÇÃO
    for (let j = 0; j < list[i].tag.length; j++){
            buttonTodos[0].addEventListener("click", function(event){
            ul.appendChild(li)
            
        })

        if (list[i].tag != "Shounen"){
            buttonShounen[0].addEventListener("click", function(event){
            li.remove()
        })
        }
        if (list[i].tag == "Shounen"){
            buttonShounen[0].addEventListener("click", function(event){
            ul.appendChild(li)
        })
        }

        if (list[i].tag != "SliceOfLife"){
            buttonSliceOfLife[0].addEventListener("click", function(event){
            li.remove()
        })
        }
        if (list[i].tag == "SliceOfLife"){
            buttonSliceOfLife[0].addEventListener("click", function(event){
            ul.appendChild(li)
        })
        }

        if (list[i].tag != "Isekai"){
            buttonIsekai[0].addEventListener("click", function(event){
            li.remove()
        })
        }
        if (list[i].tag == "Isekai"){
            buttonIsekai[0].addEventListener("click", function(event){
            ul.appendChild(li)
        })
        }
    }
  } 
}
listProducts(data)


//FUNCAO PARA PESQUISAR ----------------------------------------------------------------------------------------------------------------------------------
//REPLICA DA PRIMEIRA FUNCAO
function searchProduct (list) {
    const input = document.querySelector("#barrapesquisa")
    input.addEventListener("keyup", function(){
        ul.innerHTML = ""
        let searchValue = input.value.toUpperCase()
        for (let i = 0; i < list.length; i++){
            let searchName = list[i].nameItem.toUpperCase()
            let searchTag = list[i].tag.toUpperCase()
            if(searchName.includes(searchValue) || searchTag.includes(searchValue)){
                
        const li = document.createElement("li")
              li.classList.add("products-manga")
        const div = document.createElement("div")
              div.classList.add("info-img")
              let img = document.createElement("img")
                img.src = list[i].img
        const div2 = document.createElement("div")  
              div2.classList.add("info")
              let h3 = document.createElement("h3")
                  h3.classList.add("sfl")
                  h3.innerText = list[i].tag
              let h2 = document.createElement("h2")
                  h2.innerText = list[i].nameItem
              let p = document.createElement("p")
                  p.innerText = list[i].description
              let span = document.createElement("span")
                  span.innerText = `R$ ${list[i].value}`
              let botao = document.createElement("button")
                  botao.id = list[i].id
                  botao.classList.add("botao-produto")
                  botao.innerHTML = "Adicionar ao carrinho"

    div.appendChild(img)
    div2.appendChild(h3)
    div2.appendChild(h2)
    div2.appendChild(p)
    div2.appendChild(span)
    div2.appendChild(botao)

    li.appendChild(div)
    li.appendChild(div2)

    ul.appendChild(li)

    const totalQuant = document.querySelector(".foother")
    totalQuant.style.visibility = "hidden"


    // BOTAO DE ADICIONAR AO CARRINHO - INTERAÇOES 
    botao.addEventListener("click", function(event){
        if(elementCount >= 0){
            ul2.style.display = "block"
            const foother = document.querySelector(".foother")
            foother.style.display = "block"
        }
        totalQuant.style.visibility = "visible"
        ul2.style.visibility = "visible"
        vazio.style.display = "none"


        console.log(elementCount)

        // BOTAO DE ADICIONAR AO CARRINHO VERIFICAR ID E CRIAR UM DOM ESPECIFICO DO ID CLICADO
        if(list[i].id == event.target.id){
        
        //CONTAGEM QUANTIDADE DE ITENS
        elementCount++;
        document.querySelector("#countElement").innerHTML = `${elementCount}`

        //SOMA - DEVOLVE TOTAL
        soma += list[i].value
        document.querySelector("#countValue").innerHTML = `R$ ${soma},00`

            //ELEMENTOS CRIADOS PARA O CARRINHO
            let li = document.createElement("li")
                li.classList.add("products-car-list-li")
            let div = document.createElement("div")
                div.classList.add("products-in-car-img")
                let img = document.createElement("img")
                    img.src = list[i].img
            let div2 = document.createElement("div")
                div2.classList.add("products-in-car")
                let h2 = document.createElement("h2")
                    h2.innerText = list[i].nameItem
                let p = document.createElement("p")
                    p.innerText = `R$ ${list[i].value}`
                let botaoRemover = document.createElement("button")
                    botaoRemover.innerHTML = "Remover Produto"
                    botaoRemover.id = "botao-final"

            div.appendChild(img)
            div2.appendChild(h2)
            div2.appendChild(p)
            div2.appendChild(botaoRemover)

            li.appendChild(div)
            li.appendChild(div2)

            ul2.appendChild(li)

            // BOTAO DE REMOVER DO CARRINHO
            botaoRemover.addEventListener("click", function(event){
                li.remove()
                elementCount--;
                document.querySelector("#countElement").innerHTML = `${elementCount}`
                soma -= list[i].value
                document.querySelector("#countValue").innerHTML = `R$ ${soma},00`

                if(elementCount == 0){
                    vazio.style.display = "block"
                    ul2.style.display = "none"
                    const foother = document.querySelector(".foother")
                    foother.style.display = "none"
                }
            })
        }
    })
    for (let j = 0; j < list[i].tag.length; j++){
        buttonTodos[0].addEventListener("click", function(event){
        ul.appendChild(li)
        
    })

    if (list[i].tag != "Shounen"){
        buttonShounen[0].addEventListener("click", function(event){
        li.remove()
    })
    }
    if (list[i].tag == "Shounen"){
        buttonShounen[0].addEventListener("click", function(event){
        ul.appendChild(li)
    })
    }

    if (list[i].tag != "SliceOfLife"){
        buttonSliceOfLife[0].addEventListener("click", function(event){
        li.remove()
    })
    }
    if (list[i].tag == "SliceOfLife"){
        buttonSliceOfLife[0].addEventListener("click", function(event){
        ul.appendChild(li)
    })
    }

    if (list[i].tag != "Isekai"){
        buttonIsekai[0].addEventListener("click", function(event){
        li.remove()
    })
    }
    if (list[i].tag == "Isekai"){
        buttonIsekai[0].addEventListener("click", function(event){
        ul.appendChild(li)
    })
    }
}
            }
        }
    })
}
searchProduct(data)
//--------------------------------------------------------------------------------------------------------------------------------------------------------