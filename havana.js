// slider
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

// function Button
const openBtn = document.querySelector('.openBtn')
const sideMenu = document.querySelector('.side_menu')
      openBtn.addEventListener("click" ,function(){
          if(openBtn.className === "openBtn open"){
            openBtn.innerHTML=''
            sideMenu.classList.remove('side_menu_show')
            openBtn.classList.remove('open')
            if(switchBtn.className === "switchBtn day"){
               openBtn.innerHTML=`<i class="fas fa-bars neon-effectTxt_blue"> `
            }else{
              openBtn.innerHTML=`<i class="fas fa-bars neon-effectTxt_blue day_modelBlue"> `
            }
          }
          else{ 
            openBtn.classList.add('open') 
            openBtn.innerHTML=''
            openBtn.innerHTML=`<i class="fas fa-times">`
            sideMenu.className+=` side_menu_show`
            if(switchBtn.className === "switchBtn day"){
              openBtn.innerHTML=`<i class="neon-effectTxt_pink fas fa-times">`
            }
          }
      })

const switchBtn = document.querySelector(".switchBtn")
      switchBtn.addEventListener('click',function(){
        if(switchBtn.className === "switchBtn day"){
          switchBtn.innerHTML=""
          switchBtn.innerHTML=`<i class="fas fa-moon neon-effectTxt_dayIcon"></i>`
          switchBtn.classList.remove('day')
        }else{
          switchBtn.classList.add('day')
          switchBtn.innerHTML=""
          switchBtn.innerHTML=`<i class="fas fa-sun"></i>`
        }
      })

const clickBtn= document.querySelector('.switchBtn')
      clickBtn.addEventListener('click', nightMode)
const dayBanner=document.querySelectorAll(".day_banner")
const pinkBtn = document.querySelectorAll(".pinkBlackShine_btn")

function nightMode(){
  const titleNeon=document.querySelectorAll(".neon-effectTxt_blue")
      document.querySelectorAll('.backImg').forEach(element => {
          element.classList.toggle("day_banner")
      })
      titleNeon.forEach(element => {
        element.classList.toggle("day_modelBlue")
      })
      pinkBtn.forEach(element => {
        element.classList.toggle("pinkBlackShine_btn")
      }
      )}


// loadPage
const loadPage = document.querySelector('.loadPage')
      window.setTimeout(()=>{
        loadPage.classList.add(`loadPageOff`)
      },500)







