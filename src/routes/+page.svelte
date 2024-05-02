<script setup lang="js">
	const currentUTCDate = new Date();
	const istTimeInMilliseconds = currentUTCDate.getTime();

	const istDateTime = new Date(istTimeInMilliseconds);

	const options = {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	};

	const istFormattedDateTime = istDateTime.toLocaleString('en-IN', options);
</script>

<main>
	<div
		class="front-content absolute text-white flex flex-col justify-center items-center h-screen w-screen z-10"
	>
		<h1
			class="font-bold text-[130px] dark:text-[#fff] text-[#000] transition ease-in-out delay-200"
		>
			Hemanth Tenneti
		</h1>
		<p
			class="text-center text-[35px] mt-[-40px] mb-5 dark:text-[#9CCFD8] text-[#5E5744] transition ease-in-out delay-200"
		>
			A passion for programming with an insatiable curiosity<br />
			fuelling my portfolio
		</p>
		<div class="flex items-center gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 256 256"
				class="dark:fill-[#C4A7E7] fill-[#7A7669] transition ease-in-out delay-200"
			>
				<path
					d="M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z"
					opacity="0.2"
				/>
				<path
					d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
				/>
			</svg>
			<p class="text-[25px] dark:text-[#C4A7E7] text-[#7A7669] transition ease-in-out delay-200">
				Hyderabad, India
			</p>
		</div>
	</div>
	<div
		class="absolute m-auto w-screen h-screen flex justify-center items-center transition ease-in-out delay-200"
	>
		<h1
			class="inline-block dark:text-[#1C1A24] text-[#D3CFC1] font-bold text-[150px] lg:text-[600px] transition ease-in-out delay-200"
		>
			{istFormattedDateTime}
		</h1>
	</div>
</main>
