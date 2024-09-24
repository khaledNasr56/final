let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

//document.querySelector('.closebutn').onclick = () =>{
 //  navbar.classList.toggle('.closebutton');
//}


function closeNav() {
   document.querySelector("navbar").style.display = 'none';
}

let account= document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = () =>{
   account.classList.toggle('show');
}

document.querySelector('#close-account').onclick =() =>{
   account.classList.remove('show');      
} 

let myOrders = document.querySelector('.my-orders');

document.querySelector('#order-btn').onclick = () =>{
   myOrders.classList.add('aactive');
}

document.querySelector('#close-orders').onclick = () =>{
   myOrders.classList.remove('aactive');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
   cart.classList.add('shopping-cart-active');
}

document.querySelector('#close-cart').onclick = () =>{
   cart.classList.remove('shopping-cart-active');
}


window.onscroll = () =>{
  navbar.classList.toggle('.closebutton');
   myOrders.classList.remove('aactivee');
   cart.classList.remove('shopping-cart-active');
}

let slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
let index = 0;

function next(){
   slides[index].classList.remove('active');
   index = (index + 1) % slides.length;
   slides[index].classList.add('active');
}

function prev(){
   slides[index].classList.remove('active');
   index = (index - 1 + slides.length) % slides.length;
   slides[index].classList.add('active');
}

let accordion = document.querySelectorAll('.faq  .accordion-container .accordion');

accordion.forEach(acco =>{
   acco.onclick = () =>{
      accordion.forEach(remove => remove.classList.remove('aactivee'));
      acco.classList.add('aactivee');
   }
});
 

let value = null;
console.log(typeof value)