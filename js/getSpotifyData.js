let song;

fetch('https://api.lanyard.rest/v1/users/469076843430150154', {
	method: 'GET',
	headers: {
		Accept: 'application/json',
	},
})
	.then((response) => response.json())
	.then((response) => {
		if (response.data.listening_to_spotify) {
			let songDisplay = `<img src="img/MusicNote.svg" id="MusicNote"> <span id='listenText'>${
				response.data.spotify.song
			} - ${response.data.spotify.artist.replace(';', ',')}</span>`;
			console.log('im sliotenging [for debuggers: I am listen to music]');
			document.getElementById('spotifyText').innerHTML = songDisplay;
		} else {
			console.log(
				'i mnot sliten [for debuggers: I am not listening to any music]'
			);
		}
	});
