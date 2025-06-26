window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  
  // Отключаем прокрутку на время загрузки
  document.body.classList.add('no-scroll');

  setTimeout(() => {
    preloader.classList.add('fade-out');

    setTimeout(() => {
      preloader.remove();
      document.body.classList.remove('no-scroll');

      // Анимация для элементов с классом .animate-on-load
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.4}s`;
        el.classList.add('bounce-in');
      });

      // Наведение на логотип
      const logo = document.querySelector('.logo');
      if (logo) {
        logo.addEventListener('mouseenter', () => {
          logo.style.opacity = '0.2';
        });

        logo.addEventListener('mouseleave', () => {
          logo.style.opacity = '1';
        });
      }

    }, 500); // После fade-out прелоадера
  }, 500);
});