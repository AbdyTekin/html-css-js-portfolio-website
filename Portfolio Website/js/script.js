// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

function theme0() {
    document.documentElement.style.setProperty('--bg-color', '#001c22');
    document.documentElement.style.setProperty('--second-bg-color', '#003d4a');
    document.documentElement.style.setProperty('--text-color', '#ededed');
    document.documentElement.style.setProperty('--main-color', '#ff2d00');
    document.documentElement.style.setProperty('--bg-image', 'url("../images/home0.jpg")');
    document.getElementById('theme0').classList.add('selected');
}

function theme1() {
    document.documentElement.style.setProperty('--bg-color', '#001B14');
    document.documentElement.style.setProperty('--second-bg-color', '#002E23');
    document.documentElement.style.setProperty('--text-color', '#EDEDED');
    document.documentElement.style.setProperty('--main-color', '#ff1142');
    document.documentElement.style.setProperty('--bg-image', 'url("../images/home1.jpg")');
    document.getElementById('theme1').classList.add('selected');
}

function theme2() {
    document.documentElement.style.setProperty('--bg-color', '#0B0F00');
    document.documentElement.style.setProperty('--second-bg-color', '#142000');
    document.documentElement.style.setProperty('--text-color', '#EDEDED');
    document.documentElement.style.setProperty('--main-color', '#A0FF00');
    document.documentElement.style.setProperty('--bg-image', 'url("../images/home2.jpg")');
    document.getElementById('theme2').classList.add('selected');
}

function theme3() {
    document.documentElement.style.setProperty('--bg-color', '#01172E');
    document.documentElement.style.setProperty('--second-bg-color', '#001F3E');
    document.documentElement.style.setProperty('--text-color', '#EDEDED');
    document.documentElement.style.setProperty('--main-color', '#18BDFF');
    document.documentElement.style.setProperty('--bg-image', 'url("../images/home3.jpg")');
    document.getElementById('theme3').classList.add('selected');
}

// Function to change to theme 2
function theme4() {
    document.documentElement.style.setProperty('--bg-color', '#380003');
    document.documentElement.style.setProperty('--second-bg-color', '#790004');
    document.documentElement.style.setProperty('--text-color', '#EDEDED');
    document.documentElement.style.setProperty('--main-color', '#FF2C33');
    document.documentElement.style.setProperty('--bg-image', 'url("../images/home4.jpg")');
    document.getElementById('theme4').classList.add('selected');
}

// Add event listeners to theme buttons
document.getElementById('theme0').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default action
    theme0(); // Change to theme 0
    localStorage.setItem('selectedTheme', 'theme0');
});

document.getElementById('theme1').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default action
    theme1(); // Change to theme 1
    localStorage.setItem('selectedTheme', 'theme1');
});

document.getElementById('theme2').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default action
    theme2(); // Change to theme 2
    localStorage.setItem('selectedTheme', 'theme2');
});

document.getElementById('theme3').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default action
    theme3(); // Change to theme 3
    localStorage.setItem('selectedTheme', 'theme3');
});

document.getElementById('theme4').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default action
    theme4(); // Change to theme 4
    localStorage.setItem('selectedTheme', 'theme4');
});

// Show or hide the dropdown when the color icon is clicked
document.addEventListener('click', function(event) {
    var dropdown = document.getElementById('color-dropdown');
    var colorIcon = document.getElementById('color-icon');
    
    if (colorIcon.contains(event.target)) {
        // If the click is on the color icon, toggle the dropdown
        dropdown.classList.toggle('active');
    } else if (!dropdown.contains(event.target) && dropdown.classList.contains('active')) {
        // If the click is outside of the dropdown and the dropdown is active, hide it
        dropdown.classList.remove('active');
    }
});

function applySelectedTheme() {
  var selectedTheme = localStorage.getItem('selectedTheme');
  if (selectedTheme) {
    // Apply the selected theme
    window[selectedTheme]();

    // Remove the "selected" class from all theme buttons
    var themeButtons = document.querySelectorAll('#color-dropdown a');
    themeButtons.forEach(function (button) {
      button.classList.remove('selected');
    });

    // Add the "selected" class to the currently selected theme button
    var selectedButton = document.getElementById(selectedTheme);
    selectedButton.classList.add('selected');
  } else {
    // Apply a default theme if no theme is selected
    theme0();
  }
}

// Add event listeners to theme buttons
var themeButtons = document.querySelectorAll('#color-dropdown a');
themeButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    var selectedTheme = button.id;
    localStorage.setItem('selectedTheme', selectedTheme);
    applySelectedTheme();
  });
});

// Call the function to apply the selected theme when the website loads
applySelectedTheme();