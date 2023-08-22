<script>
	import SectionCardDialog from '$lib/components/SectionCardDialog.svelte';
	import CheckboxCircleFill from '$lib/icons/checkbox-circle-fill.svelte';

	export let completed = false;
	export let completed_questions = [];

	export let language;
	export let item;

	function openDialog() {
		if(language === 'kh') {
			document.getElementById(`dialog-${item.id}-kh`).showModal();
		} else {
			document.getElementById(`dialog-${item.id}`).showModal();
		}
	}
</script>

<section class="section-card">
	<button on:click={openDialog}>
		<span class="section-card__top">
			<h2>
				{#if language === 'en'}
					{item.title}
				{:else}
					{item.title_kh}
				{/if}
			</h2>
			{#if completed}
				<span class="icon">
					<CheckboxCircleFill />
				</span>
			{/if}
		</span>
		<ul>
			{#if language === 'en'}
				{#each item.questions as question}
					<li class={`${question in completed_questions ? 'completed' : ''}`}>{question}</li>
				{/each}
			{/if}
			{#if language === 'kh'}
				{#if item.questions_kh && item.questions_kh.length > 0}
					{#each item.questions_kh as question}
						<li>{question}</li>
					{/each}
				{/if}
			{/if}
		</ul>
	</button>
</section>
<!-- <output data-output-id={item.id} style="padding: 1rem 0 2rem 0; margin: 2rem 0; min-height: 5rem;" /> -->
<SectionCardDialog {language} {item} />

<style>
	.section-card > button {
		appearance: none;
		text-transform: none;
		font: inherit;
		box-shadow: none;
		border: none;
		outline: none;
		background: none;
		cursor: pointer;
		text-align: start;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		min-height: 100%;
		width: 100%;
		padding: 1.5rem;
		border-radius: 0.75rem;
		box-shadow: 0 0.325rem 0.5rem rgba(0, 0, 0, 0.175);
		transition: outline 200ms ease-out;
		background-color: #fff;
		background-color: color-mix(in srgb, var(--clr_ivory) 50%, #fff 50%);
	}
	.section-card > button:active {
		transform: translateY(0.25rem);
	}
	.section-card > button:hover h2,
	.section-card > button:focus h2 {
		color: var(--clr_primary_shade_a);
	}
	.section-card h2 {
		font-size: calc(var(--type_scale_5) * 0.75);
		margin: 0;
		color: var(--clr_dark);
		transition: 200ms ease-out color;
	}
	.section-card__top {
		display: inline-flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}
	.section-card__top .icon {
		transform: scale(1.5);
	}
	.section-card ul {
		padding-left: 1rem;
	}
	.section-card ul li {
		list-style-type: circle;
		color: var(--clr_grey_shade_c);
	}
	.section-card ul li.completed {
		list-style-type: disc;
		color: var(--clr_dark);
	}
	.section-card ul li:last-of-type {
		margin-bottom: 0;
	}
</style>
