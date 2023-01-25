const burgerbtn = document.querySelector(".burger__btn");
const menyubar = document.querySelector(".menyu__bar");
const close = document.querySelector(".header__close");

burgerbtn.addEventListener("click",()=> {
    menyubar.classList.toggle("menyu__togle")
    console.log("Salom");

})
close.addEventListener("click",()=> {
    menyubar.classList.toggle("menyu__togle")
})