async function copyDiscord(event) {
    event.preventDefault();
    await navigator.clipboard.writeText("._.ato");
    alert("Discord ID copied");
    window.open("https://discord.com/channels/@me")
}