

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}



$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout: 2000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})


window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (scrollY > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
          navbar.classList.remove("navbar-shrink");
      }
  }


  // SLIDER START
  const slider = document.querySelector('.slider');
  const images = slider.querySelectorAll('img');
  let current = 0;
  
  function reset() {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove('active');
    }
  }
  
  function startSlide() {
    reset();
    images[0].classList.add('active');
  }
  
  function slideRight() {
    reset();
    current++;
    if (current >= images.length) {
      current = 0;
    }
    images[current].classList.add('active');
  }
  
  function slideLeft() {
    reset();
    current--;
    if (current < 0) {
      current = images.length - 1;
    }
    images[current].classList.add('active');
  }
  
  startSlide();
  
  let interval = setInterval(() => {
    slideRight();
  }, 2000);
  
  slider.addEventListener('mouseenter', () => {
    clearInterval(interval);
  });
  
  slider.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
      slideRight();
    }, 2000);
  });

function addToBalance(price) {
  let balanceElement = document.getElementById("balance");
  let balanceText = balanceElement.textContent;
  let currentBalance = parseFloat(balanceText.split("$")[1]);
  let newBalance = currentBalance + price;
  balanceElement.textContent = "Balance: $" + newBalance.toFixed(2);
}
const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add('loading-none');
}, loadingDuration);





