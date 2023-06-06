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