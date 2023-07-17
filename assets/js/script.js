let body = document.querySelector('body')
let menuOpen = document.getElementById('menu-open')
let menuClose = document.getElementById('menu-close')
let navList = document.querySelector('ul')

menuOpen.addEventListener('click', function(){
      menuOpen.style.display = 'none'
      menuClose.style.display = 'block'

      if (navList.style.display === 'block')
            navList.style.display = 'none'
      else
            navList.style.display = 'block'
})

menuClose.addEventListener('click', function(){
      menuClose.style.display = 'none'
      menuOpen.style.display = 'block'

      if (navList.style.display === 'block')
            navList.style.display = 'none'
      else
            navList.style.display = 'block'
})