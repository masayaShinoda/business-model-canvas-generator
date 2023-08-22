<script>
	export let item;
	export let language;

	import CloseLine from '$lib/icons/close-line.svelte';

	function onClose() {
		const dialog =
			language === 'kh'
				? document.getElementById(`dialog-${item.id}-kh`)
				: document.getElementById(`dialog-${item.id}`);

		const submit_btn = document.getElementById('btn-submit');

		// const output_box = document.querySelector(`[data-output-id="${item.id}"]`);

		// return value is `cancel` if user clicks X button, `default` if clicks submit button
		if (dialog.returnValue === 'default') {
			// bind values from the textarea elements to the submit buton
			const textareas = Array.from(dialog.querySelector('form').querySelectorAll('textarea'));
			const textarea_values = textareas.map((textarea) => {
				return {
					question: textarea.name,
					answer: textarea.value
				};
			});

			submit_btn.value = JSON.stringify(textarea_values);
		}
	}
</script>

<dialog
	id={language === 'kh' ? `dialog-${item.id}-kh` : `dialog-${item.id}`}
	class="section-dialog"
	aria-label={language === 'kh' ? item.title_kh : item.title}
	on:close={onClose}
>
	<form id={language === 'kh' ? `form-${item.id}-kh` : `form-${item.id}`} method="dialog">
		<section class="section-dialog__top">
			<h2>
				{#if language === 'kh'}
					{item.title_kh}
				{:else}
					{item.title}
				{/if}
			</h2>
			<button type="submit" value="cancel" aria-label="Close dialog" class="btn-close">
				<CloseLine />
			</button>
		</section>
		<section class="section-dialog__body">
			<div class="inputs-container">
				{#if language === 'en'}
					{#each item.questions as question, index}
						<label for={`item-${item.id}-question-${index + 1}`}>{question}</label>
						<textarea
							id={`item-${item.id}-question-${index + 1}`}
							name={question}
							form={`form-${item.id}`}
						/>
					{/each}
				{/if}
				{#if language === 'kh'}
					{#if item.questions_kh && item.questions_kh.length > 0}
						{#each item.questions_kh as question_kh, index}
							<label for={`item-${item.id}-question-${index + 1}-kh`}>{question_kh}</label>
							<textarea
								id={`item-${item.id}-question-${index + 1}-kh`}
								name={question_kh}
								form={`form-${item.id}-kh`}
							/>
						{/each}
					{/if}
				{/if}
			</div>
			<button id="btn-submit" type="submit" value="default" class="btn_main">
				{#if language === 'kh'}
					រួចរាល់
				{:else}
					Done
				{/if}
			</button>
		</section>
	</form>
</dialog>

<style>
	.section-dialog {
		border: none;
		border-radius: 1rem;
		box-shadow: 0 0.325rem 0.5rem rgba(0, 0, 0, 0.175);
		padding: 1.5rem;
		width: calc(var(--content_max_width) - calc(var(--content_padding_horizontal) * 6.5));
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
		min-width: min(37.5rem, calc(100% - 1rem));
		min-height: 5rem;
		outline: none;
		font-size: 1rem;
		border-radius: 0.5rem;
		border: 1px solid var(--clr_grey_shade_d);
	}
</style>
