const toggleThemeSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');

const theme = {
    light : {
        label : 'Light Mode',
        icon : ['fas', 'fa-sun']
    }, 
    dark : {
        label : 'Dark Mode',
        icon : ['fas', 'fa-moon']
    }
};

const LIGHT = Object.keys(theme)[0];
const DARK = Object.keys(theme)[1]; 

function imageMode(mode) {
    toggleIcon.children[0].textContent = mode.label;
    toggleIcon.children[1].classList.remove(...toggleIcon.children[1].classList);
    toggleIcon.children[1].classList.add(...mode.icon);
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', DARK);
        localStorage.setItem('theme', DARK);
        imageMode(theme.dark);
    } else {
        document.documentElement.setAttribute('data-theme', LIGHT);
        localStorage.setItem('theme', LIGHT);
        imageMode(theme.light);
    }
}

toggleThemeSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === DARK) {
        toggleThemeSwitch.checked = true;
        imageMode(theme[currentTheme]);
    }
}