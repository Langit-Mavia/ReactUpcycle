/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.home__data, .home__social-link, .home__info,
   .discover__container,
   .animate__card,
   .place__card,
   .sponsor__content,
   .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, sampah__data, 
   .video__description, .contact-title`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
   .video__content, .name, .city, .email, .zipCode, .check, #submit-form, .buttonmaps, .buttonsecondmaps`,{
    origin: 'right',
    interval: 100,
})