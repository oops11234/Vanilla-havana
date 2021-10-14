$(document).ready(function(){
      $('.owl-carousel').owlCarousel({
            loop:true,
            margin:40,
            nav:true,
            navClass:['leftArrow btn_arrow pink_btn neon-effectTxt_pink ', ' rightArrow btn_arrow pink_btn neon-effectTxt_pink'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
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
      sideMenu.className+=` side_menu_show`
      })
const closeBtn = document.querySelector(".close_btn")
      closeBtn.addEventListener("click" ,function(){
            sideMenu.classList.remove('side_menu_show')
            })
