
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();









document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const sizeBoxes = document.querySelectorAll('.size-box');
    let selectedSize = null;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    sizeBoxes.forEach(box => {
        box.addEventListener('click', function () {
            sizeBoxes.forEach(b => b.classList.remove('selected'));
            box.classList.add('selected');
            selectedSize = box.textContent;
        });
    });

    document.getElementById('add-to-cart').addEventListener('click', function () {
        if (!selectedSize) {
            alert('Por favor, selecione um tamanho.');
            return;
        }
        const item = {
            product: document.querySelector('h3').textContent,
            color: document.querySelector('h4').textContent,
            size: selectedSize,
            price: parseFloat(document.querySelector('#preço1 p').textContent.replace('R$ ', ''))
        };
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    });

    cartIcon.addEventListener('click', function () {
        window.location.href = '../sacola.html';
    });

    updateCartCount();
});
