//*abrir carrinho na lateral da página
//*adiconar item no carrinho
//*aparecer o número de produtos no carrinho
//*somar preço



const carrinhoBTN = document.getElementById("carrinhobtn")
const buttonADD = document.getElementsByClass("botãoadd")
const cart = document.getElementById("cart")
let produtos = new Array()


// evneto de clique no botão de adicionar item, para adiconar o item no carrinho. //
buttonADD.addEventListener("click",()=>{
        const nome = document.getElementById("nome").textContent
        const preço = document.getElementById("preço").textContent

    produtos.push(
        nome,preço
    )
})


// evento de clique no botão do carrinho, para abir o carrinho na lateral da página. // 
carrinhoBTN.addEventListener('click',() =>{
    if( cart.style.display ==='none'){
        cart.style.display === 'block'
    }else{
        cart.style.display === 'none'
    }}) 


    