const background = document.querySelector('.website');
background.style.backgroundPosition = `calc(50% + -6.5px) calc(50% + -5.5px)`;

document.addEventListener('mousemove', function (e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const offsetX = window.innerWidth / 2 - mouseX;
    const offsetY = window.innerHeight / 2 - mouseY;

    background.style.backgroundPosition = `calc(50% + ${offsetX}px) calc(50% + ${offsetY}px)`;
});
