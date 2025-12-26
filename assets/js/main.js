/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Khi bấm vào một link bất kỳ tắt menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed('#home-typed', {
    strings: ['Heckor', 'Gooner', 'Developer'], // Nội dung
    typeSpeed: 80,    // Tốc độ gõ (càng nhỏ càng nhanh)
    backSpeed: 40,    // Tốc độ xóa chữ (càng nhỏ càng nhanh)
    backDelay: 2000,  // Thời gian chờ trước khi xóa (2000ms = 2 giây)
    loop: true,       // Lặp lại vô tận
    cursorChar: '_',  // Ký tự con trỏ nhấp nháy
})

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Khi cuộn trang xuống quá 50px, thêm class 'scroll-header' vào thẻ header
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_m7b6k5x','template_40urm0r','#contact-form','vRyn8xKplBINdwFX3')
    .then(() => {
        //show sent message
        contactMessage.textContent = 'Message sent successfully'

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error)'
    })

}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    // reset: true,  //Lặp hiệu ứng
})

sr.reveal('.home__content, .resume__content:nth-child(1), .footer__container')
sr.reveal('.home__data, .resume__content:nth-child(2)', {delay: 300, origin: 'bottom'})

sr.reveal('.about__content, .contact__content', {origin: 'bottom'})
sr.reveal('.about__image, .contact__form', {delay: 300})

sr.reveal('.projects__card', {interval: 100})