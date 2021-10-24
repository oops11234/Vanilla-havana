
 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    center:true,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1200:{
            items:5
        }
    }
})

// function Button
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
const webText = document.querySelectorAll(`p`)
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
const dayBlock = document.querySelectorAll(".logo_area")

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