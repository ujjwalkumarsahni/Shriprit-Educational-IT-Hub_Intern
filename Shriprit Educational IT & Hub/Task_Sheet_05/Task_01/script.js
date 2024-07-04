var header = document.querySelector('.header');
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.open-icon');
var closeicon = document.querySelector('.close-icon');

menuBtn.addEventListener('click', () => {
    header.classList.toggle('opened');
    menu.classList.add('open-menu')
})

closeicon.addEventListener('click', () =>{
  header.classList.toggle('opened');
  menu.classList.remove('open-menu')
})



const text = document.querySelector(".sec-text");
        const textLoad = () =>{
          setTimeout(() =>{
            text.textContent = "FrontEnd Developer";
          }, 0);
          setTimeout(() =>{
            text.textContent = "Java Developer";
          }, 6000);
          setTimeout(() =>{
            text.textContent = "Software Engineer";
          }, 12000);
        }
        textLoad();
        setInterval(textLoad,18000);