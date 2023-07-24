async function copyDiscord(event) {
    event.preventDefault();
    await navigator.clipboard.writeText("._.ato");
    alert("Discord ID copied!");
    window.open("https://discord.com/users/469076843430150154")
}

document.addEventListener('mousemove', function (e) {
    const background = document.querySelector('.website');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const offsetX = window.innerWidth / 2 - mouseX;
    const offsetY = window.innerHeight / 2 - mouseY;
  
    background.style.backgroundPosition = `calc(50% + ${offsetX}px) calc(50% + ${offsetY}px)`;
  });
  