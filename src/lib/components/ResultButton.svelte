<script lang="ts">
	import { sectionsStore, type SectionsWithAnswersType } from '../../stores';

	export let language: 'en' | 'kh';

	let sections: SectionsWithAnswersType;
	$: sections = $sectionsStore;

	let btn_disabled: boolean = true;

	$: for (let i = 0; i < sections.length; i++) {
		if (language === 'kh') {
			if (sections[i].answers_kh) {
				if (sections[i].answers_kh?.find((answer) => answer.length > 0)) {
					btn_disabled = false;
					break;
				} else {
					btn_disabled = true;
				}
			}
		} else {
			if (sections[i].answers) {
				if (sections[i].answers?.find((answer) => answer.length > 0)) {
					btn_disabled = false;
					break;
				} else {
					btn_disabled = true;
				}
			}
		}
	}

	function redirectToResult() {
		if (language === 'kh') {
			window.location.href = encodeURI(`/result?lang=kh`);
		} else {
			window.location.href = '/result';
		}
	}
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
		width: 10rem;
		left: 50%;
		margin-left: -5rem;
		bottom: 3dvh;
		padding: 0.875rem 1rem;
		box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
	}
	@media screen and (max-width: 48em) {
		#btn-result {
			width: 10rem;
		}
	}
</style>
