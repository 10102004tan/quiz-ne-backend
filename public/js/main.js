const btnOut = document.querySelector('.btn-out');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const navItems = document.querySelectorAll('.nav__item');
const sidebarTop = document.querySelector('.sidebar-top');
const contact = document.querySelector('.contact');
const rulesText = document.querySelector('.rules__text');
const rulesIcon = document.querySelector('.rules__icon');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.sidebar__logo');
const btnSidebarLeft = document.querySelector('.fa-chevron-left');
const btnSidebarRight = document.querySelector('.fa-chevron-right');
const eventClickLeft = document.querySelector('.event-click-left');
const eventClickRight = document.querySelector('.event-click-right');
const eventImages = document.querySelectorAll('.event__image img');
const btnSort = document.querySelector('.sort__btn');
const boxSort = document.querySelector('.sort__select');
const quesionList = document.querySelectorAll(".question__item");
const questionBoxDetails = document.querySelector('.question-box__details');
const quesionBox = document.querySelector('.question-box');
btnOut.addEventListener("click", function () {
    //dung chung
    sidebar.classList.toggle("sidebar-min");
    sidebar.classList.toggle("sidebar-default");
    mainContent.classList.toggle("main-content-min");
    mainContent.classList.toggle("main-content-default");
    nav.classList.toggle("nav-small");
    contact.classList.toggle("d-none");
    rulesText.classList.toggle("d-none");
    rulesIcon.classList.toggle("d-block");
    logo.classList.toggle("d-none");
    btnSidebarLeft.classList.toggle("d-none");
    btnSidebarRight.classList.toggle("d-none");

});

quesionBox.addEventListener("click" , function(){
    quesionBox.classList.toggle("d-none");
});

questionBoxDetails.addEventListener("click", (event) =>{
    event.stopPropagation();

})
quesionList.forEach(element => {
    element.addEventListener("click" , function(){
        quesionBox.classList.toggle("d-none");
    })
});






const imageIds = [1, 2, 3, 4, 5,7, 8, 9, 10, 11, 12,14,15,16,17,19,20];
let currentIndex = 3; // Vị trí hiện tại của ảnh đang hiển thị
let isClickEnabledRight = true;
let isClickEnabledLeft= false;
eventClickRight.addEventListener('click', function () {

    if (!isClickEnabledRight)
    {
        return;
    }
    isClickEnabledLeft = true;
    for (let i = 0 ; i < 3 ; i++){
        eventImages[i].setAttribute("src", `public/image/image-${imageIds[currentIndex]}.jpeg`);
        currentIndex++;
        if (currentIndex > imageIds.length)
        {
            isClickEnabledRight = false;
            currentIndex--;
        }
    }
});

eventClickLeft.addEventListener('click', function () {
    if (!isClickEnabledLeft)
    {
        return;
    }
    for (let i = 0 ; i < 3 ; i++){
        eventImages[i].setAttribute("src", `public/image/image-${imageIds[currentIndex]}.jpeg`);
        currentIndex--;
        if (currentIndex < 1)
        {
            isClickEnabledLeft = false;
            currentIndex = 1;
            
        }
    }
    
});


//sort
let status = false;
btnSort.addEventListener("click", function() {

    if (!status){
        boxSort.style.display = "block";
        status = true;
    }
    else{
        boxSort.style.display = "none";
        status = false;
    }
    
    
})






