document.addEventListener('DOMContentLoaded', function () {
  var width = window.innerWidth;
// Отримуємо елементи з DOM
function checkWindowSize() {
  const body = document.body;
  const sidebarElement = document.getElementById('sidebar');
  const bodyElement = document.getElementById('container_body');
  // Пошук елементів головного контейнера
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  const chatMessages = document.querySelector('.chat-messages');
  const chatArea = document.getElementById("chat-area")
  const darkThemeButton = document.getElementById("darkThemeButton");
  // Пошук елементів header
  const containerHeaderElement = document.getElementById("container_header")
  const headerElement = document.getElementById("header");
  const openSidebarElement = document.getElementById("openSidebar");
  const buttonElement = document.getElementById("button");
  const logoElement = document.getElementById("letter");

  // Пошук елементів main
  const mainElement = document.getElementById("main");
  const buttonUpElement = document.getElementById("main_button_up");
  const buttonDownElement = document.getElementById("main_button_down");
  const inputContainerElement = document.getElementById("input_container");
  const inputSectionElement = document.getElementById("input_section");

  const chatElement = document.getElementById("chat");
  const prologElement = document.getElementById("prolog");
  const closeButton = document.getElementById('close-button'); // Додайте клас .closeButton до "хрестика" у вашому сайтбарі
  const sidebar = document.querySelector('.sidebar');
  const openSidebarButton = document.getElementById('openSidebar');
  const closeXButton = document.querySelector('.close-button'); // Додайте клас .closeButton до "хрестика" у вашому сайтбарі

  let messageIdCounter = 1; // Лічильник для id
  // Визначаємо активну тему (по замовчуванню світла)
  let isDarkThemeActive = false;

  // Функція для включення світлої теми
  function enableLightTheme() {
      const messageElements = document.getElementsByTagName('p')
      isDarkThemeActive = false;
      body.style.background = 'var(--main-gradient)'

      // ... Ваш код для включення світлої теми
      headerElement.classList.remove("dark-theme");
      headerElement.classList.add("light-theme");

      darkThemeButton.classList.remove("dark-theme-smile");
      darkThemeButton.classList.add("light-theme");

      buttonElement.classList.remove("dark-theme");
      buttonElement.classList.add("light-theme");

      containerHeaderElement.classList.remove("header-shadow--dark");
      containerHeaderElement.classList.add("light-theme");

      logoElement.classList.remove("dark-theme-c");
      logoElement.classList.add("light-theme-c");

      // Включення світлої теми для main
      mainElement.classList.remove("dark-theme");
      mainElement.classList.add("light-theme");

      buttonUpElement.classList.remove("dark-theme-c");
      buttonUpElement.classList.add("light-theme-c");

      buttonDownElement.classList.remove("dark-theme-c");
      buttonDownElement.classList.add("light-theme-c");

      buttonElement.classList.remove("dark-theme-c");
      buttonElement.classList.add("light-theme-c");

      closeButton.classList.remove("dark-theme-c");
      closeButton.classList.add("light-theme-c");

      inputContainerElement.classList.remove("dark-theme-c");
      inputContainerElement.classList.add("light-theme-c");

      chatArea.classList.remove("dark-theme");
      chatArea.classList.add("light-theme");

      chatElement.classList.remove("dark-theme");
      chatElement.classList.add("light-theme");


      for (let i = 0; i < messageElements.length; i++) {
          const messageElement = messageElements[i];
          messageElement.classList.remove("dark-theme-c");
          messageElement.classList.add("light-theme-c");           
      }

      sidebarElement.style.background = 'var(--main-gradient)';
      sidebarElement.style.backgroundSize = '200% 200%';

  };
  // Функція для включення темної теми
  function enableDarkTheme() {
      const messageElements = document.getElementsByTagName('p')
      isDarkThemeActive = true;

      // ... Ваш код для включення темної теми
      body.style.background = 'var(--theme-gradient)'
      headerElement.classList.remove("light-theme");
      headerElement.classList.add("dark-theme");
      
      darkThemeButton.classList.remove("light-theme");
      darkThemeButton.classList.add("dark-theme-smile");

      buttonElement.classList.remove("light-theme");
      buttonElement.classList.add("dark-theme");

      containerHeaderElement.classList.remove("light-theme");
      containerHeaderElement.classList.add("header-shadow--dark");

      logoElement.classList.remove("light-theme-c");
      logoElement.classList.add("dark-theme-c");
      
      // Включення темної теми для main
      mainElement.classList.remove("light-theme");
      mainElement.classList.add("dark-theme");

      buttonUpElement.classList.remove("light-theme-c");
      buttonUpElement.classList.add("dark-theme-c");

      buttonDownElement.classList.remove("light-theme-c");
      buttonDownElement.classList.add("dark-theme-c");

      buttonElement.classList.remove("light-theme-c");
      buttonElement.classList.add("dark-theme-c");

      closeButton.classList.remove("light-theme-c");
      closeButton.classList.add("dark-theme-c");

      inputContainerElement.classList.remove("light-theme-c");
      inputContainerElement.classList.add("dark-theme-c");

      chatArea.classList.remove("light-theme");
      chatArea.classList.add("dark-theme");

      chatElement.classList.remove("light-theme");
      chatElement.classList.add("dark-theme");

      for (let i = 0; i < messageElements.length; i++) {
          const messageElement = messageElements[i];
          messageElement.classList.remove("light-theme-c");
          messageElement.classList.add("dark-theme-c");
      };

      sidebarElement.style.background = 'var(--theme-gradient)';
      sidebarElement.style.backgroundSize = '200% 200%';

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
  // Обробники подій для кнопок
  darkThemeButton.addEventListener("click", ChangeTheme);

  // Обробник для натискання кнопки "Надіслати"

  
    
  sendButton.addEventListener('click', () => {
      const message = messageInput.value;
  
      if (message.trim() !== '') {
        prologElement.classList.add("hidden");
        // Створюємо унікальний id для нового повідомлення
          const messageId = 'message-' + messageIdCounter;
  
          // Додавання повідомлення до відображення чату з встановленням id
          const messageC = document.createElement('div');
          messageC.classList.add("messageC");

          const messageI = document.createElement('img');
          messageI.src = '/img/profile.svg';
          const messageElement = document.createElement('p');
          messageElement.id = messageId; // Присвоюємо унікальний id
          messageI.classList.add("messageI");

          // Визначаємо, який клас застосувати на основі активної теми
          if (isDarkThemeActive) {
              messageElement.classList.add("message-container");
              messageElement.classList.add("dark-theme-c");
          } else {
              messageElement.classList.add("message-container");

          }
  
          messageElement.innerText = message;
          chatMessages.appendChild(messageC);
          messageC.appendChild(messageI);
          messageC.appendChild(messageElement);
          messageElement.classList.add("message-container");
          // Затримка перед додаванням анімації, якщо потрібно

          // Очищення текстового поля вводу
  
          // Збільшуємо лічильник для наступного id
          messageIdCounter++;
          const waitingCont = document.createElement('div');
          chatMessages.appendChild(waitingCont);
          waitingCont.classList.add("wait-cont");

          for (let i = 0; i < 3; i++) {
              const waitingElement = document.createElement('p');
              const waitElementId = 'wait_' + messageIdCounter;
              waitingElement.id = waitElementId;
              waitingCont.appendChild(waitingElement);
              if (isDarkThemeActive) {
                  waitingElement.classList.add("dot");
              } else {
                  waitingElement.classList.add("dot");
  
              }
            }
            const as_messageC = document.createElement('div');
          as_messageC.classList.add("messageC");

          const as_messageI = document.createElement('img');
          as_messageI.src = '/img/icon_archi.svg';
          as_messageI.classList.add("as_messageI");
              const as_messageElement = document.createElement('p');
              const as_messageId = 'as_message-' + messageIdCounter;
              as_messageElement.id = as_messageId; // Присвоюємо унікальний id
              as_messageElement.innerText = "answer";  
  
              if (isDarkThemeActive) {
                  as_messageElement.classList.add("message-container--as");
                  as_messageElement.classList.add("dark-theme-c");
              } else {
                  as_messageElement.classList.add("message-container--as");
              }
              messageInput.value = '';
              chatElement.appendChild(as_messageC);
              as_messageC.appendChild(as_messageElement);
              as_messageC.appendChild(as_messageI);
  
              // Отже, тут ми видаляємо три крапки
              chatMessages.removeChild(waitingCont);

            
  // const sendQuestion = () => {
  //     let question = textareaElement.value;
  //     if (question) {
  //         let message = {
  //             "role": "user",
  //             "content": question
  //         }
  //         conversation.push(message);
  //         let params = {
  //             "model": "gpt-3.5-turbo",
  //             "messages": conversation
  //         };
  //         axios.post('https://api.openai.com/v1/chat/completions', params, {
  //             headers: {
  //                 Authorization: `Bearer ${apiKey}`
  //             }
  //         })
  //         .then(response => {
  //             const answer = response.data.choices[0].message.content;
  //             const as_messageElement = document.createElement('p');
  //             const as_messageId = 'as_message-' + messageIdCounter;
  //             as_messageElement.id = as_messageId; // Присвоюємо унікальний id
  //             as_messageElement.innerText = answer;  
  
  //             if (isDarkThemeActive) {
  //                 as_messageElement.classList.add("message-container--as");
  //                 as_messageElement.classList.add("dark-theme");
  //                 as_messageElement.classList.add("dark_border");
  //             } else {
  //                 as_messageElement.classList.add("message-container--as");
  //                 as_messageElement.classList.add("light-theme-b");
  //                 as_messageElement.classList.add("light_border");
  //             }
  //             messageInput.value = '';
  
  //             chatElement.appendChild(as_messageElement);
  
  //             // Отже, тут ми видаляємо три крапки
  //             chatMessages.removeChild(waitingCont);
  //         });
  //     }
  // }   
          
  
// Три крапки

// Після виклику функції setTimeout, яка виконує sendQuestion через 3 секунди
setTimeout(sendQuestion, 3000);
// Затримка 30 секунд
}
}); 
let apiKey = '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';
let conversation = [];

// Функции


// тттттттттттттттт
  const chatContainer = document.querySelector('.chat-area');

  messageInput.addEventListener('input', () => {
      const newMessageHeight = chatMessages.clientHeight + messageInput.scrollHeight;
      const maxHeight = parseInt(getComputedStyle(chatContainer).maxHeight);

      if (newMessageHeight > maxHeight) {
          chatContainer.style.height = newMessageHeight + 'px';
      }
  });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth' // Плавна анімація прокрутки
          });
        }
      });
    });


    // Функція для відкриття бару
    function openSidebar() {
      if (width < 768) {
        sidebar.style.left = '0';
        sidebar.style.width = width + 'px'
        inputContainerElement.style.transition = 'margin-left 3s ease';
        closeXButton.style.display = 'inline'
      } else {
      sidebar.style.left = '0';
      sidebar.style.boxShadow = '10px 1px 7px 0px rgba(0, 0, 0, 0.25)';
      bodyElement.style.marginLeft ='27%';
      openSidebarElement.style.display = 'none';
      buttonDownElement.style.display = 'none';
      buttonUpElement.style.display = 'none';
      inputContainerElement.style.transition = 'margin-left 3s ease';
      inputSectionElement.style.marginLeft = '3%';
      inputSectionElement.style.width = '70%'

      buttonElement.style.display = 'none'
      closeButton.style.display = 'inline'
      }
      

    }

    // Функція для закриття бару
    function closeSidebar() {
      if (width < 768) {
        sidebar.style.left = '';
        sidebar.style.width = '30%'
        bodyElement.style.marginLeft ='';
        inputContainerElement.style.transition = 'margin-left 3s ease';
        closeXButton.style.display = 'none'
      }else{
        sidebar.style.left = '-30%';      
        sidebar.style.boxShadow = '';
        bodyElement.style.marginLeft ='0';
        openSidebarElement.style.display = '';
        buttonDownElement.style.display = ''
        buttonUpElement.style.display = ''
        inputContainerElement.style.transition = 'margin-left 3s ease';
        inputSectionElement.style.marginLeft = ''
        inputSectionElement.style.width = '100%'

        buttonElement.style.display = 'inline'
        closeButton.style.display = 'none'
      }
      
    }

    // Обробник події для кнопки відкриття бару
    openSidebarButton.addEventListener('click', openSidebar);

    // Обробник події для закриття бару при кліку на "хрестик"
    closeButton.addEventListener('click', closeSidebar);
    closeXButton.addEventListener('click', closeSidebar);


    // Запобігаємо закриттю бару при натисканні на інші елементи документу
    document.addEventListener('click', function (event) {
        if (event.target !== sidebar && event.target !== openSidebarButton && event.target !== closeButton) {
            // Якщо клік був за межами сайтбару, і не було натиснуто на "хрестик", не закриваємо бар
        }
  });

  if(width < 768){
    buttonUpElement.style.display ='none'
    buttonDownElement.style.display ='none'

  }
    
    
    
  }
  
  // Викликати функцію при завантаженні сторінки та при зміні розміру вікна
  window.addEventListener('load', checkWindowSize);
  window.addEventListener('resize', checkWindowSize);
});
