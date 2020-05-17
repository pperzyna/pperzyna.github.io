function LazyLoadImg() {
  var imageElements = document.querySelectorAll('.lightbox img');
  imageElements.forEach(c => c.setAttribute('src', c.getAttribute('data-src')));
}