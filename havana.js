// slider
$(document).ready(function(){
  const one = $("#one")
  const two = $("#two")
     one.owlCarousel({
            loop:true,
            margin:40,
            navClass:['leftArrow btn_arrow pink_btn neon-effectTxt_pink day_modelBlue', ' rightArrow btn_arrow pink_btn neon-effectTxt_pink day_modelBlue'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });
      two.owlCarousel({
        loop:true,
        margin:5,
        nav:true,
        autoWidth:true,
        center:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1200:{
                items:3
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
const webText = document.querySelectorAll(`p`)
const switchBtn = document.querySelector(".switchBtn")

      switchBtn.addEventListener('click',function(){
        if(switchBtn.className === "switchBtn day"){
          switchBtn.innerHTML=""
          switchBtn.innerHTML=`<i class="fas fa-moon neon-effectTxt_dayIcon"></i>`
          switchBtn.classList.remove('day')
          webText.forEach(element => {
            element.style['color']="#05521e"
          });
          document.body.style['background']="d7d9ff"
          
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



function nightMode(){
  const blueNeon=document.querySelectorAll(".neon-effectTxt_blue")
  const pinkNeon = document.querySelectorAll(".neon-effectTxt_pink")
  const crossBtn = document.querySelector(".openBtn >i")

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
      },
      crossBtn.classList.toggle("neon-effectTxt_pink")
      )}


// loadPage
const loadPage = document.querySelector('.loadPage')
      window.setTimeout(()=>{
        loadPage.classList.add(`loadPageOff`)
      },500)







