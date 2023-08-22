<script>
	export let language;
</script>

{#if language === 'kh'}
	<button disabled id="btn-result" class="btn_main btn_main__inactive">បង្ហាញលទ្ធផល</button>
{:else}
	<button disabled id="btn-result-kh" class="btn_main btn_main__inactive">Show result</button>
{/if}

<style>
	#btn-result,
	#btn-result-kh {
		position: fixed;
		left: 2rem;
		bottom: 2.5rem;
		padding: 0.875rem 1rem;
		box-shadow: 0 .25rem .75rem rgba(0,0,0,.25);
	}
	@media screen and (max-width: 40em) {
		#btn-result,
		#btn-result-kh {
			position: fixed;
			bottom: 5dvh;
			max-width: 92%;
			margin: 0 auto;
		}
	}
</style>
