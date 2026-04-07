//*abrir carrinho na lateral da página X
//*adiconar item no carrinho
//*aparecer o número de produtos no carrinho
//*somar preço

//declaração de variáveis e array //

const carrinhoBTN = document.getElementById("carrinhobtn")
const fecharCart = document.getElementById('fecharCart')
const buttonADD = document.querySelectorAll(".botãoadd")
const cart = document.getElementById("cart")
const cartUl = document.querySelector('#cart ul')
let carrinho = new Array()


let produtos = new Array(
    { nome: "Ovo de Páscoa laCreme ao Leite 348g", preco: 51, img: "fotos/ovo4.webp" },
    { nome: "Ovo de Páscoa Lacta Sonho de Valsa 277g", preco: 120 }
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
   
// evneto de clique no botão de adicionar item, para adiconar o item no carrinho. 
// //

buttonADD.forEach((button, index) => {
     button.addEventListener('click' ,() => { 
         const produto = produtos[index]

    carrinho.push(produto)
    
    adicionarCart()
    }
)})

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
    })
}


    


    








    