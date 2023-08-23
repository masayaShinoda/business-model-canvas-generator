<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		// check localStorage for theme preference
		const stored_theme = localStorage.getItem('preferred-theme');

		function set_theme(theme: string) {
			document.body.dataset.theme = theme;
			localStorage.setItem('preferred-theme', theme);
		}

		if (stored_theme) {
			if (stored_theme === 'dark') {
				set_theme('dark');
			} else {
				set_theme('light');
			}
		} else {
			// no localStorage preference
			const prefers_dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (prefers_dark) {
				set_theme('dark');
			} else {
				set_theme('light');
			}
		}
	});
</script>

<Navbar />
<slot />
<Footer />

<style>
	@import '/styles/global.css';
	@import '/styles/components.css';
</style>
