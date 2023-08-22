<script>
	export let item;
	export let language;

	import CloseLine from '$lib/icons/close-line.svelte';

	function closeDialog() {
		document.getElementById(item.id).close();
	}
</script>

<dialog
	id={item.id}
	class="section-dialog"
	aria-label={language === 'kh' ? item.title_kh : item.title}
>
	<section class="section-dialog__top">
		<h2>
			{#if language === 'kh'}
				{item.title_kh}
			{:else}
				{item.title}
			{/if}
		</h2>
		<button on:click={closeDialog} aria-label="Close dialog" class="btn-close">
			<CloseLine />
		</button>
	</section>
	<section class="section-dialog__body">
		<form>
			<div class="inputs-container">
				{#if language === 'en'}
					{#each item.questions as question, index}
						<label for={`question-${index + 1}`}>{question}</label>
						<textarea id={`question-${index + 1}`} type="text" />
					{/each}
				{/if}
				{#if language === 'kh'}
					{#if item.questions_kh && item.questions_kh.length > 0}
						{#each item.questions_kh as question_kh, index}
							<label for={`question-kh-${index + 1}`}>{question_kh}</label>
							<textarea id={`question-kh-${index + 1}`} type="text" />
						{/each}
					{/if}
				{/if}
			</div>
			<button id="confirmBtn" value="default" class="btn_main">
				{#if language === 'kh'}
					រួចរាល់
				{:else}
					Done
				{/if}
			</button>
		</form>
	</section>
</dialog>

<style>
	.section-dialog {
		border: none;
		border-radius: 1rem;
		box-shadow: 0 0.325rem 0.5rem rgba(0, 0, 0, 0.175);
		padding: 1.5rem;
		width: calc(var(--content_max_width) - calc(var(--content_padding_horizontal) * 3.25));
		max-width: var(--content_max_width);
		margin-top: 5rem;
	}
	@media screen and (max-width: 40em) {
		.section-dialog {
			padding: 1rem;
		}
	}
	.section-dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.25);
	}
	.section-dialog__top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.section-dialog__top h2 {
		margin-top: 0;
	}
	.btn-close {
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		outline: none;
		border: none;
		width: calc(var(--type_scale_6) * 1.75);
		height: calc(var(--type_scale_6) * 1.75);
		padding: 0.5rem;
		cursor: pointer;
		border-radius: 100vmax;
		transform: translateX(1rem) translateY(-1rem);
	}
	@media screen and (max-width: 40em) {
		.btn-close {
			transform: translateX(0.5rem) translateY(-0.5rem);
		}
	}
	.btn-close:hover,
	.btn-close:focus {
		background-color: rgba(0, 0, 0, 0.075);
	}

	.section-dialog__body {
		margin-top: 1rem;
	}
	.section-dialog__body .inputs-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 1.5rem;
	}
	.section-dialog__body .inputs-container label {
		color: var(--clr_grey_shade_a);
	}
	.section-dialog__body .inputs-container textarea {
		resize: vertical;
		margin: 0.5rem 0 1rem 0;
		padding: 0.5rem;
		min-width: min(32em, calc(100% - 1rem));
		min-height: 5em;
		outline: none;
		font-size: 1rem;
		border-radius: 0.5rem;
		border: 1px solid var(--clr_grey_shade_d);
	}
</style>
