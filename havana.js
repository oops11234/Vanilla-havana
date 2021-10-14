


const openBtn = document.querySelector('.openBtn')
const sideMenu = document.querySelector('.side_menu')
      openBtn.addEventListener("click" ,function(){
      sideMenu.className+=` side_menu_show`
      })
const closeBtn = document.querySelector(".close_btn")
      closeBtn.addEventListener("click" ,function(){
            sideMenu.classList.remove('side_menu_show')
            })