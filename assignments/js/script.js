const toggleBtn = document.getElementById("toggle-button")
const navListIreams = document.getElementById("nav-menu-list")
console.log("Howdy!");

toggleBtn.addEventListener('click', () => {
    navListItems.classList.toggle('active');
});