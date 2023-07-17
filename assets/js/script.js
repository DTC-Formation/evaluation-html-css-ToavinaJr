let menuToggle = document.getElementById('menu-toggle')
let menuOpen = document.getElementById('menu-open')
let menuClose = document.getElementById('menu-close')
// let navbar = document.querySelector('nav')
let isOpen = true


menuToggle.addEventListener('click', function(){
      let nav = document.querySelector('nav')
      isOpen = !isOpen
      
      if (!isOpen){
            menuClose.style.display = 'block'
            menuOpen.style.display = 'none'
      }
      else{
            menuClose.style.display = 'none'
            menuOpen.style.display = 'block'
      }
      nav.classList.toggle('active')
})
