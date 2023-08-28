<script lang="ts">
	import { onMount } from 'svelte';
	import { sectionsStore } from '../../../stores.js';
	import { page } from '$app/stores';

	export let data;
	let language: string | null;

	onMount(() => {
		language = $page.url.searchParams.get('lang');
	});

	onMount(() => {
		// check localStorage for existing `user_answers`
		if (localStorage.getItem(`user_answers`)) {
			sectionsStore.set(JSON.parse(localStorage.getItem(`user_answers`) ?? ''));
		} else {
			sectionsStore.set(data.sections);
		}
	});
</script>

<main lang={language === 'kh' ? 'km' : 'en'}>
	<slot />
</main>

<style>
	@import '/styles/reset.css';
	@font-face {
		font-family: 'Khmer';
		src: url(/fonts/Khmer-Regular.ttf);
		font-weight: normal;
		font-display: swap;
	}
	main {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial;
		min-height: 200%;
		padding: 1rem;
		overflow-x: visible;
	}
	main[lang='km'] {
		font-family: 'Khmer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica,
			Arial;
	}
</style>
