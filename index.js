
 const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const hamburgerIcon = document.getElementById("hamburgerIcon");

    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      
      const isOpen = mobileMenu.classList.contains("active");
    //   hamburgerIcon.querySelectorAll("rect").forEach(rect => {
    //     rect.setAttribute("fill", isOpen ? "#5f1d2b" : "white");
    //   });
    });

  
  const images = [
  'url("img/istockphoto-531519037-612x612.jpg")',
  'url("img/banner-2.webp")', 
  'url("img/banner-3.jpg")',
  'url("img/banner-4.jpg")'
];

let index = 0;

const banner = document.querySelector('.banner');

function changeBackground() {
  banner.style.backgroundPosition = '100% center';
  // banner.style.transition = 'background-position 0.3s ease-out';

  setTimeout(() => {
    banner.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${images[index]}`;

    banner.style.backgroundPosition = '0% center';
  }, 100);

  index = (index + 1) % images.length;
}


banner.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${images[0]}`;

setInterval(changeBackground, 2000);



