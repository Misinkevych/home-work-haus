let burger = document.querySelector(".burger");
let menu = document.querySelector(".site-navigation");

burger.onclick = () => {
    menu.classList.toggle("show_menu")
    burger.classList.toggle("burger_close_button")

}
