window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'G-3S7XWKYXVV');

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

// Adicione um evento de clique para os links do menu
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    // Remove a classe 'active' de todos os links
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.classList.remove('active');
    });

    // Adiciona a classe 'active' ao link clicado
    this.classList.add('active');

    // Obtém o ID da seção correspondente
    const targetId = this.getAttribute('href').replace('#', ''); // Remove o '#' do href
    const targetSection = document.getElementById(targetId);

    // Rola a página até a seção correspondente, considerando um ajuste na posição
    if (targetSection) {
      const navbarHeight = 50; // Altura do navbar
      const containerPadding = 50; // Padding-top do container

      window.scrollTo({
        top: targetSection.offsetTop - navbarHeight - containerPadding, // Subtrai a altura do navbar e o padding do container
        behavior: 'smooth'
      });
    }
  });
});

// Fechar o menu ao clicar em um item
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  });
});

// Remover o foco do botão após clicar
document.querySelector('.navbar-toggler').addEventListener('click', () => {
  document.querySelector('.navbar-toggler').blur();
});

// Adicione um evento de rolagem para destacar os links do menu ao rolar a página
window.addEventListener('scroll', function() {
  const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navbarLinks.forEach(link => {
    const targetId = link.getAttribute('href').replace('#', ''); // Remove o '#' do href
    const targetSection = document.getElementById(targetId);

    // Remove a classe 'active' de todos os links quando a seção não está visível
    if (targetSection.getBoundingClientRect().top > window.innerHeight || targetSection.getBoundingClientRect().bottom < 0) {
      link.classList.remove('active');
    } else {
      // Adiciona a classe 'active' ao link quando a seção está visível na janela de visualização
      link.classList.add('active');
    }
  });
});
