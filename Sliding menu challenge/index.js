function toggleMenu(element) {
    let menu = document.getElementById(element.dataset.target);
    if(menu.classList.contains("menu-on")){
        menu.classList.remove("menu-on");
        element.classList.remove("cross");
    }else{
        menu.classList.add("menu-on");
        element.classList.add("cross");
    }
}