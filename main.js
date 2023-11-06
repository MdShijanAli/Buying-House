function dropdownHandler(element) {
  let single = element.getElementsByTagName("ul")[0];
  single.classList.toggle("hidden");
}

function MenuHandler(el, val) {
  let MainList = el.parentElement.parentElement.getElementsByTagName("ul")[0];
  let closeIcon =
    el.parentElement.parentElement.getElementsByClassName("close-m-menu")[0];
  let showIcon =
    el.parentElement.parentElement.getElementsByClassName("show-m-menu")[0];
  if (val) {
    MainList.classList.remove("hidden");
    el.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    showIcon.classList.remove("hidden");
    MainList.classList.add("hidden");
    el.classList.add("hidden");
  }
}
// ------------------------------------------------------
let sideBar = document.getElementById("mobile-nav");
let menu = document.getElementById("menu");
let cross = document.getElementById("cross");
const sidebarHandler = (check) => {
  if (check) {
    sideBar.style.transform = "translateX(0px)";
    menu.classList.add("hidden");
    cross.classList.remove("hidden");
  } else {
    sideBar.style.transform = "translateX(-100%)";
    menu.classList.remove("hidden");
    cross.classList.add("hidden");
  }
};
let list = document.getElementById("list");
let chevrondown = document.getElementById("chevrondown");
let chevronup = document.getElementById("chevronup");
const listHandler = (check) => {
  if (check) {
    list.classList.remove("hidden");
    chevrondown.classList.remove("hidden");
    chevronup.classList.add("hidden");
  } else {
    list.classList.add("hidden");
    chevrondown.classList.add("hidden");
    chevronup.classList.remove("hidden");
  }
};





const parentMenu = document.querySelectorAll('.parent_menu');
const childMenu = document.querySelectorAll('.child_menu');

parentMenu.forEach((button, index) => {
  button.addEventListener('click', () => {
    childMenu.forEach((content, contentIndex) => {
      if (contentIndex === index) {
        content.classList.toggle('show');
      } else {
        content.classList.remove('show');
      }
    });
  });
});







console.log('hello');









const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById("currentYear").textContent = currentYear;



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("bg-gray-700");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add("bg-gray-700");
}


