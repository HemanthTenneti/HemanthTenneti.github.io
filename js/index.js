async function copyDiscord(event) {
    event.preventDefault();
    await navigator.clipboard.writeText("._.ato");
    alert("Discord ID copied!");
    window.open("https://discord.com/users/469076843430150154")
}
const background = document.querySelector('.website');
background.style.backgroundPosition = `calc(50% + -6.5px) calc(50% + -5.5px)`;

document.addEventListener('mousemove', function (e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const offsetX = window.innerWidth / 2 - mouseX;
    const offsetY = window.innerHeight / 2 - mouseY;
    
    background.style.backgroundPosition = `calc(50% + ${offsetX}px) calc(50% + ${offsetY}px)`;
  });

var typed = new Typed('#heading', {
      strings: ['A passion for coding<br> with an insatiable curiosity<br> fuelling my portfolio'],
      typeSpeed: 30,
      showCursor: false
    });