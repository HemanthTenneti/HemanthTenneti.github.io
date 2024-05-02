<script>
	import { browser } from '$app/environment';
	let song = 'Not Listening';
	async function getSong() {
		try {
			const response = await fetch('https://api.lanyard.rest/v1/users/406133264391208962', {
				method: 'GET',
				headers: {
					Accept: 'application/json'
				}
			});

			const info = await response.json();

			if (info.data.spotify == null) {
				song = 'Not Listening';
			} else {
				song = info.data.spotify.song + ' - ' + info.data.spotify.artist.replace(';', ',');
			}
			return song;
		} catch (error) {
			console.error('Error:\n', error);
		}
	}
	getSong();

	//implementing dark and light mode switch
    	let darkModeStorage = 'darkMode'; // Define a key for localStorage
    	if (localStorage.getItem(darkModeStorage) == null) {
        	localStorage.setItem(darkModeStorage, 'true'); // Store strings in localStorage
    	}
    	let darkMode = localStorage.getItem(darkModeStorage) === 'true'; // Convert string to boolean

    	function handleSwitchDarkMode() {
        	darkMode = !darkMode;
        	darkMode
            		? document.documentElement.classList.add('dark')
            		: document.documentElement.classList.remove('dark');

        	localStorage.setItem(darkModeStorage, darkMode.toString()); // Convert boolean to string before storing
    	}

    if (browser) {
        console.log(darkMode);
        if (window.matchMedia('(prefers-color-scheme: dark)').matches && darkMode == true) {
            document.documentElement.classList.add('dark');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches && darkMode == false) {
            document.documentElement.classList.remove('dark');
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches && darkMode == true) {
            document.documentElement.classList.add('dark');
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches && darkMode == false) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }
}
</script>

<main>
	<footer class="p-5 flex justify-between text-white absolute z-20 w-screen bottom-0">
		<p
			class="flex items-center gap-3 dark:text-[#9CCFD8] text-black transition ease-in-out delay-200"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				class="dark:fill-[#C4A7E7] fill-[#5E5744] transition ease-in-out delay-200"
				viewBox="0 0 256 256"
			>
				<path d="M208,96v64H48V96Z" opacity="0.2" />
				<path
					d="M56,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM88,24a8,8,0,0,0-8,8V224a8,8,0,0,0,16,0V32A8,8,0,0,0,88,24Zm40,32a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V64A8,8,0,0,0,128,56Zm40,32a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8,8,0,0,0,168,88Zm40-16a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V80A8,8,0,0,0,208,72Z"
				/>
			</svg>
			{song}
		</p>

		<button class="ml-5" on:click={handleSwitchDarkMode}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 256 256"
				class={`${darkMode ? '' : 'hidden'} dark:fill-[#C4A7E7] transition ease-in-out delay-200`}
			>
				<path d="M192,144a64.33,64.33,0,0,1-2,16H66a64,64,0,1,1,126-16Z" opacity="0.2" />
				<path
					d="M240,152H199.55a73.54,73.54,0,0,0,.45-8,72,72,0,0,0-144,0,73.54,73.54,0,0,0,.45,8H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,144a56,56,0,1,1,111.41,8H72.59A56.13,56.13,0,0,1,72,144Zm144,56a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H208A8,8,0,0,1,216,200ZM72.84,43.58a8,8,0,0,1,14.32-7.16l8,16a8,8,0,0,1-14.32,7.16Zm-56,48.84a8,8,0,0,1,10.74-3.57l16,8a8,8,0,0,1-7.16,14.31l-16-8A8,8,0,0,1,16.84,92.42Zm192,15.16a8,8,0,0,1,3.58-10.73l16-8a8,8,0,1,1,7.16,14.31l-16,8a8,8,0,0,1-10.74-3.58Zm-48-55.16,8-16a8,8,0,0,1,14.32,7.16l-8,16a8,8,0,1,1-14.32-7.16Z"
				/>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="#000000"
				viewBox="0 0 256 256"
				class={`${darkMode ? 'hidden' : ''} transition ease-in-out delay-200`}
			>
				<path
					d="M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z"
					opacity="0.2"
				/>
				<path
					d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"
				/>
			</svg>
		</button>
	</footer>
</main>
