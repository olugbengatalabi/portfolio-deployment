/*jshint -W033 */

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle")
const navLink = document.querySelectorAll(".nav__item")
const navClose = document.getElementById("nav-close")
/*===== MENU SHOW =====*/
/* Validate if constant exists */
let menuOpen = false;


if (navToggle) {
  navToggle.addEventListener("click", () => {
    menuOpen = !menuOpen
    if (menuOpen) {
      navMenu.classList.add("show-menu")
    } else {
      navMenu.classList.remove('show-menu')
    }
  })
}

navLinks = [...navLink]

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")

  } )
});
navClose.addEventListener("click", () => {
  menuOpen = false
  navMenu.classList.remove("show-menu")
  console.log("clicked");
})
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

// if (navClose) {
//   navClose.addEventListener("click", () => {
    
    
//   })
// }
/*==================== REMOVE MENU MOBILE ====================*/


/*==================== ACCORDION SKILLS ====================*/
// const skillsContent = document.getElementsByClassName('skills__content')
// const skillsHeader = document.querySelectorAll('.skills__header')

// const toggleSkills = () => {
//   console.log(this.parentNode);
//   let itemClass = this.parentNode.ClassName

//   for (let index = 0; index < skillsContent.length; index++) {
//     skillsContent[i].className = 'skills__content skills__cl0se';
//   }
//   if (itemClass === 'skills__content skills__close') {
//     this.parentNode.className = 'skills__content skills__open'

//   }
// };

// skillsHeader.forEach((el) => {
//   el.addEventListener('click', toggleSkills)
// });
// you dont even need the foreach since youre only using one skill class

/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll(".services__modal")
const modalBtns = document.querySelectorAll(".services__button")
const modalCloses = document.querySelectorAll(".services__modal-close")


modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modalViews[i].classList.add("active-modal")
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal")
    })
  })
})
// /*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  /* mousewheel: true,
  keyboard: true, */
});
// let swiperPreview = new Swiper('.preview-img__container', {
//   cssMode: true,
//   // loop: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable:true,
//   },
//   scrollbar: {
//     e1: 'swiper-scrollbar',
//   },
//   mousewheel: true,
//   keyboard: true
// });

// ===================Portfolio Modal===============

/*==================== TESTIMONIAL ====================*/

let swiperTestimonial = new Swiper('.testimonial__container', {
  grabCursor: true,
  loop: true,
  spacBetween:48,
  navigation: {
    nextE1: '.swiper-button-next',
    prevE1: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true
  },
  scrollbar: {
    e1: 'swiper-scrollbar',
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    }
  },
  mousewheel: true,
  keyboard: true
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]")
const scrollActive = () => {
  const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
window.addEventListener('scroll', () => {
  scrollElement = document.getElementById('scroll-up');
  if (this.scrollY >=560) {
    scrollElement.classList.add('show-scroll');
  }
  else scrollElement.classList.remove('show-scroll')
})
/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove '](iconTheme);
}
themeButton.addEventListener("click", () => {
  console.log("clicked");
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

// previouslt selcte 