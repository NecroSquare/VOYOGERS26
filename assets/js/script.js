// Initialize AoS
AOS.init();

let navigationResponsiveButton = document.querySelector('.navigation-header-responsive');
let navItem = document.querySelectorAll('.nav-item');

const showNavigation = e => {
    e.preventDefault();
    let navigationHeader = document.querySelector('.navigation-header');
    navigationHeader.classList.toggle('slide-down');
}

const smoothNavigation = function(e){
    let linkNav = this.children;
    let linkNavHref = linkNav[0].getAttribute('href');
    let destinationScroll = document.querySelector(linkNavHref);
    let destinationOffset = destinationScroll.offsetTop;
    
    if(this.parentElement.classList.contains('navigation-header')){
        navItem.forEach(n => {
            n.classList.remove('active');
        });
        this.classList.add('active');
    }
    
    let offsetMinus = 60;

    switch(linkNavHref){
        case '#kontak':
            offsetMinus = 90;
            break;
    }

    window.scrollTo({
        top:destinationOffset - offsetMinus,
        behavior: "smooth"
    });

    e.preventDefault();
}

navigationResponsiveButton.addEventListener('click',showNavigation);
navItem.forEach(nav => {
    nav.addEventListener('click',smoothNavigation);
});

const menu = document.querySelector(".navigation-header");
menu.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("nav-link")) {
    menu.style.setProperty(
      "--underline-width",
      `${event.target.offsetWidth}px`
    );
    menu.style.setProperty(
      "--underline-offset-x",
      `${event.target.offsetLeft}px`
    );
  }
});
menu.addEventListener("mouseleave", () =>
  menu.style.setProperty("--underline-width", "0")
);