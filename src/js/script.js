let navbar_button = document.querySelector('.navbar-button')
navbar_button.addEventListener('click', () => {
    // Get the elements
    let icon_bars = document.querySelector('.fa-bars')
    let icon_xmark = document.querySelector('.fa-xmark')
    let navbar_menu = document.querySelector('.navbar-menu')

    // Toggle the classes
    // If the navbar is closed, open it and change the icon from bars to xmark
    if (!icon_bars.classList.contains('bars-animated')) {
        icon_bars.classList.add('bars-animated')
        icon_xmark.classList.add('xmark-animated')
        navbar_menu.classList.remove('navbar-menu-close')
        navbar_menu.classList.add('navbar-menu-open')
    }
    // If the navbar is open, close it and change the icon from xmark to bars
    else {
        icon_bars.classList.remove('bars-animated')
        icon_xmark.classList.remove('xmark-animated')
        navbar_menu.classList.remove('navbar-menu-open')
        navbar_menu.classList.add('navbar-menu-close')
    }
})
