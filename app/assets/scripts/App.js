/******MobileMenu.js*******/

class MobileMenu {
    constructor() {
         this.siteHeader = document.querySelector('.site-header');   this.menuIcon = document.querySelector('.site-header__menu-icon');
         this.menuContent = document.querySelector('.site-header__menu-content');
         this.events(); 
    }
    
    events() {
           this.menuIcon.addEventListener('click', () => {
           this.menuContent.classList.toggle('site-header__menu-content--is-visible'); 
           this.siteHeader.classList.toggle('site-header--is-expanded');
           this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
        })
    }
    
}

var mobileMenu = new MobileMenu();

/******** RevealOnScroll.js********/

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll('.feature-item, .testimonial');
        this.hideInitially();
        this.showElements();
    }
    
    hideInitially() {
        this.itemsToReveal.forEach((item) => item.classList.add('reveal-item'));
    }
    
    showElements() {
        this.itemsToReveal.forEach((item) =>  {
            document.addEventListener('scroll', (e) => {
                if (item.getBoundingClientRect().top <= 300) {
                    item.classList.add('reveal-item--is-visible');
                }    
            });    
        });      
    }
}

var revealOnScroll = new RevealOnScroll();

/******* StickyHeader.js************/

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.headerTriggerElement = document.querySelector('.large-hero__title');
        this.darkenHeader();
        this.pageSections = document.querySelectorAll('.page-section');
        this.navSections = document.querySelectorAll('.primary-nav a');
        this.createPageSectHighlight(); 
    }
    
    darkenHeader() {
        document.addEventListener('scroll', () => {
            if (this.headerTriggerElement.getBoundingClientRect().top <= 0) {
               this.siteHeader.classList.add('site-header--dark');
            } else {
               this.siteHeader.classList.remove('site-header--dark');
            }   
        }); 
    }
    
    createPageSectHighlight() {
            this.pageSections.forEach((pageSect) => {
                document.addEventListener('scroll', (e) => {    
                    for (let i = 0; i < this.navSections.length; i++) {
                        if (pageSect.getAttribute('data-matching-link').slice(1) ===    this.navSections[i].getAttribute('id')) {
                            if (pageSect.getBoundingClientRect().top <= 0 &&             pageSect.getBoundingClientRect().bottom >= 0) {
                               this.navSections[i].classList.add('is-current-link');
                            } else {
                                this.navSections[i].classList.remove('is-current-link');
                            }
                        }
                    }
            
                });
                    
            });
            
           
    }
    
}


var stickyHeader = new StickyHeader();

/************** Modal.js ***********/


