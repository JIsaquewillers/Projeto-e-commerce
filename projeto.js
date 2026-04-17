//declaração de variáveis //
const carrinhoBTN = document.getElementById("carrinhobtn")
const fecharCart = document.getElementById('fecharCart')
const buttonADD = document.querySelectorAll(".botãoadd")
const cart = document.getElementById("cart")
const cartUl = document.querySelector('#cart ul')

//declaração das arrays //
let carrinho = new Array()

let produtos = new Array(
    { nome: "Ovo de Páscoa laCreme ao Leite 348g", preco: 69.99, img: "fotos/ovo4.webp" },
    { nome: "Ovo de Páscoa ao Leite <br> Miau 200g", preco: 89.99, img: "fotos/ovo5.webp" },
    { nome: "Ovo de Páscoa laCreme Pistache 348g", preco: 129.99, img: "fotos/ovo6.webp" },
    { nome: "Ovo de Páscoa Clássicos ao Leite com Bombons 280g", preco: 99.99, img: "fotos/ovo7.webp" },
    { nome: "Ovo de Páscoa laCreme Mezzo 200g", preco: 72.99, img: "fotos/ovo8.webp" },
    { nome: "Ovo de Páscoa Ovinhos laCreme Kids 180g", preco: 54.99, img: "fotos/ovo9.webp" }
)



// evento de clique no botão do carrinho, para abir o carrinho na lateral da página. // 
 
carrinhoBTN.addEventListener('click',() =>{
    
    if( cart.style.display ==='none'){
        cart.style.display = 'block'
    }else{
        cart.style.display = 'none'
    }
}) 

//evento de clique no botão de fechar o carrinho //
fecharCart.addEventListener('click', () =>{
    if(cart.style.display === 'block'){
        cart.style.display = 'none'
    }else{
        cart.style.display = 'block'
    }
})
   
// evento de clique no botão de adicionar item, para adiconar o item no carrinho. //
for (let i = 0; i < buttonADD.length; i++) {
   buttonADD[i].addEventListener('click', () => {
    const produto = produtos[i]
    carrinho.push(produto)

    adicionarCart()
   })
    
}   

//função para adicionar item no carrinho //
function adicionarCart(){
    cartUl.innerHTML = ""
    carrinho.forEach(item => {
        const li = document.createElement('li')

        li.innerHTML = `
            <div class="produtoCart">
                <img src="${item.img}" width="50">
                <h3>${item.nome}</h3>
                <p>R$ ${item.preco.toFixed(2)}</p>
            </div>
        `

        cartUl.appendChild(li)

        soma()
        contador()
    })
}


//função para fazer a soma dos produtos e dar o total //
function soma (){
    let soma = 0
     let resultado = document.querySelector('#resultado')
     
    carrinho.forEach(item =>{
        soma += item.preco
        
    })
     resultado.innerHTML = "Total:"+ "R$" + soma.toFixed(2)
}


//função para mostrar quantos itens estão dentro do carrinho //
function contador (){
    let contador = document.querySelector("#contador")
    contador.innerHTML = carrinho.length
}




    