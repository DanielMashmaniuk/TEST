document.addEventListener('DOMContentLoaded', function () {
    // Отримуємо елементи з DOM
    const body = document.body;
    const lightThemeButton = document.getElementById("lightThemeButton");
    const darkThemeButtonIcon = document.getElementById("darkThemeButtonIcon"); 
    const darkThemeButton = document.getElementById("darkThemeButton"); 
    const headerElement = document.getElementById("header");
    const letterElement = document.getElementById("letter");
    const aboutUsContainerButton = document.getElementById("about_container"); 


    let messageIdCounter = 1; // Лічильник для id
    // Визначаємо активну тему (по замовчуванню світла)
    function enableLightTheme() {

        aboutUsContainerButton.classList.remove("dark-theme");
        aboutUsContainerButton.classList.add("light-theme");

        headerElement.classList.remove("dark-theme");
        headerElement.classList.add("light-theme");

        for (let i = 1; i < 7; i++) {
            let aboutElement = document.getElementById(i)
            aboutElement.classList.remove("adark-theme-c");
            aboutElement.classList.add("light-theme-c");   
        }


        lightThemeButton.classList.remove("dark-theme");
        lightThemeButton.classList.add("light-theme");

        darkThemeButton.classList.remove("dark-theme-smile");
        darkThemeButton.classList.add("light-theme");
        darkThemeButtonIcon.classList.remove("dark-theme-smile");



    };
    function enableDarkTheme() {

        aboutUsContainerButton.classList.remove("light-theme");
        aboutUsContainerButton.classList.add("dark-theme");

        headerElement.classList.remove("light-theme");
        headerElement.classList.add("dark-theme");

        for (let i = 1; i < 7; i++) {
            let aboutElement = document.getElementById(i)
            aboutElement.classList.remove("light-theme-c");
            aboutElement.classList.add("dark-theme-c");  


        }

        lightThemeButton.classList.remove("light-theme");
        lightThemeButton.classList.add("dark-theme");

        darkThemeButton.classList.remove("light-theme");
        darkThemeButton.classList.add("dark-theme-smile");
        darkThemeButtonIcon.classList.add("dark-theme-smile");



    };
    lightThemeButton.addEventListener("click", enableLightTheme);
    darkThemeButton.addEventListener("click", enableDarkTheme);
});