document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.drop_menu');
    const closeBtn = document.querySelector('#close');

    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        toggleBtnIcon.className = isOpen
            ? 'fas fa-times'
            : 'fas fa-bars';
    };

    closeBtn.onclick = function () {
        dropDownMenu.classList.remove('open');
        toggleBtnIcon.className = 'fas fa-bars';
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const firstView = document.getElementById('first_view');

    const adjustPadding = () => {
        const headerHeight = header.offsetHeight;
        firstView.style.paddingTop = `${headerHeight}px`;
    };

    // Adjust padding on page load
    adjustPadding();

    // Adjust padding on window resize
    window.addEventListener('resize', adjustPadding);
});
