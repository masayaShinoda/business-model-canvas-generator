<script lang="ts">
	import { onMount } from 'svelte';
	import { sectionsStore } from '../../../stores.js';

	export let data;

	onMount(() => {
		// check localStorage for exiting `user_answers`
		if (localStorage.getItem(`user_answers`)) {
			sectionsStore.set(JSON.parse(localStorage.getItem(`user_answers`) ?? ''));
		} else {
			sectionsStore.set(data.sections);
		}
	});
</script>

<main>
    <slot />
</main>

<style>
	@import '/styles/reset.css';
	main {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial;
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

</style>
