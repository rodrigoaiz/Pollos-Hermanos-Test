document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('menu');

      } else {
        document.getElementById('navbar_top').classList.remove('menu');

      } 
  });
}); 
  let buttons = document.querySelectorAll('navbar_top a');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.currentTarget.getAttribute('href');
      
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });