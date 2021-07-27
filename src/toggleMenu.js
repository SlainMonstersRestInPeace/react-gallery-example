export function appendOverlayElement() {
  const overlay = document.createElement('div');
  overlay.classList.add('burger-menu-overlay');
  
  $('.wrapper').append(overlay);

  $('.burger-menu-overlay').on('click', function() {
    toggleMenu();
  });
}

export function removeOverlayElement() {
  $('.burger-menu-overlay').remove();
}

export function toggleMenu() {
  $('.burger-menu-content').toggleClass('open');
  
  if ($('.burger-menu-content').hasClass('open')) {
    appendOverlayElement();
  } else {
    setTimeout(function () {
      removeOverlayElement();
    }, 200);
  }

  $('.burger-menu-overlay').toggleClass('show');
}