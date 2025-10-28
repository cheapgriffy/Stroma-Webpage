const planet_div = document.getElementById("planet_div")
const planet_mask = document.getElementById("planet_image")
const stroma_title = document.getElementById("stroma_title")
const down_div = document.getElementById("hero_down_div") 
const plants = document.getElementById("plants")
const navbar = document.getElementById("navbar")
const night_darken = document.getElementById("night_darken")

const scrollable_height = document.documentElement.scrollHeight - window.innerHeight;

// calls once page loaded (the heck is jquery jeeez, everywhere i try to see a equivalent to that)
window.addEventListener("load", (event) => {
    
    // used to counter the "seeing night background" whe
    // night_darken.style.opacity = "0%"
    // night_darken.classList.add("bg-gradient-to-b from-[#003367] to-[#00203f]")
});

// calls every scroll duuuuh
window.onscroll = () =>
{
    // Convert scroll px to %
    let scroll_ratio = (window.scrollY / scrollable_height) * 100;
    
    planet_mask.style.maskPosition = "-" + window.scrollY + "px"
    stroma_title.style.translate = "0px "+ window.scrollY/4+"px"
    
    // night_darken.style.opacity = scroll_ratio+"%"
};



// ce qui s'occupe d'ouvrir et fermer le menu hamburger
const button = document.getElementById('dropdown-button');
const menu = document.getElementById('user-menu');


if (button && menu) {
    button.addEventListener('click', () => {
      
        menu.toggleAttribute('data-closed'); 
        
        
        const isExpanded = menu.hasAttribute('data-closed') ? 'false' : 'true';
        button.setAttribute('aria-expanded', isExpanded);
    });

    document.addEventListener('click', (event) => {
        const isClickInside = button.contains(event.target) || menu.contains(event.target);
        
        if (!isClickInside && !menu.hasAttribute('data-closed')) {
            menu.setAttribute('data-closed', ''); // Ferme le menu
            button.setAttribute('aria-expanded', 'false');
        }
    });
}
