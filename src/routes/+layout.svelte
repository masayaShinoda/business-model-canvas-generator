<script>
	import { onMount } from 'svelte';
	import { themeStore, sectionsStore } from '../stores';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;

	onMount(() => {
		function set_theme(theme) {
			localStorage.setItem('preferred-theme', theme);
			themeStore.set(theme);
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

		// check localStorage for exiting `user_answers`
		if (localStorage.getItem(`user_answers`)) {
			sectionsStore.set(JSON.parse(localStorage.getItem(`user_answers`)))
		} else {
			sectionsStore.set(data.sections);
		}
		// sectionsStore.set(data.sections);
	});
</script>

<Navbar />
<slot />
<Footer />

<style>
	@import '/styles/global.css';
	@import '/styles/components.css';
</style>
