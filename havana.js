$(document).ready(function(){
      $('.owl-carousel').owlCarousel({
            loop:true,
            margin:40,
            
            navClass:['leftArrow btn_arrow pink_btn neon-effectTxt_pink ', ' rightArrow btn_arrow pink_btn neon-effectTxt_pink'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
    });


const openBtn = document.querySelector('.openBtn')
const sideMenu = document.querySelector('.side_menu')
      openBtn.addEventListener("click" ,function(){
          if(openBtn.className === "openBtn open"){
            //    openBtn.innerHTML=''
            //     openBtn.innerHTML=`<i class="close_btn neon-effectTxt_pink fas fa-times">`
            //     sideMenu.className+=` side_menu_show`
            openBtn.innerHTML=''
            openBtn.innerHTML=`<i class="fas fa-bars neon-effectTxt_blue">`
            sideMenu.classList.remove('side_menu_show')
            openBtn.classList.remove('open')
          }
          else{
            openBtn.classList.add('open')
            openBtn.innerHTML=''
            openBtn.innerHTML=`<i class="close_btn neon-effectTxt_pink fas fa-times">`
            sideMenu.className+=` side_menu_show`
          }
     
      })

