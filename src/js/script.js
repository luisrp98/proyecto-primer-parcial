let navbar_button = document.querySelector('.navbar-button')
navbar_button.addEventListener('click', () => {
    let icon_bars = document.querySelector('.fa-bars')
    let icon_xmark = document.querySelector('.fa-xmark')

    if (!icon_bars.classList.contains('bars-animated')) {
        icon_bars.classList.add('bars-animated')
        icon_xmark.classList.add('xmark-animated')
    } else {
        icon_bars.classList.remove('bars-animated')
        icon_xmark.classList.remove('xmark-animated')
    }
})

// let navbar_button = document.querySelector('.navbar-button')
// navbar_button.addEventListener('click', () => {
//     let icon_bars = document.querySelector('.fa-bars')
//     let icon_xmark = document.querySelector('.fa-xmark')

//     if (!icon_bars.classList.contains('icon-active')) {
//         icon_bars.classList.add('icon-active')
//         icon_xmark.classList.add('icon-deactive')
//     } else {
//         icon_bars.classList.remove('icon-active')
//         icon_bars.classList.add('icon-deactive')

//         icon_xmark.classList.remove('icon-deactive')
//         icon_xmark.classList.add('icon-active')
//     }

// })

// let icon_active = document.querySelector('.icon-active')
// let icon_deactive = document.querySelector('.icon-deactive')
// icon_active.classList.remove('icon-active')
// icon_active.classList.add('icon-deactive')
// icon_deactive.classList.remove('icon-deactive')
// icon_deactive.classList.add('icon-active')
