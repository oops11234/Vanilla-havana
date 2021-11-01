const openBtn = document.querySelector('.openBtn')
const sideMenu = document.querySelector('.side_menu')
      openBtn.addEventListener("click" ,function(){
          if(openBtn.className === "openBtn open"){
            sideMenu.classList.remove('side_menu_show')
            openBtn.classList.remove('open')
            if(switchBtn.className === "switchBtn day"){
              openBtn.innerHTML=''
               openBtn.innerHTML=`<i class="fas fa-bars neon-effectTxt_blue"> `
            }else{ 
              openBtn.innerHTML=''
              openBtn.innerHTML=`<i class="fas fa-bars neon-effectTxt_blue day_modelBlue"> `
            }
          }
          else{ 
            openBtn.classList.add('open') 
            openBtn.innerHTML=''
            openBtn.innerHTML=`<i class="fas fa-times">`
            sideMenu.className+=` side_menu_show`
            if(switchBtn.className === "switchBtn day"){
              openBtn.innerHTML=''
              openBtn.innerHTML=`<i class="neon-effectTxt_pink fas fa-times">`
            }else{
              openBtn.innerHTML=''
              openBtn.innerHTML=`<i class="neon-effectTxt_pink fas fa-times day_modelBlue"> `
            }
          }
      })
const webText = document.querySelectorAll(`.copyright_zone p`)
const switchBtn = document.querySelector(".switchBtn")

      switchBtn.addEventListener('click',function(){
        if(switchBtn.className === "switchBtn day"){
          switchBtn.innerHTML=""
          switchBtn.innerHTML=`<i class="fas fa-moon neon-effectTxt_dayIcon"></i>`
          switchBtn.classList.remove('day')
          webText.forEach(element => {
            element.style['color']="#079133"
          });
          document.body.style['background']="hsl(315, 43%, 46%)"
          
        }else{
          switchBtn.classList.add('day')
          switchBtn.innerHTML=""
          switchBtn.innerHTML=`<i class="fas fa-sun"></i>`
          webText.forEach(element => {
            element.style['color']="seashell"
          })
          document.body.style['background']="#0a0a0a"
        } 
      })

const clickBtn= document.querySelector('.switchBtn')
      clickBtn.addEventListener('click', nightMode)
const dayBanner=document.querySelectorAll(".day_banner")
const pinkBtn = document.querySelectorAll(".pinkBlackShine_btn")
const hyperText = document.querySelectorAll(".hyText")
const dayVideo = document.querySelector(".day_video")
const nightVideo = document.querySelector(".night_video")
const dayBlock = document.querySelectorAll(".intro_area")

function nightMode(){
  const blueNeon=document.querySelectorAll(".neon-effectTxt_blue")
  const pinkNeon = document.querySelectorAll(".neon-effectTxt_pink")
 
      
      document.querySelectorAll('.backImg').forEach(element => {
          element.classList.toggle("day_banner")
      })
      blueNeon.forEach(element => {
        element.classList.toggle("day_modelBlue")
      })
      pinkNeon.forEach(element => {
        element.classList.toggle("day_modelBlue")
      })
      pinkBtn.forEach(element => {
        element.classList.toggle("pinkBlackShine_btn")
      })
      hyperText.forEach(element => {
        element.classList.toggle("day_hyLink")
      })
      dayBlock.forEach(element => {
        element.classList.toggle("night_block")
      })
    }

    const cartBtn = document.querySelector('.cartShiftBtn')
    const cartPart = document.querySelector('.cart_zone')
    cartBtn.addEventListener('click',function(){
      cartPart.classList.toggle("cart_show")

    })





    // cart unfinished
    // const tbl= document.querySelector("tbody")
//   function adder (a ,b ,c){
//     // const lastItem= tbl.lastChild.previousSibling
//     let addItem= document.createElement(`tr`)
//     addItem.innerHTML=`<td>
//     <h6>${a}</h6>
//     <span>x</span>
//     <span class="qty">${b}</span>
// </td>
// <td class="priceTotal">
// ${c}
// </td>`
//     tbl.insertBefore(addItem,lastItem);
//   }
  
  let productsInCart = []
  const products = document.querySelectorAll('.item')
  const parentElement = document.querySelector('tbody')
  const totalPrice = document.querySelector('.totalPrice')
  const countSumPrice = function(){
    let sumPrice= 0
    productsInCart.forEach(product=>{
      sumPrice+=product.price
    })
    return sumPrice
  }
  const updateShoppingCartHTML = function(){
    if(productsInCart.length>0){
    const lastItem= parentElement.lastChild.previousSibling
     let result = productsInCart.map(product =>{
        return`<tr>
              <td>
              <h6>${product.name}</h6>
              <span>x</span>
              <span class="qty">${product.count}</span>
              </td>
              <td class="priceTotal">${product.price}</td>
              </tr>`
      })
      parentElement.innerHTML= result.join('')
      totalPrice.innerHTML="$" + countSumPrice()
    }else{
      parentElement.innerHTML=` <tr>
      <td>
        <h6>your cart is empty</h6>
      </td>
    </tr>`
    totalPrice.innerHTML=""
    }
  }
  
  function updateProductsInCart(product){
    for (let i = 0; i < productsInCart.length; i++) {
      if(productsInCart[i].id === product.id){
        productsInCart[i].count += 1
        productsInCart[i].price =  productsInCart[i].basePrice *  productsInCart[i].count
        return;
      }
    }
    productsInCart.push(product)
  }
  products.forEach(product=>{
    product.addEventListener('click',(e)=>{
      if (e.target.classList.contains('add_btn')){
        const productID = e.target.dataset.productId
        const productName = product.querySelector('.productName').innerHTML
        const productPrice = product.querySelector('.price').innerHTML
        let productsToCart={
          name:productName,
          id:productID,
          count :1,
          price:productPrice*1,
          basePrice:productPrice*1,
        }
        updateProductsInCart(productsToCart)
        updateShoppingCartHTML()     
      } 
    })
  } )


  // let qty= Number(document.querySelector(".qty").innerHTML)
  //  let price = qty*20
  //  const priceCum= document.querySelector(".priceTotal")
  //  priceCum.innerHTML=`${price}`