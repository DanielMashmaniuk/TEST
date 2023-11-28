document.addEventListener('DOMContentLoaded', function () {
    // Отримуємо елементи з DOM
    const body = document.body;
    const darkThemeButton = document.getElementById("darkThemeButton"); 
    const headerElement = document.getElementById("header");
    const letterElement = document.getElementById("letter");
    const aboutUsContainerButton = document.getElementById("about_container"); 
    const Button = document.getElementById("button"); 


    let isDarkThemeActive = false;
    let messageIdCounter = 1; // Лічильник для id
    // Визначаємо активну тему (по замовчуванню світла)
    function enableLightTheme() {
        isDarkThemeActive = false;

        aboutUsContainerButton.classList.remove("dark-theme");
        aboutUsContainerButton.classList.add("light-theme");

        headerElement.classList.remove("dark-theme");
        headerElement.classList.add("light-theme");

        letterElement.classList.remove("dark-theme-c");
        letterElement.classList.add("light-theme-c");

        Button.classList.remove("dark-theme-c");
        Button.classList.add("light-theme-c");

        for (let i = 1; i < 7; i++) {
            let aboutElement = document.getElementById(i)
            aboutElement.classList.remove("adark-theme-c");
            aboutElement.classList.add("light-theme-c");   
        }

    };
    function enableDarkTheme() {
        isDarkThemeActive = true;

        aboutUsContainerButton.classList.remove("light-theme");
        aboutUsContainerButton.classList.add("dark-theme");

        headerElement.classList.remove("light-theme");
        headerElement.classList.add("dark-theme");
        
        letterElement.classList.remove("light-theme-c");
        letterElement.classList.add("dark-theme-c");

        Button.classList.remove("light-theme-c");
        Button.classList.add("dark-theme-c");

        for (let i = 1; i < 7; i++) {
            let aboutElement = document.getElementById(i)
            aboutElement.classList.remove("light-theme-c");
            aboutElement.classList.add("dark-theme-c");  


        }

    };
    function ChangeTheme(){
        if(isDarkThemeActive){
          enableLightTheme()
          darkThemeButton.classList.remove("active")
    
        }
        else{
          darkThemeButton.classList.add("active")
          enableDarkTheme()
        }
      }
      darkThemeButton.addEventListener("click", ChangeTheme);

});