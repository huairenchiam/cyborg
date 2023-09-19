// Function to toggle the mobile menu
//function toggleMobileMenu() {
//    const navList = document.querySelector('ul');
//    navList.classList.toggle('show-mobile-menu');
//}

// Event listener for the mobile menu toggle
//const menuIcon = document.getElementById('menu-icon');
//if (menuIcon) {
//    menuIcon.addEventListener('click', toggleMobileMenu);
//}

// Close the mobile menu when a menu item is clicked (for smoother navigation on mobile)
//const navLinks = document.querySelectorAll('ul li a');
//navLinks.forEach((link) => {
//    link.addEventListener('click', () => {
//        const navList = document.querySelector('ul');
//        navList.classList.remove('show-mobile-menu');
  //  });
//});

let menu = document.querySelector('menu-icon');
let navlist = document.querySelector('navlist');

menu.oneclick = () => {
    menu.classlist.toggle('bx-x')
    navlist.classlist.toggle('open')
};

const sr = scrollreveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});
sr.reveal('.hero-text',{delay:200, origin: 'top'});
sr.reveal('.hero-img',{delay:450, origin: 'top'});
sr.reveal('.icons',{delay:500, origin: 'left'});
sr.reveal('.scroll-down',{delay:500, origin: 'right'});

