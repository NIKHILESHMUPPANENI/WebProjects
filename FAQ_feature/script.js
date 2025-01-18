const toggle = document.querySelectorAll('.faq-toggle')

  toggle.forEach(toggle => {
    toggle.addEventListener('click',() => {
        toggle.parentNode.classList.toggle('active')
    })
  })

  // When a toggle element is clicked, the active class is toggled on its parent element (toggle.parentNode).