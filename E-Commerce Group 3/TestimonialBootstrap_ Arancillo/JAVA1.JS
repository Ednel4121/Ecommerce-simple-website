// Hintayin muna na ma-load ang buong DOM bago patakbuhin ang script
document.addEventListener('DOMContentLoaded', function() {
  // Kunin ang carousel track element
  const track = document.getElementById('carouselTrack');
  // Kunin ang "Next" button element
  const nextBtn = document.getElementById('nextBtn');
  // Kunin ang "Previous" button element
  const prevBtn = document.getElementById('prevBtn');
  // Kunin ang unang card sa loob ng carousel track
  const card = track.querySelector('.card');
  // Kumuha ng lapad ng card (kasama ang margin), fallback sa 384 kung wala
  const cardWidth = card ? card.offsetWidth + 24 : 384; // fallback width

  // Magdagdag ng click event sa "Next" button para mag-scroll pakanan ng isang card
  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });

  // Magdagdag ng click event sa "Previous" button para mag-scroll pakaliwa ng isang card
  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });
});