<script lang="ts">
	import { onMount } from 'svelte';
	import { sectionsStore, type SectionsWithAnswersType } from '../../stores';

	let sections: SectionsWithAnswersType;
	$: sections = $sectionsStore;

	let btn_disabled: boolean = true;

	$: for (let i = 0; i < sections.length; i++) {
		if (sections[i].answers) {
			if (sections[i].answers?.find((answer) => answer.length > 0)) {
				btn_disabled = false;
				break;
			}
		}
	}

	function redirectToResult() {
		window.location.pathname = "/result"
	}

	export let language: 'en' | 'kh';
</script>

<button
	disabled={btn_disabled}
	id="btn-result"
	class={`btn_main ${btn_disabled ? 'btn_main__inactive' : ''}`}
	on:click={redirectToResult}
>
	{#if language === 'kh'}
		បង្ហាញលទ្ធផល
	{:else}
		Show result
	{/if}
</button>

<style>
	#btn-result {
		position: fixed;
		left: 2rem;
		bottom: 2.5rem;
		padding: 0.875rem 1rem;
		box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
	}
	@media screen and (max-width: 48em) {
		#btn-result {
			/* position: sticky;
			bottom: 5dvh;
			margin: 0 auto; */
			left: var(--content_padding_horizontal);
			width: fit-content;
			max-width: fit-content;
		}
	}
</style>
