/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
rotate: 0,
    },
})

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
const sectionHeight = current.offsetHeight
const sectionTop = current.offsetTop - 50;
sectionId = current.getAttribute('id')

if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
}else{
    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
}
    })
}
window.addEventListener('scroll', scrollActive)

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

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== YOUTUBE POP UP VIDEO ====================*/ 
const cards = document.querySelectorAll('.animate__card');

// Loop melalui semua kartu dan tambahkan event listener click ke masing-masing
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Ambil link video dari atribut data-video pada kartu
    const videoLink = card.getAttribute('data-video');

    // Buat elemen video baru
    const video = document.createElement('iframe');
    video.setAttribute('src', videoLink);
    video.setAttribute('allowfullscreen', '');
    video.setAttribute('class', 'popup__video');

    // Buat elemen popup baru dan tambahkan video ke dalamnya
    const popup = document.createElement('div');
    popup.setAttribute('class', 'popup');
    const popupContent = document.createElement('div');
    popupContent.setAttribute('class', 'popup__content');
    popupContent.appendChild(video);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);

    // Tampilkan popup
    popup.style.display = 'block';

    // Berikan event listener click ke popup agar popup tertutup saat diklik
    popup.addEventListener('click', () => {
      popup.style.display = 'none';
      popup.remove();
    });
  });
});

/*==================== POP UP FORM ====================*/ 
function showPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = 'flex';
}

const loginButton = document.querySelector('.button__login');
const registerButton = document.querySelector('.button__register');

loginButton.addEventListener('click', function() {
  showPopup('loginPopup');
});

registerButton.addEventListener('click', function() {
  showPopup('registerPopup');
});

window.onclick = function(event) {
    if (event.target.classList.contains('popup')) {
event.target.style.display = 'none';
    }
}

/*==================== LOGIN FORM ====================*/ 
function login() {
  const email = document.querySelector('.popup__input[type="email"]').value;
  const password = document.querySelector('.popup__input[type="password"]').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find((user) => user.email === email && user.password === password);

  // Cek apakah email dan password tidak kosong
  if (email.trim() === '' || password.trim() === '') {
    alert('Email dan password harus diisi');
    return;
  }

  if (user) {
    // redirect to indexin.html
    window.location.href = 'indexin.html';
  } else {
    alert('Email or password is incorrect.');
  }
}

// tambahkan event listener pada button
document.getElementById('login-btn').addEventListener('click', function (event) {
  event.preventDefault();
  login();
});

/*==================== Register FORM ====================*/ 
function register() {
    const name = document.querySelector('.popup__input[name="name"]').value;
    const email = document.querySelector('.popup__input[name="email"]').value;
    const password = document.querySelector('.popup__input[name="password"]').value;
    const confirmPassword = document.querySelector('.popup__input[name="confirmpassword"]').value;
    const gender = document.querySelector('#gender-input').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Cek apakah email dan password tidak kosong
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
alert('Name, email, and password must be filled');
return;
    }

    // Cek apakah password dan konfirmasi password sama
    if (password !== confirmPassword) {
alert('Password and confirm password must be same');
return;
    }

    // Cek apakah email sudah terdaftar
    if (users.find((user) => user.email === email)) {
alert('Email is already registered');
return;
    }

    // Tambahkan user baru ke array users
    users.push({ name, email, password, gender });

    // Simpan data users ke localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // redirect to indexin.html
    window.location.href = 'indexin.html';
}

const users = JSON.parse(localStorage.getItem('users'));
document.getElementById("user-name").innerHTML = localStorage.getItem('name');

/*==================== PROFILE FORM ====================*/
function updatedata(e) {
  e.preventDefault();
  var password = document.querySelector('.password').value;
  var confirmPassword = document.querySelector('.confirm-password').value;
  if (password !== confirmPassword) {
    alert('Password and confirm password must be same');
    return;
  }
  var email = document.getElementById("email").value;
  const usersdata = JSON.parse(localStorage.getItem('users')) || [];
  if (usersdata.find((user) => user.email === email)) {
    var updatedData = {
      name: document.getElementById("name").value,
      email: email,
      gender: document.getElementById("gender").value,
      password: password
    };
    localStorage.setItem("users", JSON.stringify([updatedData]));
    alert('Data updated successfully!');
  }
}

// Load user data
const usersdata = JSON.parse(localStorage.getItem('users')) || [];
document.getElementById("user-name").innerHTML = localStorage.getItem('name');
document.getElementById("name").value = localStorage.getItem('name');
document.getElementById("email").value = localStorage.getItem('email');
document.getElementById("gender").value = localStorage.getItem('gender');


/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
// Play video
videoFile.play()
// We change the icon
videoIcon.classList.add('ri-pause-line')
videoIcon.classList.remove('ri-play-line')
    }
    else {
// Pause video
videoFile.pause(); 
// We change the icon
videoIcon.classList.remove('ri-pause-line')
videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)

var parsedData = JSON.parse(data);
var name = parsedData[0].name;
var email = parsedData[0].email;
var gender = parsedData[0]["gender"];

document.getElementById("name").value = name;
document.getElementById("email").value = email;
if (gender === "male") {
    document.getElementById("gender").value = "male";
} else {
    document.getElementById("gender").value = "female";
}

// Tambahkan event listener pada button sign out
function signOut() {
  // Hapus token autentikasi atau informasi login lainnya yang disimpan pada cookie atau sesi
  // Hapus token dari local storage
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');

  // Redirect ke halaman login
  window.location.href = 'index.html';
}