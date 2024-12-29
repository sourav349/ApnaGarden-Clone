let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  typing.classList.remove("active");
  navbar.classList.remove("active");
};

let shoppingCart = document.querySelector(".shoppping-cart");

document.querySelector("#cart-btn").onclick = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.toggle("active");
  loginForm.classList.remove("active");
  typing.classList.remove("active");
  navbar.classList.remove("active");
};
let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  typing.classList.remove("active");
  navbar.classList.remove("active");
};
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  typing.classList.remove("active");
  loginForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  searchForm.classList.remove("active");
};
let typing = document.querySelector(".sell-form");

document.querySelector("#sell-click").onclick = () => {
  typing.classList.toggle("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  typing.classList.remove("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

document.addEventListener("DOMContentLoaded", function () {
  let swiper = new Swiper(".home-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 2700,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
