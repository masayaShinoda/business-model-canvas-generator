<script>
	export let language;
</script>

{#if language === 'kh'}
	<button disabled id="btn-result" class="btn_main btn_main__inactive">បង្ហាញលទ្ធផល</button>
{:else}
	<button disabled id="btn-result-kh" class="btn_main btn_main__inactive">Show result</button>
{/if}

<style>
	#btn-result {
		position: sticky;
		top: 5dvh;
	}
	@media screen and (max-width: 40em) {
		#btn-result {
			position: fixed;
			bottom: 5dvh;
			max-width: 92%;
			margin: 0 auto;
		}
	}
</style>
