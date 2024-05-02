<script>
	import Navbar from '../lib/navbar.svelte';
	import Footer from '../lib/footer.svelte';
	import '../app.css';
</script>

<div class="dark:bg-[#1F1D27] h-screen w-screen bg-[#EEEBE2] transition ease-in-out delay-200">
	<div class="bg-[url('/background.svg')] animate-unblur h-screen w-screen flex">
		<Navbar />
		<slot />
		<Footer />
	</div>
</div>
