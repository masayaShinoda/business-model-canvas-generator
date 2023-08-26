<script>
	import { sectionsStore } from '../../stores';

	export let language;
	export let item_id;

	$: sections = $sectionsStore;
	$: item = $sectionsStore.find((section) => section.id === item_id);

	function onClose() {
		const dialog =
			language === 'kh'
				? document.getElementById(`dialog-${item.id}-kh`)
				: document.getElementById(`dialog-${item.id}`);

		// return value is `cancel` if user clicks X button, `default` if clicks submit button
		if (dialog.returnValue === 'default') {
			// bind values from the textarea elements to the submit buton
			const textareas = Array.from(dialog.querySelector('form').querySelectorAll('textarea'));
			const textarea_values = textareas.map((textarea) => textarea.value);

			if(language === 'kh') {
				sections.find((section) => section.id === item.id).answers_kh = textarea_values;
			} else {
				sections.find((section) => section.id === item.id).answers = textarea_values;
			}

			sectionsStore.set(sections);
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
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
					><path
						d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
					/></svg
				>
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
		</section>
		<section class="section-dialog__bottom">
			<button id={`btn-submit-${item.id}`} type="submit" value="default" class="btn_main">
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
		background: none;
		border: none;
		border-radius: 1rem;
		box-shadow: 0 0.325rem 0.5rem rgba(0, 0, 0, 0.175);
		width: calc(var(--content_max_width) - calc(var(--content_padding_horizontal) * 10));
		max-width: var(--content_max_width);
		margin-top: 5dvh;
		max-height: 85dvh;
		padding: 0;
		overflow: hidden;
	}
	@media screen and (max-width: 64em) {
		.section-dialog {
			width: 80vw;
		}
	}
	@media screen and (max-width: 48em) {
		.section-dialog {
			width: 90vw;
		}
	}
	.section-dialog form {
		background-color: #fff;
		padding: 1.5rem;
	}
	@media screen and (max-width: 40em) {
		.section-dialog form {
			padding: 1rem;
		}
	}

	[data-theme='dark'] .section-dialog form {
		background-color: var(--clr_dark_shade_a);
	}

	.section-dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.5);
	}
	.section-dialog__top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid var(--clr_grey_shade_d);
	}
	[data-theme='dark'] .section-dialog .section-dialog__top {
		background-color: var(--clr_dark_shade_a);
		border-bottom-color: var(--clr_grey_shade_a);
	}
	.section-dialog__top h2 {
		margin-top: 0;
	}
	[data-theme='dark'] .section-dialog__top h2 {
		color: #fff;
	}

	.section-dialog .btn-close {
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
	[data-theme='dark'] .section-dialog .btn-close svg {
		fill: #fff;
	}
	@media screen and (max-width: 40em) {
		.section-dialog .btn-close {
			transform: translateX(0.5rem) translateY(-0.5rem);
		}
	}
	.section-dialog .btn-close:hover {
		background-color: rgba(0, 0, 0, 0.075);
	}
	[data-theme='dark'] .section-dialog .btn-close:hover {
		background-color: rgba(255, 255, 255, 0.075);
	}
	.section-dialog .btn-close:focus-visible {
		outline: 1px solid var(--clr_grey_shade_c);
	}
	[data-theme='dark'] .section-dialog .btn-close:focus-visible {
		outline: 1px solid var(--clr_grey_shade_b);
	}

	.section-dialog__body {
		overflow-y: auto;
		height: 65dvh;
		scroll-padding: 1.5rem 0;
	}
	@media screen and (max-width: 64em) {
		.section-dialog__body {
			height: 70dvh;
			padding-right: 1.5rem;
		}
	}
	@media screen and (max-width: 48em) {
		.section-dialog__body {
			height: 70dvh;
		}
	}
	.section-dialog__body .inputs-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 0.5rem 0;
	}
	.section-dialog__body .inputs-container label {
		margin-top: 1rem;
		font-size: var(--type_scale_2);
		color: var(--clr_grey_shade_a);
	}
	[data-theme='dark'] .section-dialog__body .inputs-container label {
		color: var(--clr_grey_shade_e);
	}

	.section-dialog__body .inputs-container textarea {
		font-family: inherit;
		resize: vertical;
		margin: 0.5rem 0 1.5rem 0;
		padding: 0.5rem;
		min-width: min(37.5rem, calc(100% - 1rem));
		min-height: 16ch;
		outline: none;
		font-size: 1rem;
		border-radius: 0.5rem;
		border: 1px solid var(--clr_grey_shade_d);
		color: #000;
		background-color: var(--clr_light);
	}
	[data-theme='dark'] .section-dialog__body .inputs-container textarea {
		color: #fff;
		background-color: var(--clr_grey_shade_a);
		border-color: var(--clr_grey_shade_b);
	}

	.section-dialog__bottom {
		padding: 1rem 0 1rem 0;
		position: sticky;
		bottom: 0;
		background-color: #fff;
		border-top: 1px solid var(--clr_grey_shade_d);
	}
	[data-theme='dark'] .section-dialog .section-dialog__bottom {
		background-color: var(--clr_dark_shade_a);
		border-top-color: var(--clr_grey_shade_a);
	}
	@media screen and (max-width: 48em) {
		.section-dialog__bottom {
			padding-bottom: 1rem;
		}
	}
</style>
