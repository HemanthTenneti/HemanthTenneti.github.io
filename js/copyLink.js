async function copyDiscord(event) {
	event.preventDefault();
	await navigator.clipboard.writeText('atowithahatto');
	alert('Copied Discord ID - atowithahatto');
	window.open('https://discord.com/users/406133264391208962');
}
