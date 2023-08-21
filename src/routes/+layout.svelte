<script>
	import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />
	<slot />
<Footer />

<style>
	@import '/styles/global.css';
</style>
