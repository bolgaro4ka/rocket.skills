var isMaxSize = 0


var backArrow = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>'
var upBurger = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>'


document.querySelector('.navigation__burger-btn').addEventListener('click', () => {
    if (!isMaxSize) {
        document.querySelector('.navigation').classList.add('nav-maximized');
        document.querySelector('.navigation').classList.remove('nav-compact');
        document.querySelector('.navigation__burger-btn').innerHTML = backArrow

        for (let i of document.querySelectorAll('.navigation__btn')) {
            i.classList.add('navigation__btn-maximized');
        }
        isMaxSize = !isMaxSize

    }
    else {
        document.querySelector('.navigation').classList.add('nav-compact');
        document.querySelector('.navigation').classList.remove('nav-maximized');

        for (let i of document.querySelectorAll('.navigation__btn')) {
            i.classList.remove('navigation__btn-maximized');
        }
        document.querySelector('.navigation__burger-btn').innerHTML = upBurger
        isMaxSize = !isMaxSize
    }
})

for (let i of document.querySelectorAll('.navigation__btn')) {
    if (i.getElementsByTagName('a')[0]?.href == location.href) {

        i.classList.add('navigation__btn-current');
    }

}

document.querySelector('.navigation_toggleTheme').addEventListener('click', () => {
    // Получаем элемент :root
    const root = document.querySelector(":root");

    //Получаем свойства стиля в root
    const style = getComputedStyle(root);

    //Получаем значение свойства стиля из root
    const BGcurrentColor = style.getPropertyValue("--background-clr-current");
    const BGalternateColor = style.getPropertyValue("--background-clr-alternate");

    const SFcurrentColor = style.getPropertyValue("--surface-clr-current");
    const SFalternateColor = style.getPropertyValue("--surface-clr-alternate");

    root.style.setProperty("--background-clr-current", BGalternateColor);
    root.style.setProperty("--background-clr-alternate", BGcurrentColor);

    root.style.setProperty("--surface-clr-current", SFalternateColor);
    root.style.setProperty("--surface-clr-alternate", SFcurrentColor);
    
})