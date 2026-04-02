//*abrir carrinho na lateral da página X
//*adiconar item no carrinho
//*aparecer o número de produtos no carrinho
//*somar preço

//declaração de variáveis e array //

const carrinhoBTN = document.getElementById("carrinhobtn")
const fecharCart = document.getElementById('fecharCart')
const buttonADD = document.querySelectorAll("botãoadd")
const cart = document.getElementById("cart")
let produtos = new Array()



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
// carrinhoBTN.array.forEach(button => { button.addEventListener('click',()=> ) } ); //

    








    