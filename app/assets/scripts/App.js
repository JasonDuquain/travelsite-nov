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
                            if (pageSect.getBoundingClientRect().top <= 0 && pageSect.getBoundingClientRect().bottom >= 0) {
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

class Modal {
    constructor() {
        this.openModalButton = document.querySelectorAll('.open-modal');
        this.modal = document.querySelector('.modal');
        this.closeModalButton = document.querySelector('.modal__close');
        this.events();    
    }
    
    events() {
        this.openModalButton.forEach((openBtn) => {
           openBtn.addEventListener('click', (e) => {
               this.modal.classList.add('modal--is-visible');
           }); 
        });
        
        this.closeModalButton.addEventListener('click', (e) => {
            this.modal.classList.remove('modal--is-visible');
        });
        
        document.addEventListener('keyup', (e) => {
            if ( (e.key.toLowerCase().indexOf('escape') >= 0) && (this.modal.classList.contains('modal--is-visible')) ) {
               this.modal.classList.remove('modal--is-visible'); 
            }
        });
        
    }
    
    
}


var modal = new Modal();


/**********BACK TO TOP**********/

var btt = document.getElementById('back-to-top'),
          body = document.body,
          docElem = document.documentElement,
          offset = 100,
          isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
          scrollPos, docHeight;

            // Calculate the document height
            var heights = [body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight];
            docHeight = Math.max(...heights);
            if (docHeight != 'undefined') {
                offset = docHeight / 4;
            }

            // Add scroll event listener
            window.addEventListener('scroll', function(event) {
                scrollPos = body.scrollTop || docElem.scrollTop;
                btt.className = (scrollPos > offset) ? "visible" : "";
            });

            // Add click event listener
            btt.addEventListener('click', function(event) {
                event.preventDefault();
                (isFirefox) ? body.scrollTop = 0 : docElem.scrollTop = 0;
                
            });



