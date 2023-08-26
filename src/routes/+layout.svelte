<script>
	import { onMount } from 'svelte';
	import { themeStore } from '../stores';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		function set_theme(theme) {
			localStorage.setItem('preferred-theme', theme);
			themeStore.update(() => theme);
			document.body.dataset.theme = theme;
		}

		// check localStorage for theme preference
		const stored_theme = localStorage.getItem('preferred-theme');

		// set theme on mount
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

		themeStore.subscribe((value) => {
			set_theme(value);
		});
	});
</script>

<Navbar />
<slot />
<Footer />

<style>
	@import '/styles/global.css';
	@import '/styles/components.css';
</style>
