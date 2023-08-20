<script>
	import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />
<main>
	<slot />
</main>
<Footer />

<style>
	@import '/styles/global.css';
	main {
        max-width: var(--content_max_width);
		margin: 2.5rem auto;
        padding: 0 var(--content_padding_horizontal);
	}
</style>
