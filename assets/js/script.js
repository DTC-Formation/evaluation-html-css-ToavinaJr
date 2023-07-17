let menuOpen = document.getElementById('menu-open')
let menuClose = document.getElementById('menu-close')

menuOpen.addEventListener('click', function(){
      menuOpen.style.display = 'none'
      menuClose.style.display = 'block'
      let nav = document.querySelector('nav')
      nav.classList.toggle('active')
})

menuClose.addEventListener('click', function(){
      menuClose.style.display = 'none'
      menuOpen.style.display = 'block'
      let nav = document.querySelector('nav')
      nav.classList.toggle('active')
})